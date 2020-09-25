import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html'
  
})
export class GameCardComponent {


@Input()  item:any={};// items:any[]=[];  //heroe:any={}  ; coloca [heroe] / [item]en componente padre para recibir data
@Input()  index:number;

@Output() gameSeleccionado: EventEmitter<number>;

  constructor(private  _router:Router) {
    this.gameSeleccionado=new EventEmitter();
   }

   //con @output, para ver cómo funciona
   //la forma de envia data al componete padre
   verGameEvent(){    
     
      //console.log(this.index);
      this._router.navigate(['heroe',this.index]);

      //this.heroeSeleccionado.emit( this.index);
      //console.log("evento emitido desde el hijo");
   }

}
