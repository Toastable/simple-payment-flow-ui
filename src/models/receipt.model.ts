export class Receipt {

    constructor(amount: string, date: string) {
        this.amount = amount;
        this.date = date;
    }

    public amount: string;
    public date: string;
}