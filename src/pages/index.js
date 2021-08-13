import {PageTransition, Wrapper, Hero, Social} from "components";

function Index() {
    return (
        <Wrapper size="md" className="px-4 mt-1">
            <PageTransition>
                <Hero title={`
                    Ben Enes Bayraktar.
                    İstanbulda Üniversite okuyan bir Yazılımcıyım.
                `}>
                    <p>Javascript, front-end teknolojileri, web servisleri, bilgisayar oyunları ve araştırma gibi konularla yakından ilgileniyorum.</p>
                    <p>Yaptığım yazılımlar ile alakalı kaynak kodları açık bir şekilde Github adresimde paylaşıyorum.</p>
                    <p>İnsanların başarılı olabilmek için sadece yeteneğe değil çok çalışmaya ihtiyaları olduğuna inanıyorum.</p>
                    <p>Son zamanlarda sektörde kendimi geliştirebilmek için bir uğraş içerisindeyim.</p>
                    <Social color="green"></Social>
                </Hero>
            </PageTransition>
        </Wrapper>
    )
}

export default Index