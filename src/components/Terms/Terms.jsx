import "./Terms.scss"
import Heading from "../Heading/Heading"

const Terms = () => {

    const heading1Text = 'Privacy Policy'
    const text1 =
        <>
            <p><b>Last updated: January 18, 2023</b></p>
            <p> This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <p> We use Your Personal data to provide and improve the Service.By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.'</p>
        </>

    const heading2Text = 'Interpretation'
    const text2 =
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

    const heading3Text = 'Definitions'
    const text3 =
        <>
            <p className='popup__text'>For the purposes of this Privacy Policy:</p>
            <ul className='u-paddingX'>
                <li><b>Account</b> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><b>Company</b> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to GND Tours.</li>
                <li><b>Cookies</b> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                <li><b>Country</b> refers to: Spain</li>
                <li><b>Device</b> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><b>Personal Data</b> is any information that relates to an identified or identifiable individual.</li>
                <li><b>Service</b> refers to the Website.</li>
                <li><b>Service Provider</b> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                <li><b>Usage Data</b> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                <li><b>Website</b> refers to GND Tours, accessible from https://gnd-tours-client.vercel.app/</li>
                <li><b>You</b> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
        </>

    const heading4Text = 'Contact Us'
    const text4 =
        <>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <p>By visiting this page on our website: https://gnd-tours-client.vercel.app/#section-book</p>
        </>

    return (
        <div class="popup" id="popup">
            <div class="popup__content">
                <a href="#section-tours" class="popup__close">&times;</a>

                <Heading HeadingNum={'h2'} headingClass={'tertiary'} children={heading1Text} />
                {text1}
                <Heading HeadingNum={'h3'} headingClass={'tertiary'} children={heading2Text} />
                {text2}
                <Heading HeadingNum={'h3'} headingClass={'tertiary'} children={heading3Text} />
                {text3}
                <Heading HeadingNum={'h3'} headingClass={'tertiary'} children={heading4Text} />
                {text4}
            </div>
        </div>
    )
}

export default Terms