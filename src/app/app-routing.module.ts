import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        pathMatch: 'full',
    },
    {
        path: 'categories',
        children: [
            {
                path: '',
                component: CategoriesComponent,
            },
        ],
    },
    {
        path: 'results',
        component: ResultsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
