import { Component, OnInit } from '@angular/core';
import { FilmsGhibliService} from './films-ghibli.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'studioGhibliApiExo';

  //je crée ma liste de films
  public films: any[];

  constructor (private service:FilmsGhibliService){}

// j'appelle le service pour remplir mon tableau de films
  ngOnInit(): void {
    this.service.getFilms().subscribe(films => {this.films = films});
  }
}
