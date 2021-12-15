import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Produit } from 'src/shared/models/produit';
import { AddProduit } from 'src/shared/actions/produit-actions';


@Component({
  selector: 'app-saisir-produit',
  templateUrl: './saisir-produit.component.html',
  styleUrls: ['./saisir-produit.component.css']
})
export class SaisirProduitComponent implements OnInit {

  produitForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private store: Store) { 
    this.produitForm = this.formBuilder.group({
      nom: '',
    });


  }

  ngOnInit(): void {
  }

  addProduit() {
    let nom: string = this.produitForm.value['nom'];


    let produit: Produit;

    produit = new Produit();
    produit.nom = nom;

    console.log(produit);
    this.produitForm = this.formBuilder.group({
      nom: ''
    });

    this.store.dispatch(new AddProduit(produit));
  }

}
