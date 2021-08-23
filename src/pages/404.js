import React from "react"

import { PageTransition } from "components/transition"
import { Wrapper } from "components/layout"
import { BoldLink, Hero } from "components/typography"
import { NextSeo } from "next-seo"

function NotFound() {
    return (
        <React.Fragment>
            <NextSeo
                title="Bilinmeyen Sayfa"
            />
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