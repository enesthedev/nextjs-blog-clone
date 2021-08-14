import { PageTransition } from "components/transition"
import { Social, Hero } from "components/typography"
import { Wrapper } from "components/layout"

function Certificates() {
    return (
        <Wrapper size="md" className="px-4 mt-7">
            <PageTransition>
                <Hero title={{
                    text: "Kendime bir motivasyon kaynağı olan sertifikalarımı bu sayfadan görüntüleyebilirsiniz",
                    weight: "base"
                }} />
                <Social color="green" top="5">Test</Social>
            </PageTransition>
        </Wrapper>
    )
}

export default Certificates