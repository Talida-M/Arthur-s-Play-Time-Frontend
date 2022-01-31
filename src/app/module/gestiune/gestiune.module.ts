import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComenziComponent } from './comenzi/comenzi.component';
import { DetaliiComponent } from './detalii/detalii.component';
import { ExecutantComponent } from './executant/executant.component';
import { GestiuneComponent } from './gestiune/gestiune.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { ProiectantComponent } from './proiectant/proiectant.component';
import { GestiuneRoutingModule } from './gestiune-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
//import {MatDialogModule} from  '@angular/material';

@NgModule({
  declarations: [
    ExecutantComponent,
    ImprimanteComponent,
    ComenziComponent,
    ProiectantComponent,
    DetaliiComponent,
    GestiuneComponent,
    FormComponent, 
    
  ],
  imports: [
    CommonModule,
    GestiuneRoutingModule,
    MatIconModule,
    MatTableModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule,
    MaterialModule,
    
    
  ],
 
})
export class GestiuneModule { }
