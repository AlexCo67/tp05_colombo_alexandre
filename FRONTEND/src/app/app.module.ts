import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { LiensComponent } from './liens/liens.component';
import {ProduitState} from '../shared/states/produit-state';
import { AdresseState } from 'src/shared/states/adresse-state';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { PageLoginComponent } from './compte-client/page-login/page-login.component';


const appRoutes: Routes = [
  {
    path: 'produits',
    loadChildren: () =>
      import('./produits/produits.module').then((m) => m.ProduitsModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LiensComponent
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([ProduitState]),
    NgxsModule.forRoot([AdresseState])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: HttpInterceptorInterceptor, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
