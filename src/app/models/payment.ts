export class Payment {
    amount: number;
    period: Date;
    status: boolean;

    constructor
        (
            amount: number,
            period: Date,
            status: boolean
        ) {
        this.amount = amount;
        this.period = period;
        this.status = status;
    }
}

