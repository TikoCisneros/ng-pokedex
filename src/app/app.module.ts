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
import { PokePillTypeComponent } from './components/poke-pill-type/poke-pill-type.component';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';

import { DimensionsPipe } from './pipes/dimensions.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokeStatsComponent,
    StrNormalizerPipe,
    PokePillTypeComponent,
    PokeInfoComponent,
    DimensionsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
