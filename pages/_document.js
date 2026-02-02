import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="https://crwenterprise.in/wp-content/uploads/2024/07/cropped-solar-favicon-1-32x32.jpg" />
          <meta name="description" content="PR Electricals – Powering a Greener Future with Solar Energy. Power your world with smart solar. From custom design to expert installation and ongoing care." />
          <meta name="keywords" content="solar energy, solar panels, solar installation, renewable energy, PR Electricals, Maharashtra" />
          <meta property="og:title" content="PR Electricals - Powering Sustainability, Building Excellence" />
          <meta property="og:description" content="Leading solar energy provider in India offering premium solar solutions for residential, commercial, and government projects." />
          <meta property="og:image" content="https://crwenterprise.in/wp-content/uploads/2024/03/CRW-Logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
