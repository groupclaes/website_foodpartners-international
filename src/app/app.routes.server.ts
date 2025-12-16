import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [{
  path: 'nl/**',
  renderMode: RenderMode.Prerender
},{
  path: 'fr/**',
  renderMode: RenderMode.Prerender
},{
  path: 'en/**',
  renderMode: RenderMode.Prerender
}, {
  path: '**',
  renderMode: RenderMode.Prerender
}]