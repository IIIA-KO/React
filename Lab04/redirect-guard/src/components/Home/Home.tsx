import { useExternalRedirectContext } from "../../contexts/ExternalRedirectContext";
import ExternalLink from "../ExternalLink/ExternalLink";
import ExternalRedirectPopup from "../ExternalRedirectPopup/ExternalRedirectPopup";

const Home = () => {
    const { isPopupOpen, externalUrl, handlePopupConfirm, handlePopupCancel } = useExternalRedirectContext();

    return (
        <div className="container">
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
            
            <ExternalLink href="https://www.google.com">
                Go to Google
            </ExternalLink>

            <ExternalRedirectPopup
                isOpen={isPopupOpen}
                onConfirm={handlePopupConfirm}
                onCancel={handlePopupCancel}
                externalUrl={externalUrl}
            />
        </div>
    );
}


export default Home;