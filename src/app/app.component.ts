import { Component } from '@angular/core';
import { companyData } from './shared/data/company-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    // to make it available in template
    public companyName = companyData.name;
}
