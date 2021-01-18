import { Component, OnInit } from '@angular/core';
import { ClanoviService } from 'src/app/clanovi.service';
import { Clan } from 'src/app/models/Clan';

@Component({
  selector: 'app-clan-show',
  templateUrl: './clan-show.component.html',
  styleUrls: ['./clan-show.component.css']
})
export class ClanShowComponent implements OnInit {

  constructor(private service: ClanoviService) { }
  clanoviLista: any = [];
  clanZaEdit: Clan;
  ClanIdFilter: string = "";
  ClanImeFilter: string = "";
  ClanListaBezFiltera: any = [];


  ngOnInit(): void {
    console.log("pocetak")
    this.refreshClanoviLista();
    console.log("test clan show");
  }

  refreshClanoviLista() {
    this.service.getClanovi().subscribe(data => {
      this.clanoviLista = data;
      console.log(data);
      this.ClanListaBezFiltera = data;
    });

  }
  deleteClan(clanItem: Clan) {
    if (confirm('Jeste li sigurni?')) {
      this.service.deleteClan(clanItem.ClanId).subscribe(data => {
        alert(data.toString());
        this.refreshClanoviLista();
      })
    }
  }
  editClan(clan: Clan) {
    this.clanZaEdit = clan;
  }


  FilterFn() {
    //console.log("filterfn")
    var ClanIdFilter = this.ClanIdFilter;
    var ClanImeFilter = this.ClanImeFilter;
    this.clanoviLista = this.ClanListaBezFiltera.filter(function (el) {

      return el.ClanIme.toString().toLowerCase().includes(
        ClanImeFilter.toString().trim().toLowerCase()
      ) &&
        el.ClanId.toString().toLowerCase().includes(
          ClanIdFilter.toString().trim().toLowerCase()
        )
    })
  }
}
