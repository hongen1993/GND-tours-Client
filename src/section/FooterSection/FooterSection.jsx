import "./FooterSection.scss"

import Logo from "../../assets/logos/gnd-logo-white.png"
import FooterItem from "../../components/FooterItem/FooterItem"

const FooterSection = () => {

    const listLink1 = '#section-header'
    const listLink2 = '#section-features'
    const listLink3 = '#section-tours'
    const listLink4 = '#section-stories'
    const listLink5 = '#section-stories'
    const listLink6 = '#section-stories'

    const listText1 = 'Home'
    const listText2 = 'About us'
    const listText3 = 'Tours'
    const listText4 = 'Stories'
    const listText5 = 'Privacy policy'
    const listText6 = 'Terms'

    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <picture className="footer_logo">
                    {/* <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                        media="(max-width:37.5em)" /> */}
                    <img src={Logo} alt="Full logo"
                    // srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" 
                    />
                </picture>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <FooterItem listLink={listLink1} listText={listText1} />
                            <FooterItem listLink={listLink2} listText={listText2} />
                            <FooterItem listLink={listLink3} listText={listText3} />
                            <FooterItem listLink={listLink4} listText={listText4} />
                            <li className="footer__item"><a href={listLink5} className="footer__link">{listText5}</a></li>
                            <li className="footer__item"><a href={listLink6} className="footer__link">{listText6}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Website built by <a href="https://www.linkedin.com/in/hongen-shyu-barcel/" className="footer__link" target="_blank" rel="noopener noreferrer">Hong-en </a> feel free to contact me at your convenience for any further information
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default FooterSection