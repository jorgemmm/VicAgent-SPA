import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {HeroeDetailComponent} from './components/heroe-detail/heroe-detail.component';
import { SearchComponent } from './components/search/search.component';
import { PrivacyComponent} from './components/privacy/privacy.component'

// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'path2', component: Name2Component },
//   { path: 'path3', component: Name3Component },
//   { path: 'path4', component: Name4Component },
//   { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
  //];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })

export class FeatureRoutingModule {}


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'heroes', component: HeroesComponent },
  
  { path: 'games', component: HeroesComponent },

  // { path: 'games', component: GamesComponent },

  { path: 'heroe/:id', component: HeroeDetailComponent },
  { path: 'game/:id', component: HeroeDetailComponent },

  { path: 'search/:termino', component: SearchComponent },

 // { path: '**', component: HeroesComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, 
    { useHash: true, relativeLinkResolution: 'legacy' } 
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
