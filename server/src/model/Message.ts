export class Message {
    private user: string;
    private message: string;
    private timestamp: Date;

    constructor(user: string, message: string, timestamp: Date) {
        this.user = user;
        this.message = message;
        this.timestamp = timestamp;
    }

    public getUser(): string {
        return this.user;
    }
    public getMessage(): string {
        return this.message;
    }
    public getTimestamp(): Date {
        return this.timestamp;
    }

    public setUser(user: string) {
        this.user = user;
    }
    public setMessage(message: string) {
        this.message = message;
    }
    public setTimestamp(timestamp: Date) {
        this.timestamp = timestamp;
    }
}
