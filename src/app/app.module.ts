
//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios
import { HeroesService }  from './services/heroes.service';
import { GamesService } from './services/games.service';

//Rutas
import { AppRoutingModule } from  './app-routing.module';


//Componentes
import { AppComponent } from      './app.component';
import { NavbarComponent } from  './components/shared/navbar/navbar.component';
import { HomeComponent } from  './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeCardComponent } from './components/cards/heroe-card/heroe-card.component';
import { GameCardComponent } from './components/cards/game-card/game-card.component';
import { PrivacyComponent } from './components/privacy/privacy.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeDetailComponent,
    SearchComponent,
    HeroeCardComponent,
    GameCardComponent,
    PrivacyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService,   
    GamesService
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
