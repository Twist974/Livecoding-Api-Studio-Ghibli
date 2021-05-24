import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsGhibliService {
    // Url de base de l'API
  private url: string = "https://ghibliapi.herokuapp.com"

    // j'instancie le client HTTP pour faire la requête sur l'API
  constructor(private http: HttpClient) { }

    // je vais chercher sur l'API la liste des films.
  getFilms() : Observable<any> {
    return this.http.get(this.url+"/films")
  }
}
