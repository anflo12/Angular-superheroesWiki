import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BiographyComponent } from "./biography/biography.component";
import { DcComicsComponent } from "./dc-comics/dc-comics.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MarvelComicsComponent } from "./marvel-comics/marvel-comics.component";
import { ToolBarComponent } from "./tool-bar/tool-bar.component";
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CharacterComponent } from './character/character.component';
const routes: Routes = [
  { path: "dc", component: DcComicsComponent },
  { path: "marvel", component: MarvelComicsComponent },
  { path: "biography/:id", component: BiographyComponent },
  { path: "/", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    FooterComponent,
    HomeComponent,
    DcComicsComponent,
    MarvelComicsComponent,
    BiographyComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
