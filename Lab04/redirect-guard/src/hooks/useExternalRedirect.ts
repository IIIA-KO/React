import { useState } from "react";

export const useExternalRedirect = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [externalUrl, setExternalUrl] = useState<string>('');

    const handleExternalLink = (url: string) => {
        console.log('External link clicked:', url);
        setExternalUrl(url);
        setIsPopupOpen(true);
        console.log('Popup should open:', isPopupOpen);
    }

    const handlePopupConfirm = () => {
        window.open(externalUrl, '_blank');
        setIsPopupOpen(false);
    }

    const handlePopupCancel = () => {
        setIsPopupOpen(false);
        setExternalUrl('');
    }

    return {
        isPopupOpen,
        externalUrl,
        handleExternalLink,
        handlePopupConfirm,
        handlePopupCancel
    };
}