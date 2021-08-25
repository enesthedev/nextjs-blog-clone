import React from "react"
import Head from "next/head"

import { PageTransition } from "components/transition"
import { Hero, Divider, UnderlineLink } from "components/typography"
import { Wrapper } from "components/layout"

function Index() {
    return (
        <React.Fragment>
            <Head>
                <title>Giriş - Enes Bayraktar</title>
                <meta name="title" content="Giriş - Enes Bayraktar" />
                <meta name="description" content="Enes Bayraktar'ın kişisel bloğunda hakkında yayınlamış olduğu giriş bölümü. Buradan kendisi hakkındaki tüm detaylara ulaşabilirsiniz." />
            </Head>
            <Wrapper size="md" className="px-4 pt-7 pb-4">
                <PageTransition>
                    <Hero title={`Ben Enes Bayraktar.\nİstanbulda Üniversite okuyan bir Yazılımcıyım.`} className="pb-7 gap-7">
                        <p>Javascript, front-end teknolojileri, web servisleri, bilgisayar oyunları ve araştırma gibi konularla yakından ilgileniyorum.</p>
                        <p>Yaptığım yazılımlar ile alakalı kaynak kodları açık bir şekilde <UnderlineLink to="https://github.com/enesbayrktar" text="Github"/> adresimde paylaşıyorum.</p>
                        <p>İnsanların başarılı olabilmek için sadece yeteneğe değil çok çalışmaya ihtiyaçları olduğuna inanıyorum.</p>
                    </Hero>
                    <Divider />
                    <div className="flex flex-col gap-7 max-w-screen-md">
                        <Hero title="Yazılım kariyerim nasıl başladı?" titleClassName="text-base" className="mt-11 gap-5">
                            <p className="text-sm whitespace-pre-line">Oyunlar sayesinde başladım yazılım sektörüne. Yazılım sektörünün bana getirdiği faydalardan biri ise araştırma yeteneklerimi geliştirmesi oldu.</p>
                            <p className="text-sm whitespace-pre-line">Oluşan araştırma becerisi sayesinde öğrenme tutkum oluştu. Bu sayede şuan gördüğünüz siteyi yazabildim, Github üzerinde açık kaynak kodlu projeler oluşturabildim ve kendimi geliştirebildim.</p>
                            <p className="text-sm whitespace-pre-line">Şuanda Yazılım Geliştiricisi ünvanı ile hayatıma devam etmekteyim. İleriye dönük planlarım arasında JS üzerine uzmanlık kurmak var.</p>
                        </Hero>
                        <Hero title="Özetle" titleClassName="text-base" className="mt-7 gap-5">
                            <p className="text-sm whitespace-pre-line">25 Eylül 2000 tarihinde Trabzonda bir devlet hastanesinde doğdum. Küçük yaşlarda abilerim sayesinde bilgisayarla tanıştım.</p>
                            <p className="text-sm whitespace-pre-line">Bilgisayarla tanıştıktan sonra oyun oynamak en büyük hobilerimden birisi oldu. Bunun dışında geziler düzenlemek ve müzik dinlemek ise hayatımın sanallıktan uzak olan kısmını oluşturdu.</p>
                        </Hero>
                    </div>
                </PageTransition>
            </Wrapper>
        </React.Fragment>
    )
}

export function getServerSideProps(context) {
    const { req } = context
    const canonical = (req.headers["x-forwarded-proto"] || req.connection.encrypted ? "https" : "http") + "://" + req.headers.host + "/"
    return {
        props: {
            canonical: canonical
        }
    }
}

export default Index