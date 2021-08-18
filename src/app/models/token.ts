export class Token {
    private id: string;
    private auth: string;
    private expiration: string;
	private profileUrl: string;


	constructor(id: string, auth: string, expiration: string, profileUrl?: string) {
		this.id = id;
		this.auth = auth;
		this.expiration = expiration;

    }

	setProfile(profile: string) {
		this.profileUrl = profile;
	}

	public getid(): string {
		return this.id;
	}


	public getauth(): string {
		return this.auth;
	}

	public getexpiration(): string {
		return this.expiration;
	}


	public setid(value: string) {
		this.id = value;
	}

	public setauth(value: string) {
		this.auth = value;
	}

	public setexpiration(value: string) {
		this.expiration = value;
	}
	}



