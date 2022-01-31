import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  public registerForm: FormGroup = new FormGroup(
    {
      nume: new FormControl(''),
      prenume: new FormControl(''),
      telefon: new FormControl(''),
      email: new FormControl(''),
      rol: new FormControl('Client'),
      password: new FormControl('')
    });

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) { }

  //getters
  get email(): AbstractControl {
    return this.registerForm;
  }
  get password(): AbstractControl {
    return this.registerForm;
  }
  get rol(): AbstractControl {
    return this.registerForm;
  }

  ngOnInit(): void {
  }

  public addClient(): void{
    this.registerService.addClient(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(this.registerForm.value);
    this.router.navigate(['/login'])
  };
  // public addAngajati(): void{
  //   this.registerService.addAngajati(this.registerForm.value).subscribe(
  //     (result) => {
  //       console.log(result);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  //   console.log(this.registerForm.value);
  //   this.router.navigate(['/login'])
  // }

  public register(): void{
    this.registerService.addRegister(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
     
    );
    var r = this.rol

    console.log(this.registerForm.value);
    this.router.navigate(['/login'])
  }

 

}
