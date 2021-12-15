import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from 'src/shared/models/produit';
import { serviceCatalogue } from 'src/app/serviceCatalogue';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private serviceCatalogue : serviceCatalogue) { }

  ngOnInit(): void {

  }

  produit: Produit = this.serviceCatalogue.getProduit();

  produitCourant?: Observable<Produit>;
}
