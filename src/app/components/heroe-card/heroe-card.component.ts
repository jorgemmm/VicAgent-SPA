import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { HeroesService,Heroe } from '../../services/heroes.service';
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
 
})
export class HeroeCardComponent implements OnInit {

//@Input()´s
//Convierte a heroe en una vable-property de entrada desde el componente padre (heroes-component)
@Input()  heroe:any={};  // coloca [heroe] en componente padre para recibir data
@Input()  index:number;

@Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private  _router:Router,
               private _heroeService:HeroesService, //sólo si usas verHeroDetail
               ) { 
            this.heroeSeleccionado= new EventEmitter();
               }

  ngOnInit(): void {


  }

  //con @output, para ver cómo funciona
  //la forma de envia data al componete padre
  verHeroeEvent(){    
    //  console.log(this.index);
     this._router.navigate(['heroe',this.index]);
    //this.heroeSeleccionado.emit( this.index);
    //console.log("evento emitido desde el hijo");
  }



  //otra forma con imports pero con más código
  verHeroDetail( nombre:string   ){
        
    console.log(nombre);
    let  idx:number  =  this._heroeService.getHeroeId(nombre);
    console.log(idx);
    this._router.navigate(['heroe',  idx  ]);
   
}

}
