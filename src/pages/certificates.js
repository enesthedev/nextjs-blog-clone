import {PageTransition, Wrapper, Hero, Social} from "components";

function Certificates() {
    return (
        <Wrapper size="md" className="px-4 mt-4">
            <PageTransition>
                <Social color="blue" link="https://www.linkedin.com/in/enesbayrktar/">
                    Benimle alakalı tüm sertifikaları görmek istiyorsanız bu kutucuğu tıklatabilirsiniz.
                </Social>
            </PageTransition>
        </Wrapper>
    )
}

export default Certificates