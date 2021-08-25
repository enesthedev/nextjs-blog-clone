import React from "react"
import Head from "next/head"

import { PageTransition } from "components/transition"
import { Social, Hero } from "components/typography"
import { Wrapper } from "components/layout"

function Resume() {
    return (
        <React.Fragment>
            <Head>
                <title>Özgeçmiş - Enes Bayraktar</title>
                <meta name="title" content="Özgeçmiş - Enes Bayraktar" />
                <meta name="description" content="Enes Bayraktar'ın iş biyografisini bu sayfada bulabilirsiniz" />
            </Head>
            <Wrapper size="md" className="px-4 pt-7 pb-2">
                <PageTransition>
                    <div className="flex flex-col gap-14 pb-5">
                        <Hero title="Yaptığım ve yapıyor olduğum işleri kısaca açıklamaları ile beraber burada görüntüleyebilirsiniz" titleClassName="font-normal">
                            <Social link={`https://www.github.com/enesbayrktar`} className="bg-black text-sm text-black bg-opacity-10 dark:text-blue-400 dark:bg-opacity-30">
                                Tüm açık kaynak kodlu çalışmalarımı ve yazılım portföyümü görmek için Github adresimi ziyaret edebilirsiniz ⟶
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

export function getServerSideProps(context) {
    const { req } = context
    const canonical = req.headers.host + "/resume"
    return {
        props: {
            canonical: canonical
        }
    }
}

export default Resume