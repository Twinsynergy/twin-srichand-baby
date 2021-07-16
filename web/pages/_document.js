import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <link rel="shortcut icon" href="/assets/favicon/favicon.ico" type="image/x-icon" /> */}
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} /> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-90760411-9');
          `
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
