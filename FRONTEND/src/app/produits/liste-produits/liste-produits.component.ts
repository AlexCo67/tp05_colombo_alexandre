import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from 'src/shared/models/produit';
import { ProduitState } from 'src/shared/states/produit-state';
import { Store } from '@ngxs/store';
import { DelProduit } from 'src/shared/actions/produit-actions';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  constructor(private store: Store) { }

  supprimerProduitPanier(c:Produit){
    console.log("produit supprimé" + c.nom);
    this.store.dispatch(new DelProduit(c));
  }


  ngOnInit(): void {
  }

  @Select(ProduitState.getListeProduits)
  liste$!: Observable<Produit[]>;

}
