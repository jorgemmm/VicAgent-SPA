import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GamesComponent } from './components/games/games.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { SearchComponent } from './components/search/search.component';
import { PrivacyComponent} from './components/privacy/privacy.component'

export class FeatureRoutingModule {}


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent }, 
   { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, 
    { useHash: true, relativeLinkResolution: 'legacy' } 
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
