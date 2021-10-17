import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from 'src/app/services/heroes.service';
import { GamesService, Game } from 'src/app/services/games.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
  //styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  games:Game[]=[];

  isInProduction:boolean=false;

  constructor(private _heroesService:HeroesService,
              private _gamesService:GamesService,
              private  _router:Router
                ){
    //  console.log("constructor");     

 }

  ngOnInit(): void {
         // Metdo que se utiliza cuando la page está rendrizada
        //console.log("ngOnInit");
       
    this.heroes=this._heroesService.getHeroes();
    this.games=this._gamesService.getGames();
   // console.log(this.heroes);
    this.isInProduction=this._gamesService.inProduction;

    if(this.isInProduction){
      //to do to enable or disable meu service to heroe services
    }

    console.log(this.games);
  }

  //For degug
  verHeroe(idx:number){
       // console.log("evento output recibido por componente padre");
        // console.log(idx);
        this._router.navigate(['heroes',idx]);

        //desde search component
  }

  verGame(idx:number){
    // console.log("evento output recibido por componente padre");
     // console.log(idx);
     this._router.navigate(['games',idx]);

     //desde search component
}

}
