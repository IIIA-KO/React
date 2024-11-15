import './ExternalRedirectPopup.css';
import { IExternalRedirectPopupProps } from "./IExternalRedirectPopupProps";

const ExternalRedirectPopup = ({
    isOpen,
    onConfirm,
    onCancel,
    externalUrl
}: IExternalRedirectPopupProps) => {
    if (!isOpen) {
        console.log('Popup is not open');
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Confirm redirect</h2>
                <p>You're about to be redirected to <a href={externalUrl}>{externalUrl}</a>.</p>
                <p>Are you sure you want to proceed?</p>

                <div className="popup-buttons">
                    <button onClick={onCancel} className="cancel-btn">
                        Stay
                    </button>
                    <button onClick={onConfirm} className="cancel-btn">
                        Leave
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ExternalRedirectPopup;