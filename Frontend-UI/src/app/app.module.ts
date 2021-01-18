import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnjigeComponent } from './knjige/knjige.component';
import { KnjigeAddComponent } from './knjige/knjige-add/knjige-add.component';
import { KnjigeShowComponent } from './knjige/knjige-show/knjige-show.component';
import { KnjigeEditComponent } from './knjige/knjige-edit/knjige-edit.component';
import { ClanComponent } from './clan/clan.component';
import { ClanAddComponent } from './clan/clan-add/clan-add.component';
import { ClanShowComponent } from './clan/clan-show/clan-show.component';
import { ClanEditComponent } from './clan/clan-edit/clan-edit.component';
import { AdminComponent } from './admin/admin.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { KnjigeService } from './knjige/knjige.service';
import { ClanoviService } from './clanovi.service';

@NgModule({
  declarations: [
    AppComponent,
    KnjigeComponent,
    KnjigeAddComponent,
    KnjigeShowComponent,
    KnjigeEditComponent,
    ClanComponent,
    ClanAddComponent,
    ClanShowComponent,
    ClanEditComponent,
    AdminComponent,
    KorisnikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [KnjigeService, ClanoviService],
  bootstrap: [AppComponent]
})
export class AppModule { }
