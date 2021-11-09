import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'


import { GamesService, Game } from '../../services/games.service';




const CASA_DC:string="DC";
const CASA_MARVEL:string="Marvel";

const PLATFORM_PC:string="PC";
const PLATFORM_ANDROID:string="Android";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html'
  //styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {


  DC:boolean=false;

  //DockDAta
 game:Game={
  nombre: "TheHorde",
  category:"Survival Shooter Horro",
  platform:"Android",
  description: "Run And Shot the zombie horde",
  img: "assets/img/horde_512.png",
  itchiurl:"https://vicagent.itch.io/the-horde",
  marketurl:"https://play.google.com/store/apps/details?id=com.VicAgent.TheHorde",
  price: "50"
};

  
  loading: boolean;
  id:string;
  games:Game[]=[];
  gameSelected:Game;

  constructor( private _activateRoute:ActivatedRoute,
              
              private  _gamesService:GamesService,
              
              ) {

              this.loading=false;

              this._activateRoute.params.subscribe( params_in =>{
              
              console.log(params_in);
              console.log(params_in['id']);
              this.id=params_in['id'];
               
              //No es óptimo hacer llamadas a servidor sesde el constructor
              // mejor desde ngOnInit
              //this.game = this._gamesService.getGame(params_in['id']);
              //console.log(this.game);

          });
   }

  ngOnInit(): void {

            //Local or dock data
             //this.game = this._gamesService.getGame(this.id);
             this.loading=true;
             this.GetGame();
             

  }


  GetGame(){
      
    this._gamesService.getBackendGame(this.id)
      .subscribe( (data:any) =>
      {
      console.log(data); 
      //console.log(data);
      this.gameSelected=data
      this.loading=false;
      });
  }

}
