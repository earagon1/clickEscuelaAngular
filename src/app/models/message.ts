export class Message {
    sender: string;
    content: string;
    type: string;
    date: Date;
    avatarImg: string

    constructor
        (
            sender: string,
            content: string,
            type: string,
            date: Date, avatarImg: string
        ) {
        this.sender = sender
        this.content = content
        this.type = type
        this.date = date;
        this.avatarImg = avatarImg
    }

}
