import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComenziService } from 'src/app/services/comenzi.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comenzi',
  templateUrl: './comenzi.component.html',
  styleUrls: ['./comenzi.component.scss']
})
export class ComenziComponent implements OnInit {

  panelOpenState = false;
  public subscription: Subscription;
  public loggedUser;
  public displayedColumns = ['idComanda', 'data', 'valoare', 'statusTotal', 'clientId', 'produse'];
  public comenzi = [];

  public statusForm: FormGroup = new FormGroup({
    id: new FormControl(),
    status: new FormControl(),
    
  });

  get id(): AbstractControl {
    return this.statusForm.get('id');
  }
  get status(): AbstractControl {
    return this.statusForm.get('status');
  }
  constructor(
    private router: Router,
    private dataService: DataService,
    private comenziService: ComenziService,
 
    ) {}
  
  ngOnInit(): void {
    this.comenziService.getComenzi().subscribe(
      (result) => {
        console.log(result);
        this.comenzi = result;
      }
    );
  }

  public getComenzi(): void {

    this.comenziService.getComenzi().subscribe(
      (result) => {
        console.log(result);
        this.comenzi = result;    
         
        
      },
      (error) => {
        console.log(error);
      }
  
     );
  }
  public goToProduse(id): void{
    this.router.navigate(['/detalii', id]);
  }

  public update(): void {
    var id = this.statusForm.controls['id'].value;
    var status = this.statusForm.controls['status'].value;
    console.log(id);
    console.log(status);
    this.updateCom(id,status);
     }
   public updateCom(id,status): void {
     console.log(id);
     this.comenziService.updateCom(id,status).subscribe(
       (result) => {
         console.log(result);
         
       },
       (error) => {
         console.log(error);
       }
   
      );

     
     
   }
 
}
