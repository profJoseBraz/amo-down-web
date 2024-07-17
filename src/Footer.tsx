import "./Footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-title">
                    <h1>Entre em Contato</h1>
                </div>
                <div className="footer-text">
                    <a href="https://www.google.com/maps/place/R.+Francisco+Ferreira+Albuquerque,+2153+-+Jardim+P+Campo,+Campo+Mour%C3%A3o+-+PR,+87302-220/@-24.0387391,-52.38689,17z/data=!3m1!4b1!4m6!3m5!1s0x94ed75178e99587b:0xf03d45826bf549ed!8m2!3d-24.0387391!4d-52.3843151!16s%2Fg%2F11f043fbg2?entry=ttu"><h3><i className="fa fa-map-marker" aria-hidden="true"></i> Rua Francisco Albuquerque, 2153, Campo Mourão,<br></br> Paraná, 87302-220</h3></a>
                    <a href="mailto:amodowncm@gmail.com"><h3><i className="fa fa-envelope" aria-hidden="true"></i> amodowncm@gmail.com</h3></a>
                    <h3><i className="fa fa-phone" aria-hidden="true"></i> (44) 99835-0008</h3>
                    <a href="https://www.instagram.com/amodown?utm_source=qr&igsh=MTN2ZGx0NG8yZm8zdg=="><h3><i className="fa fa-instagram" aria-hidden="true"></i> @amodown</h3></a>
                </div>
            </footer>
        </>
    );
};

export default Footer;