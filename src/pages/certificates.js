import { PageTransition } from "components/transition"
import { Social } from "components/typography"
import { Wrapper } from "components/layout"

function Certificates() {
    return (
        <Wrapper size="md" className="px-4 mt-3">
            <PageTransition>
                <p className="text-highlight text-2xl">test</p>
                <Social color="green">Test</Social>
            </PageTransition>
        </Wrapper>
    )
}

export default Certificates