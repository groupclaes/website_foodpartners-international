import { NgModule } from '@angular/core'
import { NoPreloading, Route, RouterModule } from '@angular/router'


export const routes: Route[] = [{
  path: '',
  loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule),
  data: {
    title: 'pages.index.title',
    description: 'pages.index.description',
    keywords: 'pages.index.keywords',
    image: 'pages.claes-food-projects.image'
  }
}, {
  path: 'brabopak',
  loadChildren: () => import('./pages/brabopak/brabopak.module').then(m => m.BrabopakModule),
  data: {
    title: 'pages.brabopak.title',
    description: 'pages.brabopak.description',
    keywords: 'pages.brabopak.keywords',
    image: 'pages.brabopak.image'
  }
}, {
  path: 'claes-food-projects',
  loadChildren: () => import('./pages/claes-food-projects/claes-food-projects.module').then(m => m.ClaesFoodProjectsModule),
  data: {
    title: 'pages.claes-food-projects.title',
    description: 'pages.claes-food-projects.description',
    keywords: 'pages.claes-food-projects.keywords',
    image: 'pages.claes-food-projects.image'
  }
}, {
  path: 'weidelco',
  loadChildren: () => import('./pages/weidelco/weidelco.module').then(m => m.WeidelcoModule),
  data: {
    title: 'pages.weidelco.title',
    description: 'pages.weidelco.description',
    keywords: 'pages.weidelco.keywords',
    image: 'pages.weidelco.image'
  }
}, {
  path: 'dumortier',
  loadChildren: () => import('./pages/dumortier/dumortier.module').then(m => m.DumortierModule),
  data: {
    title: 'pages.dumortier.title',
    description: 'pages.dumortier.description',
    keywords: 'pages.dumortier.keywords',
    image: 'pages.dumortier.image'
  }
}, {
  path: '**',
  loadChildren: () => import('./pages/errors/errors.module').then(m => m.ErrorsModule)
}]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NoPreloading,
      initialNavigation: 'enabledNonBlocking',
      onSameUrlNavigation: 'ignore',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
