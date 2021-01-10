import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Knjiga } from 'src/app/models/Knjiga'
@Injectable({
  providedIn: 'root'
})
export class KnjigaService {
  private readonly APIUrl = "http://localhost:62808/api/";

  constructor(private http: HttpClient) {

  }

  getKnjige(): Observable<Knjiga[]> {
    return this.http.get<any>(this.APIUrl + '/Knjiga');
  }
  addKnjiga(knjiga: Knjiga) {
    return this.http.post(this.APIUrl + '/Knjiga', knjiga);
  }
  updateKnjiga(knjiga: Knjiga) {
    return this.http.put(this.APIUrl + '/Knjiga', knjiga);
  }
  deleteKnjiga(id: number) {
    return this.http.delete(this.APIUrl + '/Knjiga/' + id);
  }
  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Knjiga/SaveFile', val);
  }
  getAllSlobodneKnjige(): Observable<Knjiga[]> {
    return this.http.get<any>(this.APIUrl + '/Knjiga/NaStanju');

  }
}
