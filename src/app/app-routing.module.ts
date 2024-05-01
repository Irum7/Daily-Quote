import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuotePageComponent } from './pages/quote-page/quote-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: "quote",
    component: QuotePageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
