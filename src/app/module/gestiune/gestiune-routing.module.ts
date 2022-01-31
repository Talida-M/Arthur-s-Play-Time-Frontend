import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GestiuneComponent } from './gestiune/gestiune.component';
import { ExecutantComponent } from './executant/executant.component';
import { ComenziComponent } from './comenzi/comenzi.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { ProiectantComponent } from './proiectant/proiectant.component';
import { DetaliiComponent } from './detalii/detalii.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
{path: 'executant', component: ExecutantComponent },
{path: 'comenzi', component: ComenziComponent },
{path: 'imprimante', component: ImprimanteComponent },
{path: 'proiectant', component: ProiectantComponent},
{path:'detalii/:id', component:DetaliiComponent, },
{path: 'form', component:FormComponent},
{path: 'gestiune', component:GestiuneComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestiuneRoutingModule { }
