import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Knjige } from 'src/app/models/Knjige';
import { KnjigeService } from '../knjige.service';


@Component({
  selector: 'app-knjige-show',
  templateUrl: './knjige-show.component.html',
  styleUrls: ['./knjige-show.component.css']
})
export class KnjigeShowComponent implements OnInit {

  KnjigeLista: any = [];
  knjigaItem: Knjige;
  knjigaZaEdit: Knjige;
  @Input() knjigeStanje: boolean = true;
  @Output() knjigaEvent = new EventEmitter<Knjige>();

  KnjigaIdFilter: string = "";
  KnjigaImeFilter: string = "";
  KnjigeListaBezFiltera: any = [];
  constructor(private service: KnjigeService) { }

  ngOnInit(): void {

    this.refreshKnjigaList();
  }
  sendKnjiga(knjiga: Knjige) {
    this.knjigaZaEdit = knjiga;
  }

  refreshKnjigaList() {
    this.service.getKnjige().subscribe(data => {
      this.KnjigeLista = data;
      //  console.log(data);
      this.KnjigeListaBezFiltera = data;
    });
  }
  deleteKnjiga(knjigaItem: Knjige) {
    if (confirm('Jeste li sigurni?')) {
      this.service.deleteKnjiga(knjigaItem.KnjigaId).subscribe(data => {
        alert(data.toString());
        this.refreshKnjigaList();
      })
    }
  }
  editKnjiga(knjigaItem: Knjige) {
    this.knjigaZaEdit = knjigaItem;
    //this.knjigaEvent.emit(knjigaItem);
    console.log(knjigaItem)
    // this.refreshKnjigaList();
  }
  getKnjigeNaStanju() {
    this.service.getAllSlobodneKnjige().subscribe(
      data => {
        this.KnjigeLista = data;
        console.log(data);
      }
    )
  }
  FilterFn() {
    //console.log("filterfn")
    var KnjigaIdFilter = this.KnjigaIdFilter;
    var KnjigaImeFilter = this.KnjigaImeFilter;
    this.KnjigeLista = this.KnjigeListaBezFiltera.filter(function (el) {

      return el.KnjigaIme.toString().toLowerCase().includes(
        KnjigaImeFilter.toString().trim().toLowerCase()
      ) &&
        el.KnjigaId.toString().toLowerCase().includes(
          KnjigaIdFilter.toString().trim().toLowerCase()
        )
    })
  }
  setFilterName(fil: string) {

  }
}
