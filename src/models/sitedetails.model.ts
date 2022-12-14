export class SiteDetails {

    constructor(name: string, address: string, openingTimes: string, nextPumpId: string) {
        this.name = name;
        this.address = address;
        this.openingTimes = openingTimes;
        this.nextAvailablePumpId = nextPumpId;
    }

    public name: string;
    public address: string;
    public openingTimes: string;
    public nextAvailablePumpId: string;
}