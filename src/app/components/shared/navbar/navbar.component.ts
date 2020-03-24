import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
  //styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private  _router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    //  en heroe services
    console.log(termino);
    if(termino.length<=2) return;
    this._router.navigate(['/search',termino]);
    
  }
  

}
