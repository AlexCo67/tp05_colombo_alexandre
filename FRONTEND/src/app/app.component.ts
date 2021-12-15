import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitState } from 'src/shared/states/produit-state';
import { Select } from '@ngxs/store';
import { AdresseState } from 'src/shared/states/adresse-state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp4';

  @Select(ProduitState.getNbProduits)
  nb$!: Observable<number>;

  @Select(AdresseState.getNbAdresses)
  nbAdresses$!:Observable<number>;
}
