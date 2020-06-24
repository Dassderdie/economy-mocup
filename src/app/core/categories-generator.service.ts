import { Injectable } from '@angular/core';
import { Category } from './categorie';
import { loremIpsum } from 'lorem-ipsum';
import { Article, articleImgDimensions } from './article';
import { getRandomIcon } from '../shared/icons/get-random-icon';

@Injectable({
    providedIn: 'root',
})
export class CategoriesGeneratorService {
    public generateCategories(amount: number): Category[] {
        const categories = [];
        for (let i = 0; i < amount; i++) {
            categories.push(this.generateRandomCategory(i + 1, 10));
        }
        return categories;
    }

    private generateRandomCategory(id: number, amount: number): Category {
        const articles = [];
        for (let i = 0; i < amount; i++) {
            articles.push(this.generateRandomArticle());
        }
        return {
            name: `Kategorie ${id}`,
            description: loremIpsum({
                count: 1,
                units: 'paragraph',
                suffix: '',
                format: 'html',
            }),
            icon: getRandomIcon(),
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
