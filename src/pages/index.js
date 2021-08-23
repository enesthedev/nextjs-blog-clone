import React from "react"

import { PageTransition } from "components/transition"
import { Hero, Social, BoldLink, Divider } from "components/typography"
import { Wrapper } from "components/layout"
import { NextSeo } from "next-seo"

function Index(props) {
    const { page } = props
    return (
        <React.Fragment>
            <NextSeo
                title={page.head.title}
                description={page.head.description}
            />
            <Wrapper size="md" className="px-4 pt-7 pb-2">
                <PageTransition>
                    <Hero title={page.title} className="pb-7 gap-7">
                        {typeof page.description === "object" ? page.description.map((text, index) => {
                            return (
                                <p key={index}>
                                    { text }
                                </p>
                            )
                        }) : page.description}
                    </Hero>
                </PageTransition>
            </Wrapper>
            <Wrapper size="lg" className="px-4 pb-4 mt-4 flex justify-center align-center">
                <PageTransition>
                    <div className="flex flex-col gap-7 px-4 max-w-screen-md xl:max-w-screen-lg xl:flex-row">
                        <Hero title={page.sections.head.title} titleClassName="text-base" className="mt-9 gap-5 xl:p-12 xl:border-2 xl:border-r-0">
                            {typeof page.sections.head.description === "object" ? page.sections.head.description.map((description, index) => {
                                return (
                                    <p key={index} className="base-hero text-sm whitespace-pre-line">
                                        { description }
                                    </p>
                                )
                            }) : page.sections.head.description}
                        </Hero>
                        <Hero title={page.sections.sub.title} titleClassName="text-base" className="mt-9 gap-5 xl:p-12 xl:border-2 xl:border-l-8 xl:border-white xl:border-opacity-10 xl:mt-0">
                            {typeof page.sections.sub.description === "object" ? page.sections.sub.description.map((description, index) => {
                                return (
                                    <p key={index} className="text-sm whitespace-pre-line">
                                        { description }
                                    </p>
                                )
                            }) : page.sections.sub.description}
                        </Hero>
                    </div>
                </PageTransition>
            </Wrapper>
        </React.Fragment>
    )
}

export async function getStaticProps() {
    return {
        props: {
            page: {
                title: "Ben Enes Bayraktar.\nİstanbulda Üniversite okuyan bir Yazılımcıyım.",
                description: [
                    "Javascript, front-end teknolojileri, web servisleri, bilgisayar oyunları ve araştırma gibi konularla yakından ilgileniyorum.",
                    "Yaptığım yazılımlar ile alakalı kaynak kodları açık bir şekilde Github adresimde paylaşıyorum.",
                    "İnsanların başarılı olabilmek için sadece yeteneğe değil çok çalışmaya ihtiyaçları olduğuna inanıyorum."
                ],
                head: {
                    title: "Giriş",
                    description: "Enes Bayraktar'ın kişisel bloğunda hakkında yayınlamış olduğu iletişim bölümü. Buradan kendisine ulaşabilirsiniz."
                },
                sections: {
                    head: {
                        title: "Kimim ben?",
                        description: [
                            "ismim Enes. 25 Eylül 2000 tarihinde Trabzonda bir devlet hastanesinde doğdum. Küçük yaşlarda abilerim sayesinde bilgisayarla tanıştım.",
                            "İlk bilgisayarım toplama bir kasaydı. Yıkanılabilir topu olan bir mouse ve kocaman tuşları olan bir klavye ile merhaba dedim elektronik dünyaya."
                        ]
                    },
                    sub: {
                        title: "Yazılım kariyerim nasıl başladı?",
                        description: [
                            "Oynadığım oyunlarda kurulan klanlara üye olmak için tıkladığım linklerle başladı websiteleri ile olan etkileşimim. O zamanlar oyunlarda klan üyelerinden ayrışabilmek için Grafiker, Kodlamacı vesaire gibi bir sürü kavram vardı.",
                            "Bende kolları sıvadım açtım Photoshop'u başladım tasarlamalaya. Bir şeyler yaptıkca ve yaptıklarım insanlar tarafından beğenildikçe içime işledi bu duygu.",
                            "Tasarımlarımı ilk MyBB forum sistemine yapmıştım ancak kodlayabilecek insan olmayınca araştırmalar vesaire derken HTML, CSS ve Javascrpt üçlüsüyle tanıştım. Bu süreçte tanıştığım insanlar hem yaşımın küçüklüğünden hem de yetenek mi gördüler bilmiyorum ancak bana çok yardımcı olmuşlardı.",
                            "Bu heves ile beraber farklı internet siteleri ve projeler yapma yolunda ilerlemeye başladım. İşte şimdi olduğum yere geldim. 2014'de başlayan bu serüven benim geleceğim oldu."
                        ]
                    }
                }
            }
        }
    }
}

export default Index