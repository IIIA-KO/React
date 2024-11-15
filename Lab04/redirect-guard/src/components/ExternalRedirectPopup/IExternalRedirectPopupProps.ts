export interface IExternalRedirectPopupProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    externalUrl: string;
}