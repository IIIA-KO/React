import { useExternalRedirectContext } from "../../contexts/ExternalRedirectContext";
import ExternalLink from "../ExternalLink/ExternalLink";
import ExternalRedirectPopup from "../ExternalRedirectPopup/ExternalRedirectPopup";

const About = () => {
    const { isPopupOpen, externalUrl, handlePopupConfirm, handlePopupCancel } = useExternalRedirectContext();

    return (
        <div>
            <h1>About Us</h1>
            <p>This is the About page.</p>

            <ExternalLink href="https://github.com/">
                Go to GitHub
            </ExternalLink>

            <ExternalRedirectPopup
                isOpen={isPopupOpen}
                onConfirm={handlePopupConfirm}
                onCancel={handlePopupCancel}
                externalUrl={externalUrl}
            />
        </div>
    )
}

export default About;