export class CalendarEvent 
{
    private day:Date;
    private title:string;
    private description:string;
    private guests:string[];
    private owner:string;


	constructor($day: Date, $title: string, $description: string, $guests: string[], $owner: string) {
		this.day = $day;
		this.title = $title;
		this.description = $description;
		this.guests = $guests;
		this.owner = $owner;
	}


    /**
     * Getter $day
     * @return {Date}
     */
	public get $day(): Date {
		return this.day;
	}

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Getter $guests
     * @return {string[]}
     */
	public get $guests(): string[] {
		return this.guests;
	}

    /**
     * Getter $owner
     * @return {string}
     */
	public get $owner(): string {
		return this.owner;
	}

    /**
     * Setter $day
     * @param {Date} value
     */
	public set $day(value: Date) {
		this.day = value;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}

    /**
     * Setter $guests
     * @param {string[]} value
     */
	public set $guests(value: string[]) {
		this.guests = value;
	}

    /**
     * Setter $owner
     * @param {string} value
     */
	public set $owner(value: string) {
		this.owner = value;
	}

}
