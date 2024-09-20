import { useState } from "react";
import CardGrid from "./CardGrid/CardGrid";

const MemoryGame: React.FC = () => {
    const [cards, setCards] = useState([
        { id: 1, isOpen: false },
        { id: 2, isOpen: false },
        { id: 3, isOpen: false },
        { id: 4, isOpen: false },
    ]);

    const handleCardClick = (id: number) => {
        setCards(prevCards =>
            prevCards.map(card =>
                card.id === id ? { ...card, isOpen: !card.isOpen } : card
            )
        );
    };

    return <CardGrid cards={cards} onCardClick={handleCardClick} />;
};

export default MemoryGame;