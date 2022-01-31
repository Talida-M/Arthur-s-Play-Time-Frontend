import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gestiune',
  templateUrl: './gestiune.component.html',
  styleUrls: ['./gestiune.component.scss']
})
export class GestiuneComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }
  public date = new Date();


  ngOnInit(): void {
    this.router.navigate(['/gestiune']);  
   
  }

  public logout(): void{
    localStorage.setItem('Role','Client');
    this.router.navigate(['/login']);  }
}
