import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/categorie';
import { CategoriesGeneratorService } from 'src/app/core/categories-generator.service';
import { merge, of, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
    public categories: Category[];

    public itemsPerSlide = 5;

    constructor(categoriesGenerator: CategoriesGeneratorService) {
        merge(
            of(window.innerWidth),
            fromEvent(window, 'resize').pipe(
                map(() => window.innerWidth),
                debounceTime(200)
            )
        )
            .pipe(distinctUntilChanged())
            .subscribe((width) => {
                this.itemsPerSlide = Math.ceil(width / 400);
            });

        this.categories = categoriesGenerator.generateCategories(4);
    }
}
