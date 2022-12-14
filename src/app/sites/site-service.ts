import { Subject } from "rxjs";
import { Receipt } from "src/models/receipt.model";
import { SiteDetails } from "src/models/sitedetails.model";

/*
* The SiteService is solely responsible for managing the currently held data relating to Site related objects and communicating
* across the application. Services have an elevated position in Angular and disregard component and module hierachy and are therefore
* ideal for ensuring that pub/sub operations necessary for the application to work do not pollute components more than they need to.
*/
export class SiteService {

    //In reality you would have an array of SiteDetails here in addition to the site detail the user selected from their search results
    //Here I am assuming that there is only one result and using siteDetail to represent it
    private siteDetail: SiteDetails;
    private pumpReceipt: Receipt;
    private pumpUnlocked: boolean;

    siteDetailChanged = new Subject<SiteDetails>();
    pumpReceiptChanged = new Subject<Receipt>();
    pumpUnlockedChanged = new Subject<boolean>();

    constructor() {
        this.siteDetail = null;
    }

    setSite(siteDetails: SiteDetails){
        this.siteDetail = siteDetails;
        this.siteDetailChanged.next(this.siteDetail);
    }

    setReceipt(pumpReceipt: Receipt){
        this.pumpReceipt = pumpReceipt;
        this.pumpReceiptChanged.next(this.pumpReceipt);
    }

    setPumpUnlocked(unlocked: boolean){
        this.pumpUnlocked = unlocked;
        this.pumpUnlockedChanged.next(this.pumpUnlocked);
    }
}