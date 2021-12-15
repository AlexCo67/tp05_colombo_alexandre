import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ProduitComponent } from './produit/produit.component';
import { SaisirProduitComponent } from './saisir-produit/saisir-produit.component';
import { ProduitState } from 'src/shared/states/produit-state';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailComponent } from '../detail/detail.component';
import { CompteClientComponent } from '../compte-client/compte-client.component';
import { SaisieAdresseComponent } from '../compte-client/saisie-adresse/saisie-adresse.component';
import { ListeAdressesComponent } from '../compte-client/liste-adresses/liste-adresses.component';
import { PageLoginComponent } from '../compte-client/page-login/page-login.component';

const appChild: Routes = [
  {
    path: 'listeProduits',
    component: ListeProduitsComponent,
  },
  {
    path: 'saisirProduit',
    component: SaisirProduitComponent,
  },

  {
    path: 'produit/:id',
    component: ProduitComponent,
  },

  {
    path: 'catalogue',
    component: CatalogueComponent,
  },

  {
    path:'detail',
    component:DetailComponent,
  },

  {
    path:'compteClient',
    component:CompteClientComponent
  },

  {
    path:'saisieAdresse',
    component:SaisieAdresseComponent

  },

  {
    path:'listeAdresses',
    component:ListeAdressesComponent

  },
{path:'login',
component:PageLoginComponent

}



];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,
    NgxsModule.forFeature([ProduitState]),
  ],

  declarations: [
    ListeProduitsComponent,
    ProduitComponent,
    SaisirProduitComponent,
    CatalogueComponent,
    DetailComponent,
    CompteClientComponent,
    SaisieAdresseComponent,
    ListeAdressesComponent,
    PageLoginComponent
  ],
})
export class ProduitsModule {}
