import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

export { socket };
