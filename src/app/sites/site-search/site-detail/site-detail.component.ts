import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage-service';
import { Receipt } from 'src/models/receipt.model';
import { SiteService } from '../../site-service';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit, OnDestroy {

  @Input() siteDetail: any;

  receiptSubscription?: Subscription;
  pumpUnlockedSubscription?: Subscription;

  public pumpUnlocked = false;

  public receipt: Receipt;

  constructor(private dataStorageService: DataStorageService, private siteService: SiteService){ 

  }

  ngOnInit(): void {
    this.receiptSubscription = this.siteService.pumpReceiptChanged
    .subscribe((receipt: Receipt) => {
      this.receipt = receipt;
    });

    this.pumpUnlockedSubscription = this.siteService.pumpUnlockedChanged
      .subscribe((unlocked: boolean) => {
        this.pumpUnlocked = unlocked;
      });
  }

  ngOnDestroy() {
    this.receiptSubscription.unsubscribe();
    this.pumpUnlockedSubscription.unsubscribe();
  }

  onUnlockPumpBtnClick(){
    this.dataStorageService.setPumpStatus(this.siteDetail.nextAvailablePumpId, true);
    this.dataStorageService.setReceipt(this.siteDetail.nextAvailablePumpId);
  }

  onCloseDetailsBtnClick(){
    this.dataStorageService.setPumpStatus(this.siteDetail.nextAvailablePumpId, false);
    this.dataStorageService.setSite(null);
  }

  onDoneBtnClick(){
    this.dataStorageService.setPumpStatus(this.siteDetail.nextAvailablePumpId, false);
    this.dataStorageService.setSite(null);
  }
}
