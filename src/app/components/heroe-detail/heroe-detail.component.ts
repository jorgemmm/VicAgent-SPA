import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

import { HeroesService,Heroe } from '../../services/heroes.service';
import { GamesService, Game } from '../../services/games.service';




const CASA_DC:string="DC";
const CASA_MARVEL:string="Marvel";

const PLATFORM_PC:string="PC";
const PLATFORM_ANDROID:string="Android";

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html'
  //styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {


  DC:boolean=false;

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

  heroe:Heroe = {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
  };

  constructor( private _activateRoute:ActivatedRoute,
              private _heroeService:HeroesService,
              private  _gamesService:GamesService,
              
              ) {

    this._activateRoute.params.subscribe( params_in =>{
              
              // console.log(params_in);             
              //console.log(params_in['IDX']); // no existe este parámetro, dará error undefined
              console.log(params_in['id']); //{ path: 'heroe/:id', component: HeroeDetailComponent }, buscamos id parameter en la ruta

              //this.heroe = this._heroeService.getHeroe(params_in['id']);

              //console.log(this.heroe);

              //console.log(this.heroe.casa);
              //console.log(CASA_MARVEL);

              // if(this.heroe.casa==CASA_MARVEL){
              //      this.DC=false;
                 
              // }else{
              //   this.DC=true;
              // }
              // console.log(this.DC);

              this.game = this._gamesService.getGame(params_in['id']);
              console.log(this.game);



          });
   }

  ngOnInit(): void {
  }

}
