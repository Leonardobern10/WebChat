import { Repository } from '../repository/MessageRepository';

export class MessageService {
    private repository: Repository;

    constructor() {
        this.repository = new Repository();
    }

    async saveMessage(user: string, message: string, timestamp: Date) {
        try {
            await this.repository.saveMessage(user, message, timestamp);
        } catch (error) {
            throw error;
        }
    }

    async getAllMessages() {
        try {
            const rows = await this.repository.getAllMessages();
            return rows;
        } catch (error) {
            throw error;
        }
    }
}
