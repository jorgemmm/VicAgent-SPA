
//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { AppRoutingModule } from  './app-routing.module';


//Servicios

import { GamesService } from './services/games.service';

//Componentes
import { AppComponent } from      './app.component';
import { NavbarComponent } from  './components/shared/navbar/navbar.component';
import { HomeComponent } from  './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GamesComponent } from './components/games/games.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { SearchComponent } from './components/search/search.component';

import { GameCardComponent } from './components/cards/game-card/game-card.component';
import { PrivacyComponent } from './components/privacy/privacy.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GamesComponent,
    FooterComponent,
    GameDetailComponent,
    SearchComponent, 
    GameCardComponent,
    PrivacyComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      
    GamesService
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
