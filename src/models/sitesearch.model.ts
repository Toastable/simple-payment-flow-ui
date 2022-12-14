export class SiteSearch {

    //In reality there would be more in here to reflect the use of a proper postcode search
    //This object would encapsulate any transformations needed to the input data
    //and other fields which might be useful such as whether the user wanted electric charge points etc
    public searchValue: string;

    constructor(searchValue: string) {
       this.searchValue = searchValue;
    }
}