import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clan } from './models/Clan';

@Injectable({
  providedIn: 'root'
})
export class ClanoviService {

  private readonly APIUrl = "http://localhost:62808/api";
  constructor(private http: HttpClient) { }

  getClanovi(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Clan');

  }
  addClan(clan: Clan) {
    return this.http.post(this.APIUrl + '/Clan', clan);
  }
  updateClan(clan: Clan) {
    return this.http.put(this.APIUrl + '/Clan', clan)
  }
  deleteClan(id: number) {
    return this.http.delete(this.APIUrl + '/Clan/' + id);
  }



}
