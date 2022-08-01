export default {
  github: 'https://github.com/icecream0910/sungil-meal-app',
  docsRepositoryBase: 'https://github.com/icecream0910/ssoak-docs',
  titleSuffix: ' – 쏙',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">쏙</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        개발 문서
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ko" />
      <meta name="description" content="쏙 - 쏙 개발 과정이 궁금하다면" />
      <meta name="og:description" content="쏙 - 쏙 개발 과정이 궁금하다면" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://i.imgur.com/5LqdyDL.png" />
      <meta name="twitter:site:domain" content="ssoak-docs.vercel.app" />
      <meta name="twitter:url" content="https://ssoak-docs.vercel.app" />
      <meta name="og:title" content="쏙 - 쏙 개발 과정이 궁금하다면" />
      <meta name="og:image" content="https://i.imgur.com/5LqdyDL.png" />
      <meta name="apple-mobile-web-app-title" content="쏙" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: '페이지 수정 요청',
  footerText: <> © {new Date().getFullYear()} Yun Taein(@Ice Cream).</>,
  unstable_faviconGlyph: '🧑‍💻',
}
