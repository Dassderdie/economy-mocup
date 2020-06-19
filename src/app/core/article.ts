export interface Article {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    publisher?: {
        name: string;
        author: string;
    };
}

export const articleImgDimensions = {
    width: 200,
    height: 100,
};
