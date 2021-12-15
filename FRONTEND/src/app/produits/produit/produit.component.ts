import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
