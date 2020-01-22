import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test recipe",
      "Test description",
      "https://agro-market24.eu/media/cache/ad_photo_main/uploads/photos/30838/sprzedam_owoce-%C5%9Bwie%C5%BCe-kiwi-_agro%20market24_og%C5%82oszenia%20rolnicze-870336-30838.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
