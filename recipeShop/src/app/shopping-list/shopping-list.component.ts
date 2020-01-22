import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared-features/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Potatoes", 15),
    new Ingredient("Chicken", 1)
  ];

  constructor() {}

  ngOnInit() {}
}
