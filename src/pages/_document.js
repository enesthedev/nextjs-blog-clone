import Document, { Html, Head, Main, NextScript } from "next/document";

class BlogDocument extends Document {
    render() {
        return (
            <>
                <Html>
                    <Head />
                    <body className="bg-gray-1000">
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            </>
        )
    }
}

export default BlogDocument