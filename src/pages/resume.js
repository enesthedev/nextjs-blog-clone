import React from "react"

import { PageTransition } from "components/transition"
import { Social, Hero } from "components/typography"
import { Wrapper } from "components/layout"
import { NextSeo } from "next-seo";

function Resume(props) {
    const { page, social } = props
    return (
        <React.Fragment>
            <NextSeo
                title={page.head.title}
                description={page.head.description}
            />
            <Wrapper size="md" className="px-4 pt-7 pb-2">
                <PageTransition>
                    <div className="flex flex-col gap-14 pb-5">
                        <Hero title={page.title} titleClassName="font-normal">
                            <Social link={`https://www.github.com/${social.github.username}/`} className="bg-black bg-opacity-30 text-sm">
                                { social.github.text }
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

export async function getStaticProps() {
    return {
        props: {
            page: {
                title: "Yaptığım ve yapıyor olduğum işleri kısaca açıklamaları ile beraber burada görüntüleyebilirsiniz",
                head: {
                    title: "Özgeçmiş",
                    description: "Enes Bayraktar'ın iş biyografisini bu sayfada bulabilirsiniz"
                }
            },
            social: {
                github: {
                    username: "enesbayrktar",
                    text: "Tüm açık kaynak kodlu çalışmalarımı ve yazılım portföyümü görmek için Github adresimi ziyaret edebilirsiniz ⟶"
                }
            }
        }
    }
}

export default Resume