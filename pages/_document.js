import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="/fonts/Nexa-Trial-Bold.ttf" as='font' crossOrigin='anonymous' />
        <link rel="preconnect" href="/fonts/Nexa-Trial-Regular.ttf" as='font' crossOrigin='anonymous' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
