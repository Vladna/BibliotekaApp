import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { KnjigeService } from '../knjige.service';

@Component({
  selector: 'app-knjige-add',
  templateUrl: './knjige-add.component.html',
  styleUrls: ['./knjige-add.component.css']
})
export class KnjigeAddComponent implements OnInit {

  constructor(private service: KnjigeService) { }

  ngOnInit(): void {
  }

  forma = new FormGroup({
    KnjigaIme: new FormControl('', Validators.required),
    KnjigaAutor: new FormControl('', Validators.required),
    KnjigaStanje: new FormControl('', Validators.required),
    KnjigaDatumIzdavanja: new FormControl('', Validators.required),
    KnjigaDatumVracanja: new FormControl('', Validators.required),
    KnjiguIznajmio: new FormControl('', Validators.required)
  })

  loadClanove() {
    //get sve clanove

  }

  addKnjiga() {
    console.log(this.forma.value);
    this.service.addKnjiga(this.forma.value).subscribe(
      res => {
        alert(res.toString());
      }
    )
  }

}
