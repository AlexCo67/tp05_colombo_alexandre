import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Adresse } from 'src/shared/models/adresse';
import { AdresseState } from 'src/shared/states/adresse-state';
import { Store } from '@ngxs/store';
import { DelAdresse } from 'src/shared/actions/adresse-actions';

@Component({
  selector: 'app-liste-adresses',
  templateUrl: './liste-adresses.component.html',
  styleUrls: ['./liste-adresses.component.css']
})
export class ListeAdressesComponent implements OnInit {

  constructor(private store: Store) { }

  supprimerAdresse(c:Adresse){
    console.log("adresse supprimée" + c.nom);
    this.store.dispatch(new DelAdresse(c));
  }

  ngOnInit(): void {
  }

  @Select(AdresseState.getListeAdresses) liste$!: Observable<Adresse[]>;

}
