import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperheroService } from '../superhero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  constructor(private Superheroe:SuperheroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacter()
  }
  CharacterBiography:any
  Character:any
id:string = this.route.snapshot.params.id
  getCharacter(){

    this.Superheroe.getCharacter(this.id).subscribe(data=>{
      this.CharacterBiography=data

    })

  }


}
