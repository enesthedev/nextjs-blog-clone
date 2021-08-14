import Document, { Html, Head, Main, NextScript } from "next/document";

class BlogDocument extends Document {
    render() {
        return (
            <>
                <Html>
                    <Head>
                        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                    </Head>
                    <body className="bg-gray-1000 font-inter antialiased text-white text-opacity-60">
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            </>
        )
    }
}

export default BlogDocument