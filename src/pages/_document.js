import Document, { Html, Head, Main, NextScript } from "next/document";

class BlogDocument extends Document {
    render() {
        return (
            <>
                <Html>
                    <Head />
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            </>
        )
    }
}