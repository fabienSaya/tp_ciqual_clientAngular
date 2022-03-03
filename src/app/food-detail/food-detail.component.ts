import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../models/food";
import {FoodService} from "../services/food.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {


  constructor(private foodService:FoodService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const foodId=+this.route.snapshot.params['id'];

  }

}
