import { Component, ViewChild, ElementRef } from '@angular/core';
import { companyData } from './shared/data/company-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
    // to make it available in template
    public companyName = companyData.name;

    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute
    ) {}

    public search() {
        const searchString = this.searchInput.nativeElement.value;
        this.router.navigate(['results'], {
            queryParams: { search: searchString },
            queryParamsHandling: 'merge',
        });
    }
}
