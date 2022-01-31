import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Detalii } from 'src/app/interface/detalii';
import { ComenziService } from 'src/app/services/comenzi.service';
import { DataService } from 'src/app/services/data.service';
import { DetaliiService } from 'src/app/services/detalii.service';

@Component({
  selector: 'app-detalii',
  templateUrl: './detalii.component.html',
  styleUrls: ['./detalii.component.scss']
})
export class DetaliiComponent implements OnInit {

  panelOpenState = false;
  public subscription: Subscription;
  public loggedUser;
  public displayedColumns = ['idComanda', 'data', 'valoare', 'statusTotal', 'idClient'];
  public id;


  public StatusForm: FormGroup = new FormGroup(
    {
      status: new FormControl('')
      
    });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private detaliiService: DetaliiService,
    private comenziService: ComenziService) {}

   
  ngOnInit(): void {
    this.subscription = this.route.params.subscribe( params => {
    this.id = +params['id'];
    this.detaliiService.getComanda(this.id).subscribe(
      (result) => {
       
        const rezultat = document.createElement("p");
        rezultat.innerHTML = "Id Comanda: " + result.idComanda;
        const rezultat1 = document.createElement("p");

        rezultat1.innerHTML =  "Data: " + result.data;
        document.getElementById("comanda").appendChild(rezultat);
        document.getElementById("comanda").appendChild(rezultat1);
        
        const rezultat3 = document.createElement("p");
        rezultat3.innerHTML =  "Valoare Comanda: " + result.valoare;
        document.getElementById("comanda").appendChild(rezultat3);

       const rezultat4 = document.createElement("p");
        rezultat4.innerHTML =  "Status Comanda: " + result.statusTotal;
        document.getElementById("comanda").appendChild(rezultat4);
      
        const rezultat5 = document.createElement("p");
        rezultat1.innerHTML =  "Id pentru client: " + result.idClient;
        document.getElementById("comanda").appendChild(rezultat5);
     
      },
      (error) => {
        console.log(error);
      }
  
     );
      
  

  });

  }

  

 
   
}