import { PageTransition } from "components/transition"
import { Social, Hero, Divider } from "components/typography"
import { Wrapper } from "components/layout"

function Certificates() {
    return (
        <Wrapper size="md" className="px-4">
            <PageTransition>
                <div className="flex flex-col gap-10 pb-5">
                    <Hero title={{
                        text: `
                        Kendime bir motivasyon kaynağı olan sertifikalarımı bu sayfadan görüntüleyebilirsiniz.
                        `,
                        weight: "base"
                    }} />
                    <Divider color="green-400"  opacity="20"/>
                    <Hero title={{
                        text: "Turkcell eğitim programından kazandığım sertifikalar, NodeJS, HTML5 ve CSS3 teknolojileri üzerine",
                        weight: "base",
                        size: "lg",
                        color: "base"
                    }} className="mt-2 pb-5">
                        <div className="grid grid-cols-1 gap-1 md:gap-5 md:grid-cols-2">
                            <Social color="" top="0" size="sm" link="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/101">
                                Web Programlama 101 <small className="block">(Görüntülemek için tıklayın)</small>
                            </Social>
                            <Social color="" top="0" size="sm" link="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/201">
                                Web Programlama 201 <small className="block">(Görüntülemek için tıklayın)</small>
                            </Social>
                            <Social color="" top="0" size="sm" link="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/301">
                                Web Programlama 301 <small className="block">(Görüntülemek için tıklayın)</small>
                            </Social>
                            <Social color="" top="0" size="sm" link="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/302">
                                Web Programlama 302 <small className="block">(Görüntülemek için tıklayın)</small>
                            </Social>
                            <Social color="" top="0" size="sm" link="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/401">
                                Web Programlama 401 <small className="block">(Görüntülemek için tıklayın)</small>
                            </Social>
                            <Social color="" top="0" size="sm" link="https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/402">
                                Web Programlama 402 <small className="block">(Görüntülemek için tıklayın)</small>
                            </Social>
                        </div>
                    </Hero>
                    <Social color="green" top="4" size="sm" link="https://www.linkedin.com/in/enesbayrktar/">Tüm sertifikalarımı görmek için buraya tıklayarak LinkedIn sayfamı ziyaret edebilirsiniz ⟶</Social>
                </div>
            </PageTransition>
        </Wrapper>
    )
}

export default Certificates