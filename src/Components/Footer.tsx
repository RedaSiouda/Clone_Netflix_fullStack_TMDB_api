import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
            <h4 className="footer__title">Des questions? Téléphonez au <a href='/'>1-844-640-3067</a></h4>
            <div className="footer__content">
                <div className="footer__cells">
                    <p className="footer__option">FAQ</p>
                    <p className="footer__option">Confidentialité</p>
                </div>
                <div className="footer__cells">
                    <p className="footer__option">Centre d'aide</p>
                    <p className="footer__option">Paramètres des témoins</p>
                </div>
                <div className="footer__cells">
                    <p className="footer__option">Netflix Shop</p>
                    <p className="footer__option">Informations sur la société</p>
                </div>
                <div className="footer__cells">
                    <p className="footer__option">Conditions d'utilisation</p>
                    <p className="footer__option">Choix liés à la publicité</p>
                </div>
            </div>
        </footer>
  )
}

export default Footer
