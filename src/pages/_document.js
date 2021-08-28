import Document, { Html, Head, Main, NextScript } from "next/document"

class BlogDocument extends Document {
    render() {
        return (
            <>
                <Html lang="tr-TR">
                    <Head />
                    <body className="font-inter antialiased text-black dark:text-white dark:text-opacity-60 dark:bg-gray-1000">
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            </>
        )
    }
}

export default BlogDocument