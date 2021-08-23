import React from "react"

import { PageTransition } from "components/transition"
import { Divider, Hero, Social } from "components/typography"
import { Wrapper } from "components/layout"
import { NextSeo } from "next-seo"

function Contact(props) {
    const { page, social } = props
    return (
        <React.Fragment>
            <NextSeo
                title={page.head.title}
                description={page.head.description}
            />
            <Wrapper className="px-4 pt-7 pb-2">
                <PageTransition>
                    <Hero title={page.title} titleClassName="font-normal" className="gap-10">
                        <small>{ page.description }</small>
                        <Social className="bg-green-900 bg-opacity-50 text-green-400 text-sm mt-0" link={`https://wa.me/${social.whatsapp.phone}?text=${social.whatsapp.message}`}>
                            Benimle hemen <b>Whatsapp</b> üzerinden konuşmak için tıklayın ⟶
                        </Social>
                        <div className="flex flex-col gap-8">
                            <Divider />
                            <form autoComplete="false" className="flex flex-col gap-6">
                                <label className="block w-full">
                                    <span className="text-sm flex flex-col gap-1">
                                        <div>{ page.form.label.title } <small className="font-bold text-sm text-red-400">*</small></div>
                                        <small className="text-xs mt-2 mb-2">{ page.form.label.description }</small>
                                    </span>
                                    <input type="email" placeholder="yourname@mail.com" required className="mt-3 block w-full px-0.5 pl-2 bg-transparent border-2 border-white border-opacity-10 placeholder-white placeholder-opacity-20 focus:ring-0 focus:border-opacity-20" />
                                </label>
                                <div className="text-right text-base">
                                    <button className="hover:underline">{ page.form.button.title }</button>
                                </div>
                            </form>
                        </div>
                    </Hero>
                </PageTransition>
            </Wrapper>
        </React.Fragment>
    )
}

export async function getStaticProps() {
    /**
     * Static fields;
     * These fields cannot change with this props. İf you want to change you can change it by manually.
     *
     * @static <Social className="bg-green-900 text-green-400"... at line 20
     */
    return {
        props: {
            page: {
                title: "Bu sayfada benimle iletişime geçebilmek için gereken tüm bilgileri bulabilirsiniz.",
                description: "Sizlerle beraber güzel projelere adım atalabileceğimize inanıyorum. Benimle iletişim halinde bulunmak için altta verilmiş olan formu doldurmanız yeterlidir. Ben size en yakın zamanda döneceğim.",
                head: {
                    title: "İletişim",
                    description: "Enes Bayraktar'ın kişisel bloğunda hakkında yayınlamış olduğu iletişim bölümü. Buradan kendisine ulaşabilirsiniz."
                },
                form: {
                    label: {
                        title: "E-posta Adresiniz",
                        description: "Bu formu gönderdiğinizde Kişisel Verilerin Korunması Kanunu uyarınca e-posta adresinizi benimle paylaşmış olursunuz. İlerlemek için \"Benimle iletişime geç\" yazısına tıklayın."
                    },
                    button: {
                        title: "Benimle iletişime geç"
                    }
                }
            },
            social: {
                whatsapp: {
                    phone: "905340631477",
                    message: "Sizinle%20en%20yakın%20zamanda%20görüşmek%20istiyorum.",
                }
            }
        }
    }
}

export default Contact