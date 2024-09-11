import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {NgOptimizedImage} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    HomeComponent,
    AboutComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
