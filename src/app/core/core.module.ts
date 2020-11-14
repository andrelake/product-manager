import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './component/navbar/nav-bar.component';
import { PageNotFoundComponent } from './component/pageNotFound/pageNotFound.component';

@NgModule({
    declarations: [
        NavBarComponent,
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forChild([
      {
        path: '**', component: PageNotFoundComponent
      }
        ])
    ],
    exports: [
        NavBarComponent,
    ]
})
export class CoreModule {

}