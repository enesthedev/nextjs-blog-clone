import React from "react"
import Head from "next/head"

import { PageTransition } from "components/transition"
import { Wrapper } from "components/layout"
import { BoldLink, Hero } from "components/typography"

function NotFound() {
    return (
        <React.Fragment>
            <Head>
                <title>Bilinmeyen Sayfa - Enes Bayraktar</title>
                <meta name="title" content="Bilinmeyen Sayfa - Enes Bayraktar" />
                <meta name="description" content="Enes Bayraktar'ın kişisel bloğunda bilinmeyen bir sayfa" />
            </Head>
            <PageTransition>
                <Wrapper size="md" className="px-4 pt-8 pb-2">
                    <Hero title="Aradığınız sayfayı bulamadım" titleClassName="font-normal text-white" className="gap-5">
                        <span>
                            Lütfen gitmek istediğiniz sayfanın var olduğundan emin olun. Geri dönmek için lütfen <BoldLink router={true} to="/" text="tıklayın"/>.
                        </span>
                    </Hero>
                </Wrapper>
            </PageTransition>
        </React.Fragment>
    )
}

export default NotFound