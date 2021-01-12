import { Component, OnInit, Input } from '@angular/core';
import { Knjige } from 'src/app/models/Knjige';
import { KnjigeService } from '../knjige.service';

@Component({
  selector: 'app-knjige-show',
  templateUrl: './knjige-show.component.html',
  styleUrls: ['./knjige-show.component.css']
})
export class KnjigeShowComponent implements OnInit {

  KnjigeLista: any = [];
  knjiga: Knjige;
  EditStanje: boolean = false;
  constructor(private service: KnjigeService) { }

  ngOnInit(): void {
    this.refreshKnjigaList();
  }
  refreshKnjigaList() {
    this.service.getKnjige().subscribe(data => {
      this.KnjigeLista = data;
      console.log(data);
    });
  }
  deleteKnjiga(knjiga: Knjige) {
    if (confirm('Jeste li sigurni?')) {
      this.service.deleteKnjiga(knjiga.KnjigaId).subscribe(data => {
        alert(data.toString());
        this.refreshKnjigaList();
      })
    }
  }
  editKnjiga(knjiga: Knjige) {

  }

}
