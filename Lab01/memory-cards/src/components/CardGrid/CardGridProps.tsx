export interface CardGridProps {
    cards: { id: number; number: number; isOpen: boolean; }[];
    onCardClick: (id: number) => void;
}
