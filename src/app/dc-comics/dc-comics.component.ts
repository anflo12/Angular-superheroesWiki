import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
import { SuperheroService } from '../superhero.service';
@Component({
  selector: 'app-dc-comics',
  templateUrl: './dc-comics.component.html',
  styleUrls: ['./dc-comics.component.css']
})
export class DcComicsComponent implements OnInit {

  constructor(private router:Router,private characterSvc: SuperheroService) { }

  ngOnInit(): void {
    this.getCharacters()
  }


 allCharacters: Observable<any>;


getCharacters() {
  this.allCharacters = this.characterSvc.getAllCharacters();

}


}
