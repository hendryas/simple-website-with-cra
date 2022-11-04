import { useEffect } from "react";

export default function Contact() {
    useEffect(function () {
        document.title = 'Contact';
    }, [])
    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className='section-description'>
                Kamu bisa menghubungiku disini:
            </p>
            <ul>
                <li>WA : 085325026752</li>
                <li>Email: hendryas321@gmail.com</li>
            </ul>
            <p className='section-description'>
                Atau kamu bisa melihat pansos di sosmedku :
            </p>
            <ul>
                <li><a href="https:www.facebook.com">Facebook</a> </li>
                <li><a href="https:www.instagram.com">instagram</a> </li>
            </ul>
        </section>
    );
}