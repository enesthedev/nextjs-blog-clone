# Open Source Blog Project

The blog website built with [TailwindCSS](https://tailwindcss.com/) and [React (NextJS)](https://nextjs.org/) inspired by [@ademilter](https://github.com/ademilter). You can edit the page strings from `getStaticProps` function from the [page].js files.

### Example codeblock for editing
Here's certificates page JSON based data.
```js
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
                            //...
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
```