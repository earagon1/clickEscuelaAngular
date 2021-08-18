export class Comment 
{
    sender:string;
    content:string;
    date: Date;
    
    constructor
    ( 
    sender:string,
    content:string,
    date: Date
    )
    {
        this.date=date;
        this.content=content;
        this.sender=sender;
    }

}
