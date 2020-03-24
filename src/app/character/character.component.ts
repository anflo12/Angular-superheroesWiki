import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'
import {BiographyComponent} from './../biography/biography.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
@Input()character:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  see_biography(id:string):void{
    this.router.navigate(['/biography',id])

  }
}
