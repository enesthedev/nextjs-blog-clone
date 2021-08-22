import React from "react"

import { PageTransition } from "components/transition"
import { Divider, Hero } from "components/typography"
import { Wrapper } from "components/layout"
import { FacebookIcon, TwitterIcon } from "components/icons";
import { NextSeo } from "next-seo"

function Contact() {
    return (
        <React.Fragment>
            <NextSeo
                title="İletişim"
            />
            <Wrapper className="px-4">
                <PageTransition>
                    <Hero title={{
                        text: `
                        Sosyal medya hesaplarım üzerinden ya da burada dolduracağınız form üzerinden benimle iletişime geçebilirsiniz.
                        `,
                        weight: "base"
                    }}>
                        <div className="flex flex-col gap-6 mt-8">
                            <form autoComplete="false" className="flex flex-col gap-6">
                                <div className="flex flex-col gap-7 sm:flex-row">
                                    <label className="block w-full">
                                        <span className="text-sm">Adınız ve Soyadınız</span>
                                        <input type="text" className="mt-1 block w-full px-0.5 pl-2 bg-transparent border border-opacity-10 focus:ring-0 focus:border-white focus:border-opacity-20" />
                                    </label>
                                    <label className="block w-full">
                                        <span className="text-sm">E-posta adresiniz</span>
                                        <input type="text" className="mt-1 block w-full px-0.5 bg-transparent border-0 border-b border-white border-opacity-30 focus:ring-0 focus:border-white focus:border-opacity-20" />
                                    </label>
                                </div>
                                <div className="flex flex-col gap-7">
                                    <label className="block w-full">
                                        <span className="text-sm">Mesajınız</span>
                                        <textarea className="mt-1 block w-full px-0.5 pl-2 bg-transparent border border-opacity-10 h-32 focus:ring-0 focus:border-white focus:border-opacity-20" />
                                    </label>
                                    <button className="text-base hover:underline">Gönder</button>
                                </div>
                            </form>
                            <div className="flex gap-5 flex-col">
                                <Divider color="white" opacity="10"/>
                                <div className="flex gap-4 flex-col">
                                    <Hero title={{
                                        text: "Lütfen görmek istediğiniz sosyal medya platformuna tıklayınız",
                                        size: "sm",
                                        weight: "base"
                                    }} />
                                    <div className="flex gap-6 flex-row">
                                        <a href="https://web.facebook.com/enes.bayraktar.7334/" target="_blank" className="transition transition-all duration-100 hover:text-blue-500">
                                            <FacebookIcon size={24}/>
                                        </a>
                                        <a href="https://twitter.com/enesthedev" target="_blank" className="transition transition-all duration-100 hover:text-blue-400">
                                            <TwitterIcon size={24}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Hero>
                </PageTransition>
            </Wrapper>
        </React.Fragment>
    )
}

export default Contact