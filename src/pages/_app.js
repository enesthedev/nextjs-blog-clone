import React from "react"
import App  from "next/app"

import { PageLayout } from "components/layout"

import "styles/tailwind.css"
import "styles/extend.css"

class BlogApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <PageLayout menus={{
                '/': 'Giriş',
                '/portfolio': 'Portföy',
                '/certificates': 'Sertifikalar',
                '/contact': 'İletişim'
            }}>
                <Component {...pageProps} />
            </PageLayout>
        )
    }
}

export default BlogApp