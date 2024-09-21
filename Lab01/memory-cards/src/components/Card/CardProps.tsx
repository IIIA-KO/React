export interface CardProps {
    id: number;
    number: number;
    isOpen: boolean;
    onClick: (id: number) => void;
}
