import { Component, OnInit } from '@angular/core';
import { companyData } from 'src/app/shared/data/company-data';

@Component({
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
    // to use it in template
    public company = companyData;
    constructor() {}

    ngOnInit(): void {}
}
