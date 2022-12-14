import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { SiteDetailComponent } from './sites/site-search/site-detail/site-detail.component';
import { SiteSearchComponent } from './sites/site-search/site-search.component';
import { SitesComponent } from './sites/sites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteService } from './sites/site-service';

@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    SiteSearchComponent,
    SiteDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    SiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
