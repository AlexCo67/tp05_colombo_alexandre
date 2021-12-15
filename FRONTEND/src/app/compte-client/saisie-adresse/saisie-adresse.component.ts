import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddAdresse } from 'src/shared/actions/adresse-actions';
import { Adresse } from 'src/shared/models/adresse';

@Component({
  selector: 'app-saisie-adresse',
  templateUrl: './saisie-adresse.component.html',
  styleUrls: ['./saisie-adresse.component.css']
})
export class SaisieAdresseComponent implements OnInit {
  adresseForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.adresseForm = this.formBuilder.group({
      nom: '',
      numero: 0,
      rue:'',
      ville: '',
      codePostal: 0,
    });

   }

  ngOnInit(): void {
  }


  addAdresse() {
    let nom: string = this.adresseForm.value['nom'];
    let ville: string = this.adresseForm.value['ville'];
    let numero: number = this.adresseForm.value['numero'];
    let rue: string = this.adresseForm.value['rue'];
    let codePostal: number = this.adresseForm.value['codePostal'];

    let adresse: Adresse;

    adresse = new Adresse();
    adresse.nom = nom;
    adresse.rue = rue;
    adresse.ville = ville;
    adresse.codePostal = codePostal;
    adresse.numero=numero;

    console.log(adresse);
    this.adresseForm = this.formBuilder.group({
      nom: '',
      rue: '',
      numero: 0,
      ville: '',
      codePostal:0,
    });

    this.store.dispatch(new AddAdresse(adresse));
  }

}
