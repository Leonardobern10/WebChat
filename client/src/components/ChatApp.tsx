import { useEffect, useState } from 'react';
import { SendMessage } from './SendMessage';
import { Chat } from './Chat';
import { socket } from '../main';
import { Message } from '../model/Message';
import { SocketEvents } from '../contants/SocketEvents';

export const ChatApp = () => {
    const [chatMessages, setChatMessages] = useState<Message[]>([]);

    // Escuta mensagens do servidor e atualiza o estado
    useEffect(() => {
        socket.on(SocketEvents.PUBLIC_MESSAGE_TO_CHAT, (message: Message) => {
            setChatMessages((prevMessages) => [...prevMessages, message]);
        });

        socket.on(SocketEvents.HISTORY_MESSAGES, (history: Message[]) => {
            console.log(`Historico recebido\n`, history);
            setChatMessages((prevMessages) => [...prevMessages, ...history]);
        });

        // Limpa o listener ao desmontar o componente
        return () => {
            socket.off(SocketEvents.PUBLIC_MESSAGE_TO_CHAT);
            socket.off(SocketEvents.HISTORY_MESSAGES);
        };
    }, [socket]);

    // Função para adicionar mensagens enviadas pelo próprio usuário

    return (
        <div>
            <Chat chatMessages={chatMessages} />
            <SendMessage />
        </div>
    );
};
