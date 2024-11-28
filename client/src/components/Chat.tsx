import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { Colors } from '../theme/Colors';
import { Message } from '../model/Message';
import { Fonts } from '../theme/Fonts';

const ChatDesign = styled.div`
    width: 100%;
    height: 22rem;
    padding: 1rem;
    overflow-y: auto;
    background-color: ${Colors.green3};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    gap: 0.5rem;

    font-family: ${Fonts.content};
`;

const MessageList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 90%;
    height: auto;
`;

const ChatMessage = styled.li`
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    background-color: ${Colors.green5};
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    word-wrap: break-word;
    font-size: 1rem;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${Colors.green2};
        border: 2px solid ${Colors.green6};
    }
`;

interface ChatProps {
    chatMessages: Message[];
}

export const Chat: React.FC<ChatProps> = ({ chatMessages }) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // Scroll para o final do chat sempre que uma nova mensagem for adicionada
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatMessages]);

    return (
        <ChatDesign>
            <MessageList>
                {chatMessages.map((item, index) => (
                    <ChatMessage key={index}>
                        <div>
                            <p>
                                <span>{item.user}:</span> {item.message}
                                <br />
                                <small>
                                    {Intl.DateTimeFormat('pt-BR', {
                                        dateStyle: 'medium',
                                        timeStyle: 'short',
                                    }).format(new Date(item.timestamp))}
                                </small>
                            </p>
                        </div>
                    </ChatMessage>
                ))}
                {/* Referência ao final da lista */}
                <div ref={messagesEndRef} />
            </MessageList>
        </ChatDesign>
    );
};
