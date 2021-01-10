import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnjigaComponent } from './knjiga/knjiga.component';
import { ClanComponent } from './clan/clan.component';

const routes: Routes = [
  { path: 'clanovi', component: ClanComponent },
  { path: 'knjige', component: KnjigaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
