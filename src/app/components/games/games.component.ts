import { Component, OnInit } from '@angular/core';
//import { HeroesService,Heroe } from 'src/app/services/heroes.service';
import { GamesService, Game } from 'src/app/services/games.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-heroes',
  templateUrl: './games.component.html'
  //styleUrls: ['./heroes.component.css']
})
export class GamesComponent implements OnInit {

 
  games:Game[]=[];

  isInProduction:boolean=false;

  constructor(
            
            
              private _gamesService:GamesService,
              private  _router:Router
                ){
    console.log("constructor GameCard");  
          

 }

  ngOnInit(): void {
    //Método que se utiliza cuando la page está rendrizada
    console.log("ngOnInit GameCard");
    
    
    this.GetGames(); 
   
  }

   GetGames(){
     //this.games=this._gamesService.getGames();
    this._gamesService.getBackendGames()
    .subscribe( (data:any) =>{
      
      console.log(data);
      this.games=data
      //console.log(this.games);
      
    
      
    });
   }
  
  //For degug
  verHeroe(idx:number){
       // console.log("evento output recibido por componente padre");
        // console.log(idx);
        this._router.navigate(['heroes',idx]);

        //desde search component
  }

  verGame(idx:number){
    
    //console.log("evento output recibido por componente padre");
     // console.log(idx);
     this._router.navigate(['games',idx]);
     //desde search component
}

}
