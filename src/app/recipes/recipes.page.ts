import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../services/recipes.service';
import { AuthService } from '../services/auth.service';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(
    private recipesService: RecipesService,
    private authService: AuthService,
    private navCtrl: NavController,
    private menu: MenuController
  ) {
    this.menu.enable(true);
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.displayRecipe();
  }

  displayRecipe() {
    this.authService.getAllRecipes().subscribe(
      recipes => {
        this.recipes = recipes;
      },
      error => {
        console.log(error);
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      data => {
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/landing');
      }
    );
  }

}
