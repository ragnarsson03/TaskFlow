import type { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store';
import { addMessage } from './slices/chatSlice';
import { generarRespuesta } from './services/geminiService';

export default function App() {
  const [input, setInput] = useState('');
  const messages = useSelector((state: RootState) => state.chat.messages);
  const dispatch = useDispatch();

  const handleEnviar = async () => {
    if (!input.trim()) return;

    dispatch(addMessage({ role: 'user', text: input }));
    const respuesta = await generarRespuesta(input);
    dispatch(addMessage({ role: 'gemini', text: respuesta }));
    setInput('');
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🤖 Chat con Gemini (React + Redux + TS)</h1>
      <textarea
        rows={4}
        value={input}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleEnviar}>Enviar</button>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>
            <strong>{msg.role === 'user' ? 'Tú' : 'Gemini'}:</strong> {msg.text}
          </p>
        ))}
      </div>
    </div>
  );
}
