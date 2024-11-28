import { pool } from '../config/database';
import { Console } from '../contants/Info';
import { Query } from '../contants/Query';

export class Repository {
    private connection;

    constructor() {
        this.connection = pool;
    }

    async saveMessage(user: string, message: string, timestamp: Date) {
        try {
            this.connection.query(Query.INSERT_MSG_ON_DB, [
                user,
                message,
                timestamp,
            ]);
            console.log(Console.SUCESS.SAVE_MESSAGE_SUCCESS);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllMessages(): Promise<any> {
        try {
            const rows = await this.connection.query(
                Query.GET_ALL_MESSAGES_ON_DB,
            );
            return rows[0];
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
