import { Helmet } from "react-helmet";

export default function Profile() {
    return (
        <section className="section">
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <h1 className="section-title">Profile</h1>
            <p className="section-description">
                Halo nama saya Hendry, saya seorang Website Developer, saya lulusan tahun 2022 di Universitas Dian Nuswantoro Semarang
            </p>
        </section>
    );
}