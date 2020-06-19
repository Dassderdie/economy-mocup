import { TestBed } from '@angular/core/testing';

import { CategoriesGeneratorService } from './categories-generator.service';

describe('CategoriesGeneratorService', () => {
    let service: CategoriesGeneratorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CategoriesGeneratorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
