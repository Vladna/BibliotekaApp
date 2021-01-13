import { Component, OnInit, Input } from '@angular/core';
import { Knjige } from 'src/app/models/Knjige';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-knjige-edit',
  templateUrl: './knjige-edit.component.html',
  styleUrls: ['./knjige-edit.component.css']
})
export class KnjigeEditComponent implements OnInit {

  @Input() knjiga: Knjige;

  constructor(fb: FormBuilder) { }



  ngOnInit(): void {
    console.log("pocetak testa")
    console.log(this.knjiga);
    console.log("kraj testa")
  }

  forma = new FormGroup({
    imeknjige: new FormControl('', Validators.required),
    autorknjige: new FormControl('', Validators.required),
    stanjeknjige: new FormControl('', Validators.required)
  })
}
