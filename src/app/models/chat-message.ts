export class ChatMessage {
    date: Date;
    content: string;
    success: boolean;

    constructor(
        content: string,
        date: Date,
        success: boolean
    ) {
        this.content = content;
        this.date = date;
        this.success = success;
    }

}
