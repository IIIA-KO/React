export interface CardGridProps {
    cards: { id: number; isOpen: boolean; }[];
    onCardClick: (id: number) => void;
}
