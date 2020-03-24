import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router'
//import { HeroesService,Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
 
})
export class HeroeCardComponent implements OnInit {

//@Input()´s
//Convierte a heroe en una vable-property de entrada desde el componente padre (heroes-component)
@Input()  heroe:any={};  // coloca [heroe] en componente padre para recibir data
@Input()  index:number;

  constructor( private  _router:Router) { }

  ngOnInit(): void {


  }

  
  verHeroe(){
    console.log(this.index);
       this._router.navigate(['heroe',this.index]);
  }

}
