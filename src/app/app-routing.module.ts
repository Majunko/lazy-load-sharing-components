import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/index/index.module').then(m => m.IndexModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'search/:q',
        loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule)
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
