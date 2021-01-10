import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnjigaComponent } from './knjiga/knjiga.component';
import { KnjigaAddComponent } from './Knjiga/knjiga-add/knjiga-add.component';
import { KnjigaEditComponent } from './Knjiga/knjiga-edit/knjiga-edit.component';
import { KnjigaShowComponent } from './Knjiga/knjiga-show/knjiga-show.component';
import { ClanComponent } from './clan/clan.component';
import { ClanAddComponent } from './Clan/clan-add/clan-add.component';
import { ClanEditComponent } from './Clan/clan-edit/clan-edit.component';
import { ClanShowComponent } from './Clan/clan-show/clan-show.component';
import { ClanService } from './clan/clan.service';
import { KnjigaService } from './knjiga/knjiga.service';
@NgModule({
  declarations: [
    AppComponent,
    KnjigaComponent,
    KnjigaAddComponent,
    KnjigaEditComponent,
    KnjigaShowComponent,
    ClanComponent,
    ClanAddComponent,
    ClanEditComponent,
    ClanShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClanService, KnjigaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
