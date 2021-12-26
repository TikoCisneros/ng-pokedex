import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokeStatsComponent } from './components/poke-stats/poke-stats.component';

import { StrNormalizerPipe } from './pipes/str-normalizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokeStatsComponent,
    StrNormalizerPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
