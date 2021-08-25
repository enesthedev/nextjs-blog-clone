import React from "react"
import App from "next/app"
import Head from "next/head"

import { PageLayout } from "components/layout"

import "styles/tailwind.css"

class BlogApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <React.Fragment>
                <Head>
                    <meta name="robots" content="index, follow" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="author" content="Enes Bayraktar <bilgi@enesbayraktar.com.tr>" />
                    <meta name="keywords" content="Enes Bayraktar, enes, blog, portfolio, iletişim, cv, geliştirici, front end developer, senior developer," />
                    <meta name="application-name" content="Enes Bayraktar'ın Bloğu" />
                    {pageProps.canonical ? <link rel="canonical" href={pageProps.canonical} /> : ""}
                </Head>
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