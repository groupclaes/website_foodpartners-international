import { Routes } from '@angular/router'

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadComponent: () => import('./pages/index/index.component').then(m => m.IndexComponent),
  data: {
    title: 'pages.index.title',
    description: 'pages.index.description',
    keywords: 'pages.index.keywords',
    image: 'pages.claes-food-projects.image'
  }
}, {
  path: 'brabopak',
  loadComponent: () => import('./pages/brabopak/brabopak.component').then(m => m.BrabopakComponent),
  data: {
    title: 'pages.brabopak.title',
    description: 'pages.brabopak.description',
    keywords: 'pages.brabopak.keywords',
    image: 'pages.brabopak.image'
  }
}, {
  path: 'claes-food-projects',
  loadComponent: () => import('./pages/claes-food-projects/claes-food-projects.component').then(m => m.ClaesFoodProjectsComponent),
  data: {
    title: 'pages.claes-food-projects.title',
    description: 'pages.claes-food-projects.description',
    keywords: 'pages.claes-food-projects.keywords',
    image: 'pages.claes-food-projects.image'
  }
}, {
  path: 'weidelco',
  loadComponent: () => import('./pages/weidelco/weidelco.component').then(m => m.WeidelcoComponent),
  data: {
    title: 'pages.weidelco.title',
    description: 'pages.weidelco.description',
    keywords: 'pages.weidelco.keywords',
    image: 'pages.weidelco.image'
  }
}, {
  path: 'dumortier',
  loadComponent: () => import('./pages/dumortier/dumortier.component').then(m => m.DumortierComponent),
  data: {
    title: 'pages.dumortier.title',
    description: 'pages.dumortier.description',
    keywords: 'pages.dumortier.keywords',
    image: 'pages.dumortier.image'
  }
}, {
  path: '**',
  loadComponent: () => import('./pages/errors/error-404/error-not-found.component').then(m => m.ErrorNotFoundComponent)
}]
