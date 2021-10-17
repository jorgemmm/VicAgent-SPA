import { Component, OnInit} from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { GamesService, Game }  from '../../services/games.service';
import { ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  // styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  heroes:Heroe[]=[]; //Debug
  games:Game[]=[];


  her:any={};
  termino:string;
 

  constructor(private _activateRoute:ActivatedRoute,
             // private _heroeService:HeroesService,
              private _gameService:GamesService,
              private  _router:Router              
                  ) { 
                    
                    //Establecemos Id en todo el array de videojuegos
                    this._gameService.SetAllId();
                    
                    this._activateRoute.params.subscribe( params_in =>{
                      // console.log(params_in);console.log(params_in['termino']); this.termino=params_in['termino']; 
                      
                      //this.heroes=this._heroeService.buscarHeroe(params_in['termino']); //Debug
                      //console.log(this.heroes);

                      this.games = this._gameService.buscarGame(params_in['termino']); //Debug
                     
                    });

                    

                  }



  ngOnInit(): void {



  }

  //verHeroe(idx:number)
  verGame(idx:number)
  {

     //console.log(idx);
     //this._router.navigate(['heroe',idx]);

    //desde search component
}
 
  //Colocado en Search.components
  // verHeroe( nombre:string   ){
        
  //        console.log(nombre);
  //       let  idx:number  =  this._heroeService.getHeroeId(nombre);
  //       console.log(idx);
  //       this._router.navigate(['heroe',  idx  ]);
        
  // }

}
