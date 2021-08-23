import React from "react"
import App from "next/app"

import { PageLayout } from "components/layout"
import { DefaultSeo } from "next-seo"

import "styles/tailwind.css"

class BlogApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <React.Fragment>
                <DefaultSeo
                    titleTemplate="%s - Enes Bayraktar"
                />
                <PageLayout menus={{
                    '/': 'Giriş',
                    '/resume': 'Özgeçmiş',
                    '/certificates': 'Sertifikalar',
                    '/contact': 'İletişim'
                }}>
                    <Component {...pageProps} />
                </PageLayout>
            </React.Fragment>
        )
    }
}

export default BlogApp