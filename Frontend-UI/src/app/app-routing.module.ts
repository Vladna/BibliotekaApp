import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClanComponent } from './clan/clan.component'
import { KnjigeComponent } from './knjige/knjige.component'
import { KnjigeShowComponent } from './knjige/knjige-show/knjige-show.component';
import { AdminComponent } from './admin/admin.component';
import { KorisnikComponent } from './korisnik/korisnik.component';

const routes: Routes = [
  { path: '', redirectTo: 'knjige', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'korisnik', component: KorisnikComponent },
  {
    path: 'knjige', component: KnjigeComponent,
    children: [
      { path: 'listaknjiga', component: KnjigeShowComponent, }
    ]
  },
  { path: 'clanovi', component: ClanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
