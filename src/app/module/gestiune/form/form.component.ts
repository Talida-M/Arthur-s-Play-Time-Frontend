import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
//import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup(
    {
      password: new FormControl('')
    });


  constructor(
    private router: Router,
    private dataService: DataService,
    //private loginService: LoginService
    ) { }

    //getters
    
    get password(): AbstractControl {
      return this.loginForm;
    }

  ngOnInit(): void {

  }



  public login(): void {
    var parola = this.loginForm.controls['password'].value;
    if (parola === "ArthurPlayAdmini_190")
       {
        this.router.navigate(['/gestiune']);
        localStorage.setItem('Role','Angajat');
       //localStorage.setItem('Parola', parola);
       
      }
      else{
        console.log(parola);
        alert("Parola Incorecta. Daca nu sunteti angajat sau admin nu puteti intra in pagina de Gestiune!!")
        localStorage.setItem('Parola', '');
      }
      (error) => {
        console.log(error);
      }
   

    this.dataService.changeUserData(this.loginForm.value);
    localStorage.setItem('Role','Admin');
   //this.router.navigate(['/gestiune'])

  }
}
