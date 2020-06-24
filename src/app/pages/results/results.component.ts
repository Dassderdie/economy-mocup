import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Article } from 'src/app/core/article';
import { CategoriesGeneratorService } from 'src/app/core/categories-generator.service';

@Component({
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnDestroy {
    private readonly destroyed = new Subject();

    public searchString?: string;
    public articles: Article[] = [];

    constructor(
        private readonly route: ActivatedRoute,
        dataGenerator: CategoriesGeneratorService
    ) {
        this.route.queryParams
            .pipe(takeUntil(this.destroyed))
            .subscribe((queryParams) => {
                this.searchString = queryParams.search;
                this.articles = [];
                for (let i = 0; i < Math.random() * 100; i++) {
                    this.articles.push(dataGenerator.generateRandomArticle());
                }
            });
    }

    ngOnDestroy() {
        this.destroyed.next();
    }
}
