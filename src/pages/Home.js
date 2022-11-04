import { useEffect } from "react";

const Home = () => {
    useEffect(function () {
        document.title = 'Home';
    }, [])
    return (
        <section className="section">
            <h1 className="section-title">Selamat data di website ku!</h1>
            <p className="section-description">
                Halo salam kenal semua, ini website baru ku... Kamu bisa mendapatkan informasi seputar profileku disini.
            </p>
        </section>
    );
}

export default Home;