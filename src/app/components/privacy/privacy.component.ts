import { Component, OnInit } from '@angular/core';

import { GamesService, Game }  from 'src/app/services/games.service';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html'
})
export class PrivacyComponent implements OnInit {

  constructor(

    private _gamesService: GamesService,
  ) { }

  ngOnInit(): void {

    // ActivatePrivacy() {
    //   //this._gamesService.SetPrivacyActivated()
    //   window.alert('Por favor lle acepta las politicas de privacidad');
    // }
    }
   

}
