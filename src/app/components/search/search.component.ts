import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  // styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:Heroe[]=[];
  termino:string;
  constructor(private _activateRoute:ActivatedRoute,
              private _heroeService:HeroesService,
              private  _router:Router              
                  ) { 
                    

                    this._activateRoute.params.subscribe( params_in =>{
                      // console.log(params_in);
                      // console.log(params_in['termino']);
                     // this.termino=params_in['termino'];
                      this.heroes=this._heroeService.buscarHeroe(params_in['termino']);
                      console.log(this.heroes);
                    });

                  }

  ngOnInit(): void {



  }



  verHeroe( nombre:string   ){
        
         console.log(nombre);
        let  idx:number  =  this._heroeService.getHeroeId(nombre);
        console.log(idx);
        this._router.navigate(['heroe',  idx  ]);
        
  }

}
