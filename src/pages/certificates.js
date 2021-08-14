import { PageTransition } from "components/transition"
import { Social, Hero } from "components/typography"
import { Wrapper } from "components/layout"

function Certificates() {
    return (
        <Wrapper size="md" className="px-4 mt-7">
            <PageTransition>
                <Hero title={{
                    text: "Test mesajı",
                    weight: "base"
                }} />
                <Social color="green">Test</Social>
            </PageTransition>
        </Wrapper>
    )
}

export default Certificates