import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generarRespuesta(mensaje: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(mensaje);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error al generar respuesta de Gemini:', error);
    return '❌ Hubo un error al obtener respuesta de la IA.';
  }
}
