import React from "react"

import { PageTransition } from "components/transition"
import { Social, Hero } from "components/typography"
import { Wrapper } from "components/layout"

function Portfolio() {
    return (
        <React.Fragment>
            <Wrapper size="md" className="px-4">
                <PageTransition>
                    <div className="flex flex-col gap-14 pb-5">
                        <Hero title={{
                            text: `
                        Yaptığım ve yapıyor olduğum işleri kısaca açıklamaları ile beraber burada görüntüleyebilirsiniz
                        `,
                            weight: "base"
                        }}>
                            <Social color="blue" top="5" size="sm" link="https://www.linkedin.com/in/enesbayrktar/">
                                Tüm iş geçmişimi görmek için buraya tıklayarak LinkedIn sayfamı ziyaret edebilirsiniz ⟶
                            </Social>
                        </Hero>
                    </div>
                </PageTransition>
            </Wrapper>
            <Wrapper size="lg">
                test
            </Wrapper>
        </React.Fragment>
    )
}

export default Portfolio