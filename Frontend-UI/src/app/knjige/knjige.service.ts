import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Knjige } from '../models/Knjige';

@Injectable({
  providedIn: 'root'
})
export class KnjigeService {

  private readonly APIUrl = "http://localhost:62808/api";

  constructor(private http: HttpClient) {

  }

  getKnjige(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Knjiga');
  }
  addKnjiga(knjiga: Knjige) {
    return this.http.post(this.APIUrl + '/Knjiga', knjiga);
  }
  updateKnjiga(knjiga: Knjige) {
    return this.http.put(this.APIUrl + '/Knjiga', knjiga);
  }
  deleteKnjiga(id: number) {
    return this.http.delete(this.APIUrl + '/Knjiga/' + id);
  }
  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Knjiga/SaveFile', val);
  }
  getAllSlobodneKnjige(): Observable<Knjige[]> {
    return this.http.get<any>(this.APIUrl + '/Knjiga/NaStanju');

  }
}
