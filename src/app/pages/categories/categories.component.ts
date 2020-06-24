import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/categorie';
import { CategoriesGeneratorService } from 'src/app/core/categories-generator.service';

@Component({
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
    public categories: Category[];

    constructor(categoriesGenerator: CategoriesGeneratorService) {
        this.categories = categoriesGenerator.generateCategories(7);
    }
}
