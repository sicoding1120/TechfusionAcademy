/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.png" />
        <meta name="description" content="web untuk belajar programming berbahasa indoneia terbaru" />
        <meta name="keywords" content="tech, fusion ,tech fusion, techfusion,techfusion academy, academy, ui/ux, html5, css, belajar coding, javascript learn, next learn" />
        <meta name='author' content='daffa hafizh firdaus dan ammar rizki adia permono' />
        <title>Techfusion Academy</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
