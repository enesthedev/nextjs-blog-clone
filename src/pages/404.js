import { PageTransition } from "../components/transition"
import { Wrapper } from "../components/layout"
import { BoldLink, Hero } from "../components/typography"

function NotFound() {
    return (
        <PageTransition>
            <Wrapper size="md" className="px-4">
                <Hero title={{
                    text: `
                        Aradığınız sayfayı bulamadım ):
                        `,
                    weight: "base"
                }}>
                    <span>
                        Lütfen gitmek istediğiniz sayfanın var olduğundan emin olun. Geri dönmek için lütfen <BoldLink router={true} to="/" content="tıklayın"/>.
                    </span>
                </Hero>
            </Wrapper>
        </PageTransition>
    )
}

export default NotFound