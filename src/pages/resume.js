import React from "react"

import { PageTransition } from "components/transition"
import { Social, Hero } from "components/typography"
import { Wrapper } from "components/layout"
import { NextSeo } from "next-seo";

function Resume() {
    return (
        <React.Fragment>
            <NextSeo
                title="Özgeçmiş"
            />
            <Wrapper size="md" className="px-4">
                <PageTransition>
                    <div className="flex flex-col gap-14 pb-5">
                        <Hero title={{
                            text: `
                        Yaptığım ve yapıyor olduğum işleri kısaca açıklamaları ile beraber burada görüntüleyebilirsiniz
                        `,
                            weight: "base"
                        }}>
                            <Social link="https://www.linkedin.com/in/enesbayrktar/" className="text-sm">
                                Tüm iş geçmişimi görmek için buraya tıklayarak LinkedIn sayfamı ziyaret edebilirsiniz ⟶
                            </Social>
                        </Hero>
                    </div>
                </PageTransition>
            </Wrapper>
            <Wrapper size="xl" className="mt-20">
            </Wrapper>
        </React.Fragment>
    )
}

export default Resume