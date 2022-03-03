import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food.service";
import {Observable} from "rxjs";
import {Food} from "../models/food";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  foods$!:Observable<Food[]>;
  errorMessage!: string;


  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods$= this.foodService.getAllFoodFromServer();
  }

}
