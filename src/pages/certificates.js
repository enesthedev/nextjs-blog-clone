import { PageTransition } from "components/transition"
import { Social, Hero, Divider } from "components/typography"
import { Wrapper } from "components/layout"

function Certificates() {
    return (
        <Wrapper size="md" className="px-4">
            <PageTransition>
                <div className="flex flex-col gap-14 pb-5">
                    <Hero title={{
                        text: `
                        Kendime bir motivasyon kaynağı olan sertifikalarımı bu sayfadan görüntüleyebilirsiniz.
                        `,
                        weight: "base"
                    }}>
                        <Social color="indigo" top="5" size="sm" link="https://www.linkedin.com/in/enesbayrktar/">
                            Tüm sertifikalarımı görmek için buraya tıklayarak LinkedIn sayfamı ziyaret edebilirsiniz ⟶
                        </Social>
                    </Hero>
                    <Hero title={{
                        text: "Web Programlama üzerine",
                        weight: "base",
                        size: "xl"
                    }}>
                    <div className="grid gap-3 md:gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}>
                        <div>
                            <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/101" rel="noreferrer">
                                Web Programlama 101
                            </a>
                        </div>
                        <div>
                            <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/201" rel="noreferrer">
                                Web Programlama 201
                            </a>
                        </div>
                        <div>
                            <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/301" rel="noreferrer">
                                Web Programlama 301
                            </a>
                        </div>
                        <div>
                            <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/302" rel="noreferrer">
                                Web Programlama 302
                            </a>
                        </div>
                        <div>
                            <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/401" rel="noreferrer">
                                Web Programlama 401
                            </a>
                        </div>
                        <div>
                            <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/402" rel="noreferrer">
                                Web Programlama 402
                            </a>
                        </div>
                    </div>
                    </Hero>
                </div>
            </PageTransition>
        </Wrapper>
    )
}

export default Certificates