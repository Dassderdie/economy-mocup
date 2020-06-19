import { Injectable } from '@angular/core';
import { Category } from './categorie';
import { loremIpsum } from 'lorem-ipsum';
import { Article, articleImgDimensions } from './article';

@Injectable({
    providedIn: 'root',
})
export class CategoriesGeneratorService {
    public generateCategories(amount: number): Category[] {
        const categories = [];
        for (let i = 0; i < amount; i++) {
            categories.push(this.generateRandomCategory(10));
        }
        return categories;
    }

    private generateRandomCategory(amount: number): Category {
        const articles = [];
        for (let i = 0; i < amount; i++) {
            articles.push(this.generateRandomArticle());
        }
        return {
            name: loremIpsum({
                units: 'word',
                suffix: '',
            }),
            description: loremIpsum({
                count: 1,
                units: 'paragraph',
                suffix: '',
                format: 'html',
            }),
            articles,
        };
    }

    private generateRandomArticle(): Article {
        const id = Math.round(Math.random() * 100);
        return {
            id,
            title: loremIpsum({
                sentenceLowerBound: 3,
                sentenceUpperBound: 10,
                suffix: '',
            }),
            description: loremIpsum({
                count: 1,
                units: 'paragraph',
                paragraphLowerBound: 1,
                paragraphUpperBound: 3,
                suffix: '',
                format: 'html',
            }),
            imageSrc: `https://picsum.photos/seed/${id}/${articleImgDimensions.width}/${articleImgDimensions.height}`,
        };
    }
}
