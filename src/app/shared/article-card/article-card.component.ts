import { Component, Input } from '@angular/core';
import { Article, articleImgDimensions } from 'src/app/core/article';

@Component({
    selector: 'app-article-card',
    templateUrl: './article-card.component.html',
    styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
    @Input() article: Article;
    // for use in template
    public imgDimensions = articleImgDimensions;
}
