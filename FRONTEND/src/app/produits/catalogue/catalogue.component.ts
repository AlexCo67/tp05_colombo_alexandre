import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from 'src/shared/models/produit';
import { serviceCatalogue } from 'src/app/serviceCatalogue';
import { Store } from '@ngxs/store';
import { AddProduit, DelProduit } from 'src/shared/actions/produit-actions';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private serviceCatalogue : serviceCatalogue,private store: Store) { 

  }

  catalogue?: Observable<Array<Produit>>;

  ajouterProduitPanier(c:Produit){
    console.log("produit ajouté " + c.nom);
    this.store.dispatch(new AddProduit(c));
  }


  detail(c:Produit){
    console.log("todo");
    if(c.detailVisible){
      c.detailVisible=false;
    }
    else{
    c.detailVisible=true;
    this.serviceCatalogue.setProduit(c.id,c.nom,c.detailVisible);
    }
  }

  ngOnInit(): void {

  this.catalogue=this.serviceCatalogue.getCatalogue();
  }

}
