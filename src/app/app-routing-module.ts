import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SiteDetailComponent } from "./sites/site-search/site-detail/site-detail.component";
import { SiteSearchComponent } from "./sites/site-search/site-search.component";
import { SitesComponent } from "./sites/sites.component";

/*
* The routing here defaults to sites and ensures that the user always has a friendly looking URL in their browser
* and it also assists browsers in building up a more useful history rather than having a static URL that never changes
* when the user performs actions within the application.
*/
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/sites',
        pathMatch: 'full'
    },
    {
        path: 'sites',
        component: SitesComponent,
        children: [
            { path: '',  component: SiteSearchComponent},
            { path: 'detail', component: SiteDetailComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}