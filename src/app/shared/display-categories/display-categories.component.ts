import { Component, Input } from '@angular/core';
import { Category } from 'src/app/core/categorie';
import { merge, of, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-display-categories',
    templateUrl: './display-categories.component.html',
    styleUrls: ['./display-categories.component.css'],
})
export class DisplayCategoriesComponent {
    @Input() categories!: Category[];

    public itemsPerSlide = 5;

    constructor() {
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
    }
}
