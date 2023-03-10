import "./ToursSection.scss"

import Heading from "../../components/Heading/Heading"
import Card from "../../components/Card/Card"
import Button from "../../components/Button/Button"

const Tours = () => {

    const sectionTitle = 'Choose your tour'

    const titleA = 'Patronage of Alhambra'
    const titleB = 'Sierra de Castril'
    const titleC = 'Sierra Nevada'

    const colSize = 'col-1-of-3'

    const listA =
        <ul>
            <li>1 day tour</li>
            <li>Up to 10 people</li>
            <li>Alhambra, Generalife and Alcazaba </li>
            <li>Hotel Al'Andalus 5 Stars</li>
        </ul>
    const listB =
        <ul>
            <li>3 day tour</li>
            <li>Up to 8 people</li>
            <li>Osa, Buitre and Magdalena routes</li>
            <li>Rutal Hotel Cazorla 5 Stars</li>
        </ul>
    const listC =
        <ul>
            <li>5 day tour</li>
            <li>Up to 5 people</li>
            <li>Ski, snowboard, russian sleigh and much more!</li>
            <li>Vicer'di Roi Resort 5 Stars</li>
        </ul>

    const priceA = '199'
    const priceB = '429'
    const priceC = '1200'

    const card1 = 1
    const card2 = 2
    const card3 = 3

    const buttonLink = '#section-book'

    return (
        <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <Heading HeadingNum={'h2'} headingClass={'secondary'} children={sectionTitle} />
            </div>
            <div className="row">
                <div className={colSize}>
                    <Card cardNumber={card1} title={titleA} list={listA} price={priceA} />
                </div>
                <div className={colSize}>
                    <Card cardNumber={card2} title={titleB} list={listB} price={priceB} />
                </div>
                <div className={colSize}>
                    <Card cardNumber={card3} title={titleC} list={listC} price={priceC} />
                </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
                <Button link={buttonLink} color={'blue'}>Contact us!</Button>
            </div>
        </section>
    )
}

export default Tours