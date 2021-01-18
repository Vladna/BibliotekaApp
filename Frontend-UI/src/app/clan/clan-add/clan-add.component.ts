import { Component, OnInit } from '@angular/core';

import { ClanoviService } from 'src/app/clanovi.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-clan-add',
  templateUrl: './clan-add.component.html',
  styleUrls: ['./clan-add.component.css']
})
export class ClanAddComponent implements OnInit {

  constructor(private service: ClanoviService) { }

  ngOnInit(): void {
  }


  forma = new FormGroup({
    ClanIme: new FormControl('', Validators.required),
    ClanPrezime: new FormControl('', Validators.required),
    ClanGodinaRodjenja: new FormControl('', Validators.required),
    ClanStatus: new FormControl('', Validators.required),
    ClanDatumUclanjenja: new FormControl('', Validators.required),
    IznajmljenaKnjigaId: new FormControl('', Validators.required)
  })

  addClan() {
    console.log(this.forma.value);
    this.service.addClan(this.forma.value).subscribe(
      res => {
        alert(res.toString());
      }
    )
  }


}
