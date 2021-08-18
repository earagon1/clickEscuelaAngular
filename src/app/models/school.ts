export class School 
{
    private id:string;
    private name:string;
    private adress:string;
    private city:string;
    private province:string;
    private postalCode:string;
    private telephone:string;
    private email:string;


	constructor($name: string, $adress: string, $city: string, $province: string, $postalCode: string, $telephone: string,$email:string)
    {
		this.name = $name;
		this.adress = $adress;
		this.city = $city;
		this.province = $province;
		this.postalCode = $postalCode;
		this.telephone = $telephone;
        this.email = $email
	}


    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

       /**
     * Getter $id
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $adress
     * @return {string}
     */
	public get $adress(): string {
		return this.adress;
	}

    /**
     * Getter $city
     * @return {string}
     */
	public get $city(): string {
		return this.city;
	}

    /**
     * Getter $province
     * @return {string}
     */
	public get $province(): string {
		return this.province;
	}

    /**
     * Getter $postalCode
     * @return {string}
     */
	public get $postalCode(): string {
		return this.postalCode;
	}

    /**
     * Getter $telephone
     * @return {string}
     */
	public get $telephone(): string {
		return this.telephone;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $adress
     * @param {string} value
     */
	public set $adress(value: string) {
		this.adress = value;
	}

    /**
     * Setter $city
     * @param {string} value
     */
	public set $city(value: string) {
		this.city = value;
	}

    /**
     * Setter $province
     * @param {string} value
     */
	public set $province(value: string) {
		this.province = value;
	}

    /**
     * Setter $postalCode
     * @param {string} value
     */
	public set $postalCode(value: string) {
		this.postalCode = value;
	}

    /**
     * Setter $telephone
     * @param {string} value
     */
	public set $telephone(value: string) {
		this.telephone = value;
	}


}
