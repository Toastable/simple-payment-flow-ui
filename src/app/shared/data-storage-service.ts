import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Receipt } from 'src/models/receipt.model';
import { SiteDetails } from 'src/models/sitedetails.model';
import { SiteSearch } from 'src/models/sitesearch.model';
import { SiteService } from '../sites/site-service';

/*
* The data storage service has been separated out here to make the distinction between functionality related to performing CRUD operations via the API
* from the internal operations that relate to managing the state of the data that the application has. This looser coupling means that the SiteService
* does not need to care if the details of the API change in the background, only that the DataStorageService continues to fulfill its obligations.
*
* I have deliberately avoided using direct returns in these methods and instead used events to drive everything. This is because the output of these methods could potentially be very useful
* to the rest of the application and not just the component calling the method. This is in line with event driven design and in keeping with normal practice in Angular.
*/

@Injectable({providedIn: "root"})
export class DataStorageService implements OnInit {

  constructor(private siteService: SiteService, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  setSite(siteSearch: SiteSearch){
    if(!siteSearch){
      this.siteService.setSite(null);
    }
    else{
      const siteSearchJSON = JSON.stringify(siteSearch);

      const httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      return this.httpClient.post<SiteDetails>(
        "http://localhost:10151/api/payment/FindASite", 
        siteSearchJSON,
        { headers: httpHeaders }
        )
        .pipe(
          tap(siteDetails => {
            this.siteService.setSite(siteDetails);
          })
        ).subscribe();
    }
  }

  setPumpStatus(pumpId: string, unlocked: boolean){

    if(!unlocked){
      return;
    }

    const siteSearchJSON = JSON.stringify(pumpId);

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<boolean>(
      "http://localhost:10151/api/payment/UnlockPump", 
      siteSearchJSON,
      { headers: httpHeaders }
      )
      .pipe(
        tap(pumpUnlocked => {
          this.siteService.setPumpUnlocked(pumpUnlocked);
        })
      ).subscribe();
  }

  setReceipt(pumpId: string){
    //do API call here
    const siteSearchJSON = JSON.stringify(pumpId);

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<Receipt>(
      "http://localhost:10151/api/payment/Receipt", 
      siteSearchJSON,
      { headers: httpHeaders }
      )
      .pipe(
        tap(receipt => {
          this.siteService.setReceipt(receipt);
        })
      ).subscribe();
  }

}
