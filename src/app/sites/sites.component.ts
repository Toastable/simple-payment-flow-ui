import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SiteDetails } from 'src/models/sitedetails.model';
import { SiteService } from './site-service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit, OnDestroy {

  searchMode = true; 
  subscription?: Subscription;
  siteDetails: SiteDetails;


  constructor(private siteService: SiteService) { }

  ngOnInit(): void {

    this.subscription = this.siteService.siteDetailChanged
      .subscribe((siteDetails: SiteDetails) => {

        this.searchMode = siteDetails == null;
        this.siteDetails = siteDetails;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
