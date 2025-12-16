import locales from '../../public/assets/locales.json'

export const environment = {
  production: true,
  defaultLanguage: 'nl',
  supportedLanguages: locales,
  publicBase: 'https://www.foodpartners-internaional.com',
  ssr: {
    localRedirects: [
      'https://www.foodpartners-international.com/assets/'
    ]
  }
}
