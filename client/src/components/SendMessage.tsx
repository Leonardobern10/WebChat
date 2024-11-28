import React, { useState } from 'react';
import { socket } from '../main';
import { FormComponent } from './FormComponent'; // Importando o componente genérico
import { Message } from '../model/Message';
import { Content } from '../contants/Contents';
import { SocketEvents } from '../contants/SocketEvents';
import { Alert } from '../contants/Alert';

export const SendMessage: React.FC = () => {
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmitMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newMessage: Message = {
            user: socket.id,
            message,
            timestamp: new Date(),
        };
        if (!newMessage.message) {
            alert(Alert.alertInsertMessage);
        } else {
            socket.emit(SocketEvents.MSG_TO_SERVER, newMessage.message);
        }
        setMessage('');
    };

    const handleSubmitUsername = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (username.trim()) {
            socket.emit(SocketEvents.SEND_USERNAME_TO_USER, username);
            alert(`${Alert.alertUsernameDefined}: ${username}`);
            setUsername('');
        }
    };

    return (
        <div>
            {/* Formulário para definir o nome de usuário */}
            <FormComponent
                onSubmit={handleSubmitUsername}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={Content.placeHolderInputUsername}
                buttonText={Content.textButtonSetUsername}
                inputWidth="100%"
                buttonWidth="15rem"
            />
            {/* Formulário para enviar mensagens */}
            <FormComponent
                onSubmit={handleSubmitMessage}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={Content.placeHolderInputSendMessage}
                buttonText={Content.textButtonSendMessage}
            />
        </div>
    );
};
