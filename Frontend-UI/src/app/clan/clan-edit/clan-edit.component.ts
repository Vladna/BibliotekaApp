import { Component, OnInit, Input } from '@angular/core';
import { Knjige } from 'src/app/models/Knjige';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Clan } from 'src/app/models/Clan';
import { ClanoviService } from 'src/app/clanovi.service';

@Component({
  selector: 'app-clan-edit',
  templateUrl: './clan-edit.component.html',
  styleUrls: ['./clan-edit.component.css']
})
export class ClanEditComponent implements OnInit {
  @Input() clan: Clan;

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
  clearForma() {
    this.forma.reset();
  }
  knjigaEdit(clan: Clan) {
    clan.ClanId = this.clan.ClanId;
    this.service.updateClan(clan).subscribe(
      res => {
        alert(res.toString());
      }
    )
  }

}
