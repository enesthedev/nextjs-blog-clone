import { PageTransition } from "components/transition"
import { Hero, Social, BoldLink } from "components/typography"
import { Wrapper } from "components/layout"

function Certificates() {
    return (
        <Wrapper size="md" className="px-4 mt-3">
            <PageTransition>
                <Social color="green">Test</Social>
            </PageTransition>
        </Wrapper>
    )
}

export default Certificates