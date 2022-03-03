
import {FoodSubSubGroup} from "./food-sub-sub-group";
import {FoodComponent} from "./food-component";
import {FoodScientificName} from "./food-scientific-name";

export class FoodDetail {
  id!: number;
  code!: string;
  name!: string;
  scientificName!: FoodScientificName;
  subSubGroup!: FoodSubSubGroup;
  componentList!: FoodComponent[];
}
