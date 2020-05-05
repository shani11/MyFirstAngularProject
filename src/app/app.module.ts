import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RecipesComponent} from './Recipes/Recipes.component';
import {RecipesListComponent} from './Recipes/Recipes-List/Recipes-List.component';
import {RecipesItemComponent} from './Recipes/Recipes-Item/Recipes-Item.Component';
import { RecipesDetailsComponent } from './Recipes/recipes-details/recipes-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Shopping-List/shopping-edit/shopping-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
