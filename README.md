# Gestor de Tareas Dinámico

Una aplicación web sencilla pero potente para gestionar tus tareas diarias. Creada con React, Redux Toolkit y Vite, esta herramienta te permite organizar tu día a día de forma eficiente.

## ✨ Características

- **Añadir Tareas:** Agrega nuevas tareas a tu lista de forma rápida.
- **Marcar como Completadas:** Lleva un seguimiento de tu progreso marcando las tareas como completadas.
- **Eliminar Tareas:** ¿Ya no necesitas una tarea? ¡Elimínala con un solo clic!
- **Notificaciones Interactivas:** Recibe confirmación visual de tus acciones (añadir, actualizar, eliminar).
- **Estado Centralizado:** Las tareas se gestionan a través de un estado global con Redux Toolkit.

## 🚀 Tecnologías Utilizadas

- **Frontend:**
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Redux Toolkit](https://redux-toolkit.js.org/) para el manejo de estado.
  - [React Toastify](https://fkhadra.github.io/react-toastify/introduction) para notificaciones.
- **Herramientas de Desarrollo:**
  - [Vite](https://vitejs.dev/) como empaquetador y servidor de desarrollo.
  - [ESLint](https://eslint.org/) para el linting de código.

## 📦 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en el puerto que Vite asigne (generalmente `http://localhost:5173`).

## 📜 Scripts Disponibles

En el archivo `package.json`, puedes encontrar los siguientes scripts:

- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta el linter para revisar el código.
- `npm run preview`: Sirve la build de producción localmente.
- `npm run deploy`: Despliega la aplicación en GitHub Pages.
