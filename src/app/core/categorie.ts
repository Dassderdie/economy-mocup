import { Article } from './article';

export interface Category {
    name: string;
    description: string;
    articles: Article[];
}
