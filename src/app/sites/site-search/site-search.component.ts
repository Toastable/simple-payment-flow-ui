import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { SiteSearch } from 'src/models/sitesearch.model';
import { DataStorageService } from '../../shared/data-storage-service';

@Component({
    selector: 'app-site-search',
    templateUrl: './site-search.component.html',
    styleUrls: ['./site-search.component.css']
})
export class SiteSearchComponent implements OnInit{

    constructor(private router: Router, private route: ActivatedRoute, private dataStorageService: DataStorageService) { } 

    ngOnInit(): void {
        
    }

    onFormSubmit(form: NgForm) {
        const value = form.value;
        const siteSearch = new SiteSearch(value.postcode);

        this.dataStorageService.setSite(siteSearch);

        this.router.navigate(['detail'], { relativeTo: this.route });
    }
}