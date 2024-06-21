import logo from "../../images/LOGO_Footer.png"

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo de l'agence Kasa" />
      <p className="footer__text">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  )
}

export default Footer