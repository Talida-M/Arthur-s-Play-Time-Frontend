import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imprimante } from 'src/app/interface/imprimante';
import { DataService } from 'src/app/services/data.service';
import { ImprimanteService } from 'src/app/services/imprimante.service';

import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-imprimante',
  templateUrl: './imprimante.component.html',
  styleUrls: ['./imprimante.component.scss']
})
export class ImprimanteComponent implements OnInit {
  public imprimanta: Imprimante[] = [];
  public displayedColumns = ['id', 'nume', 'dimensiunepat', 'status', 'edit', 'delete'];
  matDialog: any;

  public statusForm: FormGroup = new FormGroup(
    {
      status: new FormControl('')
      
    });
  constructor(
    private router: Router,
    //private dataService: DataService,
    private imprimanteService: ImprimanteService,
  ) { }

  get status(): AbstractControl{
    return this.statusForm;
  }
  ngOnInit() {
    this.imprimanteService.getImprimante().subscribe(
      (result) => {
        console.log(result);
        this.imprimanta = result;
      }
    );
}

public deleteImprimanta(id): void {
  this.imprimanteService.deleteImprimanta(id).subscribe(
    (result) => {
      console.log(result);
     // this.imprimanta = result;
    },
    (error) => {
      console.error(error);
    }
  );
}

public update(): void {
  var imprimanta = localStorage.getItem('Id');
  var status = this.statusForm.controls['status'].value;
  console.log(status);
  console.log(imprimanta);
  this.editImprimanta(imprimanta,status);
   }


public editImprimanta(imprimanta, status): void {
     this.imprimanteService.editImprimanta(imprimanta, status).subscribe(
      (result) => {
        console.log(result);
        
      },
      (error) => {
        console.log(error);
      }
     );
}
}

