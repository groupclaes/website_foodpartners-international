export const environment = {
  production: false,
  defaultLanguage: 'en',
  supportedLanguages: [
    'nl',
    'fr',
    'en'
  ],
  publicBase: 'https://www.foodpartners-internaional.com',
  ssr: {
    localRedirects: [
      'http://localhost/assets/',
      'http://localhost:4200/assets/'
    ]
  }
}

// Included with Angular CLI.
