import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset='utf-8' />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Zen+Antique+Soft&display=swap" rel="stylesheet"/>
        <title>クリプト集落 NATORIプロジェクト</title>
        <meta name ="title" content ="クリプト集落 NATORIプロジェクト"/>
        <meta name ="description" content ="DAOを目指す世界一小さな限界集落"/>
        <meta name ="copyright" content ="NATORI"/>
        <meta property ="og:type" content ="website"/>
        <meta property ="og:url" content ="https://natori.netlify.app/"/>
        <meta property ="og:title" content ="クリプト集落 NATORIプロジェクト"/>
        <meta property ="og:description" content ="DAOを目指す世界一小さな限界集落"/>
        <meta property ="og:image" content ="https://natori-site.dogooo.repl.co/natori-ogp.jpg"/>
        <meta property ="twitter:card" content ="summary_large_image"/>
        <meta property ="twitter:url" content ="https://natori.netlify.app/"/>
        <meta property ="twitter:title" content ="クリプト集落 NATORIプロジェクト"/>
        <meta property ="twitter:description" content ="DAOを目指す世界一小さな限界集落"/>
        <meta property ="twitter:image" content ="https://natori-site.dogooo.repl.co/natori-ogp.jpg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}