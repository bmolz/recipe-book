import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe'
// import { RecipeItemComponent } from './recipe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'https://s-media-cache-ak0.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc.jpg');


  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
