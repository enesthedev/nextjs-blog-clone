import { PageTransition } from "components/transition"
import { BoldLink, Divider, Hero, Social } from "components/typography"
import { Wrapper } from "components/layout"

function Contact() {
    return (
        <Wrapper className="px-4">
            <PageTransition>
                <Hero title={{
                    text: `
                        Sosyal medya hesaplarım üzerinden ya da burada dolduracağınız form üzerinden benimle iletişime geçebilirsiniz.
                        `,
                    weight: "base"
                }}>
                    <div className="flex flex-col gap-2">
                        <form autoComplete={false} >
                            test
                        </form>
                        <Social color="black">
                            <div className="flex gap-2 flex-col">
                                <Hero title={{text: [<small>Lütfen gitmek istediğiniz sosyal medya platformuna tıklayınız</small>], weight:"base", size:"lg"}}/>
                                <Divider color="white" opacity="10"/>
                                <div className="flex gap-2 flex-col sm:flex-row">
                                    <BoldLink to="/" content="Facebook"/>
                                    <BoldLink to="/" content="Twitter"/>
                                    <BoldLink to="/" content="Telegram"/>
                                    <BoldLink to="/" content="Github"/>
                                </div>
                            </div>
                        </Social>
                    </div>
                </Hero>
            </PageTransition>
        </Wrapper>
    )
}

export default Contact