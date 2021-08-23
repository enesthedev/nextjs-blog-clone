import React from "react"

import { PageTransition } from "components/transition"
import { Social, Hero } from "components/typography"
import { Wrapper } from "components/layout"
import { NextSeo } from "next-seo"

function Certificates(props) {
    const { page, social } = props
    return (
        <React.Fragment>
            <NextSeo
                title={page.head.title}
                description={page.head.description}
            />
            <Wrapper size="md" className="px-4 pt-7 pb-2">
                <PageTransition>
                    <div className="flex flex-col gap-14 pb-5">
                        <Hero title={page.title} titleClassName="font-normal">
                            <Social className="mt-5 text-sm" link={`https://www.linkedin.com/in/${social.linkedin.username}/`}>
                                { social.linkedin.text }
                            </Social>
                        </Hero>

                        {page.sections.map((section, index) => {
                            return (
                                <Hero key={index} title={section.title} titleClassName="font-normal text-xl">
                                    <div className="grid gap-3 md:gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}>
                                        {section.certificates.map((certificate, index) => {
                                          return (
                                              <div key={index}>
                                                  <a className="text-sm inline-flex overflow-hidden hover:underline" target="_blank" href={certificate.link} rel="noreferrer">
                                                      { certificate.title }
                                                  </a>
                                              </div>
                                          )
                                        })}
                                    </div>
                                </Hero>
                            )
                        })}
                    </div>
                </PageTransition>
            </Wrapper>
        </React.Fragment>
    )
}

export async function getStaticProps() {
    return {
        props: {
            page: {
                title: "Kendime bir motivasyon kaynağı olan sertifikalarımı bu sayfadan görüntüleyebilirsiniz.",
                head: {
                    title: "Sertifikalar",
                    description: "Enes Bayraktar'ın kişisel bloğunda yayınlamış olduğu tüm sertifikalar bu sayfada gösterilir."
                },
                sections: [
                    {
                        title: "Web Programlama Üzerine",
                        certificates: [
                            {
                                title: "Web Programlama 101",
                                link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/101"
                            },
                            {
                                title: "Web Programlama 201",
                                link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/201"
                            },
                            {
                                title: "Web Programlama 301",
                                link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/301"
                            },
                            {
                                title: "Web Programlama 302",
                                link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/302"
                            },
                            {
                                title: "Web Programlama 401",
                                link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/401"
                            },
                            {
                                title: "Web Programlama 402",
                                link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/enesbayraktar/Web%20Programlama/402"
                            },
                        ]
                    },
                    {
                        title: "Tasarım Teknolojileri üzerine",
                        certificates: [
                            {
                                title: "Web Sitesi Kullanılabilirliği",
                                link: "/static/documents/certificates/ux101.pdf"
                            }
                        ]
                    }
                ]
            },
            social: {
                linkedin: {
                    username: "enesbayrktar",
                    text: "Tüm sertifikalarımı görmek için buraya tıklayarak LinkedIn sayfamı ziyaret edebilirsiniz ⟶"
                }
            }
        },
    }
}

export default Certificates