import { pool } from '../config/database';
import { Messages } from '../contants/Messages';
import { Query } from '../contants/Query';

export class Repository {
    private connection;

    constructor() {
        this.connection = pool;
    }

    async saveMessageToDatabase(
        user: string,
        message: string,
        timestamp: Date,
    ) {
        try {
            await this.connection.query(Query.INSERT_MSG_ON_DB, [
                user,
                message,
                timestamp,
            ]);
            console.log(Messages.SAVE_MESSAGE_SUCCESS);
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
