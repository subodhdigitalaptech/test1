import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'movies' },
  { path: 'movies', component: MoviesComponent  },
  { path: 'detail/:id', component: DetailsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
