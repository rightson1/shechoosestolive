// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { EmotionCache } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../utils/createCache";
import React from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } =
      createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        ...emotionStyleTags,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          {/* Preload the Roboto font */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
          </noscript>

          {/* Additional fonts: Alegreya and Quicksand */}
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600;1,700&family=Quicksand:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Add any additional head elements here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
