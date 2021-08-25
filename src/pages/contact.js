import React from "react"
import Head from "next/head"

import { PageTransition } from "components/transition"
import { Divider, Hero, Social } from "components/typography"
import { Wrapper } from "components/layout"

function Contact() {
    return (
        <React.Fragment>
            <Head>
                <title>İletişim - Enes Bayraktar</title>
                <meta name="title" content="İletişim - Enes Bayraktar" />
                <meta name="description" content="Enes Bayraktar'ın kişisel bloğunda hakkında yayınlamış olduğu iletişim bölümü. Buradan kendisine ulaşabilirsiniz." />
            </Head>
            <Wrapper className="px-4 pt-7 pb-4">
                <PageTransition>
                    <Hero title="Bu sayfada benimle iletişime geçebilmek için gereken tüm bilgileri bulabilirsiniz." titleClassName="font-normal" className="gap-10">
                        <small>Sizlerle beraber güzel projelere adım atalabileceğimize inanıyorum. Benimle iletişim halinde bulunmak için altta verilmiş olan formu doldurmanız yeterlidir. Ben size en yakın zamanda döneceğim.</small>
                        <Social className="bg-green-900 bg-opacity-10 text-sm mt-0 dark:bg-opacity-50 dark:text-green-400" link={`https://wa.me/905340631477?text=Sizinle%20en%20yakın%20zamanda%20görüşmek%20istiyorum.`}>
                            Benimle hemen <b>Whatsapp</b> üzerinden konuşmak için tıklayın ⟶
                        </Social>
                        <div className="flex flex-col gap-8">
                            <Divider />
                            <form autoComplete="false" className="flex flex-col gap-6">
                                <label className="block w-full">
                                    <span className="text-sm flex flex-col gap-1">
                                        <div>E-posta Adresiniz <small className="font-bold text-sm text-red-400">*</small></div>
                                        <small className="text-xs mt-2 mb-2">Bu formu gönderdiğinizde Kişisel Verilerin Korunması Kanunu uyarınca e-posta adresinizi benimle paylaşmış olursunuz. İlerlemek için "Benimle iletişime geç" yazısına tıklayın.</small>
                                    </span>
                                    <input type="email" placeholder="yourname@mail.com" required className="mt-3 block w-full px-0.5 pl-2 bg-transparent border-2 border-black border-opacity-10 placeholder-black placeholder-opacity-20 focus:ring-0 focus:border-opacity-20 dark:border-white dark:placeholder-white" />
                                </label>
                                <div className="text-right text-base">
                                    <button className="hover:underline">Benimle iletişime geç</button>
                                </div>
                            </form>
                        </div>
                    </Hero>
                </PageTransition>
            </Wrapper>
        </React.Fragment>
    )
}

export function getServerSideProps(context) {
    const { req } = context
    const canonical = (req.headers["x-forwarded-proto"] || req.connection.encrypted ? "https" : "http") + "://" + req.headers.host + "/contact"
    return {
        props: {
            canonical: canonical
        }
    }
}

export default Contact