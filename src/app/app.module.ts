import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ArticleCardComponent } from './shared/article-card/article-card.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ResultsComponent } from './pages/results/results.component';
import { DisplayCategoriesComponent } from './shared/display-categories/display-categories.component';

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        LandingPageComponent,
        ArticleCardComponent,
        ResultsComponent,
        DisplayCategoriesComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
        CarouselModule.forRoot(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
