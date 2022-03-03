import { Injectable } from '@angular/core';
import {Food} from "../models/food";
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {FoodDetail} from "../models/food-detail";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private _foods: any=[];

  constructor(private httpClient: HttpClient) { }

  getAllFoodFromServer() : Observable<Food[]>{
    //const url='http://localhost:8080/ciqual/foodByCode/12523';
    //const url='http://localhost:8080/ciqual/foodByName/Fromage%20bleu';
    const url='http://localhost:8080/ciqual/allFoodList';
    return this.httpClient.get<Food[]>(url);
    /*this.http.get<Food[]>(url).subscribe(res=>{
        this._foods=res;
        console.log(this._foods);
    })*/
    //const food= JSON.parse(this._foods[0]);

  }

  /**
   * à coder pour la fiche détail
   */
  getFoodDetail(): void{

  }

}
