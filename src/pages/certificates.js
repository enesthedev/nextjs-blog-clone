import React from "react"
import Head from "next/head"

import { PageTransition } from "components/transition"
import { Social, Hero } from "components/typography"
import { Wrapper } from "components/layout"

function Certificates(props) {
    const { page, social } = props
    return (
        <React.Fragment>
            <Head>
                <title>Sertifikalar - Enes Bayraktar</title>
                <meta name="title" content="Sertifikalar - Enes Bayraktar" />
                <meta name="description" content="Enes Bayraktar'ın kişisel bloğunda yayınlamış olduğu tüm sertifikalar bu sayfada gösterilir. Buradan Enes Bayraktar ile ilgili tüm eğitim geçmişini görüntüleyebilirsiniz." />
            </Head>
            <Wrapper size="md" className="px-4 pt-7 pb-2">
                <PageTransition>
                    <div className="flex flex-col gap-14 pb-5">
                        <Hero title="Kendime bir motivasyon kaynağı olan sertifikalarımı bu sayfadan görüntüleyebilirsiniz." titleClassName="font-normal">
                            <Social className="mt-5 text-sm" link="https://www.linkedin.com/in/enesbayrktar/">
                                Tüm sertifikalarımı görmek için buraya tıklayarak LinkedIn sayfamı ziyaret edebilirsiniz ⟶
                            </Social>
                        </Hero>

                        <Hero title="Web Programlama üzerine" titleClassName="font-normal text-xl">
                            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}>
                                <div>
                                    <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/101" rel="noreferrer">
                                        Web Programlama 101
                                    </a>
                                </div>          <div>
                                    <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/201" rel="noreferrer">
                                        Web Programlama 201
                                    </a>
                                </div>
                                <div>
                                    <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/301" rel="noreferrer">
                                        Web Programlama 301
                                    </a>
                                </div>
                                <div>
                                    <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/302" rel="noreferrer">
                                        Web Programlama 302
                                    </a>
                                </div>
                                <div>
                                    <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/401" rel="noreferrer">
                                        Web Programlama 401
                                    </a>
                                </div>
                                <div>
                                    <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/402" rel="noreferrer">
                                        Web Programlama 402
                                    </a>
                                </div>
                            </div>
                        </Hero>
                        <Hero title="Tasarım Teknolojileri üzerine" titleClassName="font-normal text-xl">
                            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}>
                                <div>
                                    <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="/static/documents/certificates/ux101.pdf" rel="noreferrer">
                                        Web Sitesi Kullanılabilirliği
                                    </a>
                                </div>
                            </div>
                        </Hero>
                    </div>
                </PageTransition>
            </Wrapper>
        </React.Fragment>
    )
}

export function getServerSideProps(context) {
    const { req } = context
    const canonical = (req.headers["x-forwarded-proto"] || req.connection.encrypted ? "https" : "http") + "://" + req.headers.host + "/certificates"
    return {
        props: {
            canonical: canonical
        }
    }
}

export default Certificates