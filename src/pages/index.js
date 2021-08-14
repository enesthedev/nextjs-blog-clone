import { PageTransition } from "components/transition"
import { Hero, Social, BoldLink, Divider } from "components/typography"
import { Wrapper } from "components/layout"

function Index() {
    return (
        <Wrapper size="md" className="px-4">
            <PageTransition>
                <Hero title={{
                    text: `
                        Ben Enes Bayraktar.
                        İstanbulda Üniversite okuyan bir Yazılımcıyım.
                    `
                }} className="pb-7">
                    <p>Javascript, front-end teknolojileri, web servisleri, bilgisayar oyunları ve araştırma gibi konularla yakından ilgileniyorum.</p>
                    <p>Yaptığım yazılımlar ile alakalı kaynak kodları açık bir şekilde <BoldLink className="underline" to="https://github.com/enesbayrktar/" content="Github" /> adresimde paylaşıyorum.</p>
                    <p>İnsanların başarılı olabilmek için sadece yeteneğe değil çok çalışmaya ihtiyaçları olduğuna inanıyorum.</p>
                </Hero>
                <Divider color="white" opacity="20"/>
                <Hero title={{
                    text: "Hakkımda daha fazlası",
                    size: "lg"
                }} gap={"5"} className="mt-9 pb-5">
                    <p className="text-sm whitespace-pre-line">
                        Yazılım dillerine olan ilgim 14 yaşımdayken başladı. O zamanlar sınıfta dışlanan çocuk olmamın da etkisi var tabii ki.
                        Abimin yeni aldığı Asus marka bilgisayar üzerinde <BoldLink className="underline" to="https://mtasa.com/" content="GTA: San Andreas Online" /> oynuyordum her akşam. Bahsettiğim oyun öyle bir sistem ki istediğiniz oyun modunda
                        bir şeyler karalayabiliyor, kendinize eğlence çıkarabiliyorsunuz... Herneyse, günlerden bir gün ben de tutuldum bir sunucu açacağım diye.
                    </p>
                    <p className="text-sm whitespace-pre-line">
                        Araştırmalara başladım tabii içimde bir heyecan. İndirdim hazır bir sunucu ve açtım oyunu. İlk defa kendi sunucumu oluşturmuştum ki sol üstte
                        'Blah blah Gaming' yazmaktaydı. Garip olucak ama onu değiştirmek için dosyalarda aranırken buldum kendimi. Böylece ilk Merhaba Dünyamı demiş oldum bu sektöre
                    </p>
                    <Social color="yellow" size="sm" top="0">
                        İşte o gün bugündür kodlarla iç içe bir hayat sürüyorum. Bundan oldukça memnunum ve yaptığım işe aşığım. Bence en önemlisi de bu nokta..
                    </Social>
                </Hero>
            </PageTransition>
        </Wrapper>
    )
}

export default Index