import { Component, OnInit} from '@angular/core';

import { GamesService, Game }  from '../../services/games.service';
import { ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  //,styleUrls: ['./search.component.css']

})
export class SearchComponent implements OnInit {


  
  games:Game[]=[];


  her:any={};
  termino:string;
 

  constructor(private _activateRoute:ActivatedRoute,           
              private _gameService:GamesService,
              private  _router:Router              
                  ) { 
                    
                    //Establecemos Id en todo el array de videojuegos
                    this._gameService.SetAllId();                    
                    this._activateRoute.params.subscribe( params_in =>{
                   //console.log(params_in);console.log(params_in['termino']); this.termino=params_in['termino']; 

                   this.games = this._gameService.buscarGame(params_in['termino']); //Debug
                     
                    });

                    

                  }



  ngOnInit(): void {



  }

  /**desde search component */
  //verGame(idx:number)
  //{
  //console.log(idx);
  //this._router.navigate(['heroe',idx]);
  //}

}
