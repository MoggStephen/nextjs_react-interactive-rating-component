import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Couldnt get @import in globals.scss to import this and work in the vercel live deployment site. Doing it here fixed it! and made next.js happy*/}
        <link href="https://fonts.googleapis.com/css?family=Overpass:400,700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
