import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class SuperheroService {
  URL_API: string = "https://akabab.github.io/superhero-api/api/all.json";
  URL_BIOGRAPHY: String = "https://akabab.github.io/superhero-api/api//biography/";
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API).pipe(map((data: any) => data));
  }

  getCharacter(id: string): Observable<any> {
    return this.http
      .get<any>(this.URL_BIOGRAPHY + id.toString() + ".json")
      .pipe(map((data: any) => data));
  }
}
