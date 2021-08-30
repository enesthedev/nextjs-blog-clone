import React from "react"
import Head from "next/head"

import { PageLayout } from "components/layout"

import "styles/tailwind.css"

function App(props) {
    const { Component, pageProps } = props
    return (
        <React.Fragment>
            <Head>
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="author" content="Enes Bayraktar <bilgi@enesbayraktar.com.tr>" />
                <meta name="keywords" content="Enes Bayraktar, enes, blog, portfolio, iletişim, cv, geliştirici, front end developer, senior developer," />
                <meta name="application-name" content="Enes Bayraktar'ın Bloğu" />
                { pageProps.canonical ? <link rel="canonical" href={pageProps.canonical} /> : "" }
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <PageLayout menus={{
                '/': 'Giriş',
                '/certificates': 'Sertifikalar',
                '/contact': 'İletişim'
            }}>
                <Component {...pageProps} />
            </PageLayout>
        </React.Fragment>
    )
}

export default App