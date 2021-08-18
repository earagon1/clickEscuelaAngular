export class Session {
    token: string;
    user: string;
    avatarImage: string;
    profile: string;


    constructor(token: string, user: string, avatarImage: string) {
        this.token = token;
        this.user = user;
        this.avatarImage = avatarImage;
    }


}
