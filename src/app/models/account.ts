import { Payment } from "./payment";

export class Account {
    private titularId: string;
    private titularName: string;
    private titularSurname: string;
    private payments: Payment[];
    private state:boolean;
    


    constructor($titularId: string, $titularName: string, $titularSurname: string, $payments: Payment[]) {
        this.titularId = $titularId;
        this.titularName = $titularName;
        this.titularSurname = $titularSurname;
        this.payments = $payments;
        this.state = this.getState($payments);
    }

     getState(payments): any 
{
    for(let payment of payments){
        if (!payment.status) return false
    }
    return true
}

    /**
     * Getter $titularId
     * @return {string}
     */
    public get $titularId(): string {
        return this.titularId;
    }

    /**
     * Getter $titularName
     * @return {string}
     */
    public get $titularName(): string {
        return this.titularName;
    }

    /**
     * Getter $titularSurname
     * @return {string}
     */
    public get $titularSurname(): string {
        return this.titularSurname;
    }

    /**
     * Getter $payments
     * @return {Payment[]}
     */
    public get $payments(): Payment[] {
        return this.payments;
    }

    /**
     * Getter $state
     * @return {boolean}
     */
    public get $state(): boolean {
        return this.state;
    }

    /**
     * Setter $titularId
     * @param {string} value
     */
    public set $titularId(value: string) {
        this.titularId = value;
    }

    /**
     * Setter $titularName
     * @param {string} value
     */
    public set $titularName(value: string) {
        this.titularName = value;
    }

    /**
     * Setter $titularSurname
     * @param {string} value
     */
    public set $titularSurname(value: string) {
        this.titularSurname = value;
    }

    /**
     * Setter $payments
     * @param {Payment[]} value
     */
    public set $payments(value: Payment[]) {
        this.payments = value;
    }

    /**
     * Setter $state
     * @param {boolean} value
     */
    public set $state(value: boolean) {
        this.state = value;
    }



}



