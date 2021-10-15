import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head title="Waste Collector - raising awarenes around digital climate footprint" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
