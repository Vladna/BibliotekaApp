import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Knjige } from 'src/app/models/Knjige';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { KnjigeService } from '../knjige.service';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-knjige-edit',
  templateUrl: './knjige-edit.component.html',
  styleUrls: ['./knjige-edit.component.css']
})
export class KnjigeEditComponent implements OnInit {

  @Input() knjiga: Knjige;
  trenutnaKnjiga: Knjige;

  constructor(fb: FormBuilder, private service: KnjigeService) { }



  ngOnInit(): void {
    console.log("test");
    console.log(this.knjiga);

  }


  forma = new FormGroup({

    KnjigaIme: new FormControl('', Validators.required),
    KnjigaAutor: new FormControl('', Validators.required),
    KnjigaStanje: new FormControl('', Validators.required),
    KnjigaDatumIzdavanja: new FormControl('', Validators.required),
    KnjigaDatumVracanja: new FormControl('', Validators.required),
    KnjiguIznajmio: new FormControl('', Validators.required)
  })

  setKnjigaEdit() {
    this.trenutnaKnjiga.KnjigaIme = this.knjiga.KnjigaIme;
    this.trenutnaKnjiga.KnjigaAutor = this.knjiga.KnjigaAutor;
    this.trenutnaKnjiga.KnjigaStanje = this.knjiga.KnjigaStanje;
    this.trenutnaKnjiga.KnjigaDatumIzdavanja = this.knjiga.KnjigaDatumIzdavanja;
    this.trenutnaKnjiga.KnjigaDatumVracanja = this.knjiga.KnjigaDatumVracanja;
    this.trenutnaKnjiga.KnjiguIznajmio = this.knjiga.KnjiguIznajmio;

  }
  probaEdit() {
    console.log(this.knjiga);
  }
  clearForma() {
    this.forma.reset();
  }
  saveKnjiga(knjigaEdit: Knjige) {
    console.log(knjigaEdit);
  }
  knjigaEdit(knjiga: Knjige) {
    knjiga.KnjigaId = this.knjiga.KnjigaId;
    this.service.updateKnjiga(knjiga).subscribe(
      res => {
        alert(res.toString());
      }
    )
  }
}
