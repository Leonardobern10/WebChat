import express, { Application, Request, Response } from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { MessageService } from '../service/MessageService';
import routerStatus from '../routes/routerStatus';
import { Message } from '../model/Message';
import { HttpMethod } from '../contants/Methods';
import { Routes } from '../contants/PathRoutes';
import { SocketMethods } from '../contants/Socket';
import { Messages } from '../contants/Messages';
import { UrlClient } from '../contants/UrlClient';

export class ServerApp {
    private app: Application;
    private server;
    private io: Server;
    private port: string;
    private service: MessageService;

    constructor(port: string) {
        this.app = express();
        this.app.use(express.json());
        this.server = createServer(this.app);
        this.io = new Server(this.server, {
            cors: {
                origin: UrlClient.ALLOWED_ORIGIN,
                methods: HttpMethod.ALLOWED_METHODS,
            },
        });
        this.port = port;
        this.connection();
        this.service = new MessageService();
        this.registerStatisRoute();
    }

    async registerStatisRoute() {
        this.app.use(Routes.GET_STATUS, routerStatus);
    }

    private async saveMessageToDatabase(message: Message) {
        await this.service.saveMessageToDatabase(
            message.getUser(),
            message.getMessage(),
            message.getTimestamp(),
        );
    }

    async listen() {
        this.server.listen(this.port, () => {
            console.log(`${Messages.SERVER_RUNNING}${this.port}/`);
        });
    }

    async connection() {
        this.io.on(SocketMethods.INIT_CONNECTION, async (socket) => {
            console.log(`${Messages.USER_CONNECTED} ${socket.id}`);

            try {
                const history = await this.getHistory();
                // Obtem o histórico diretamente
                socket.emit(SocketMethods.HISTORY_MESSAGES, history); // Envia o histórico para o cliente
            } catch (error) {
                console.error(Messages.ERROR_GET_HISTORY, error);
            }

            socket.on(SocketMethods.SET_NAME_FOR_USER, (username: any) => {
                console.log(
                    `${Messages.USER_RECEIVED_USERNAME} ${socket.id}: ${username}`,
                );
                socket.data.username = username;
            });

            socket.on(
                SocketMethods.PUBLIC_MESSAGE_FOR_SERVER,
                (message: string) => {
                    console.log(
                        `${Messages.MESSAGE_RECEIVED_TO_USER} ${socket.id}: ${message}`,
                    );
                    const username = socket.data.username || socket.id;
                    // Instanciando o objeto Message
                    const newMessage = new Message(
                        username,
                        message,
                        new Date(),
                    );

                    socket.emit(SocketMethods.MESSAGE_FOR_CHAT, newMessage);
                    socket.broadcast.emit(
                        SocketMethods.MESSAGE_FOR_CHAT,
                        newMessage,
                    );

                    // Salva no banco de dados
                    this.saveMessageToDatabase(newMessage);
                },
            );
        });
    }

    async getHistory(): Promise<any[]> {
        try {
            const rows = await this.service.getAllMessages();
            return rows; // Retorna as mensagens como um array
        } catch (error) {
            console.error(Messages.ERROR_GET_HISTORY, error);
            throw error;
        }
    }
}
