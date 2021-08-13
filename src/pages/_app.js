import React from "react"
import App  from "next/app"

import { Layout } from "components/layout"

import "styles/tailwind.css"
import "styles/extend.css"

class BlogApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}

export default BlogApp