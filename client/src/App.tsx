import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { socket } from './main';

import './App.css';
import { ChatApp } from './components/ChatApp';

const App: React.FC = () => {
    useEffect(() => {
        socket.on('message for chat', (message: any) => {
            console.log(message);
        });
        return () => {
            socket.off('message for chat');
        };
    }, []);
    return (
        <div
            style={{
                minHeight: '100vh',
                margin: '0',
                padding: '0',
            }}
        >
            <Header />
            <div style={{ padding: '2rem' }}>
                <ChatApp />
            </div>
        </div>
    );
};

export default App;
