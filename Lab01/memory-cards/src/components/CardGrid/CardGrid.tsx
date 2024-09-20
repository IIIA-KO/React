import Card from "../Card/Card";
import { CardGridProps } from "./CardGridProps";
import './CardGrid.css';

export const CardGrid = ({ cards, onCardClick }: CardGridProps) => {
    return (
        <div className="card-grid">
            {cards.map(card => (
                <Card key={card.id} id={card.id} isOpen={card.isOpen} onClick={onCardClick} />
            ))}
        </div>
    );
}

export default CardGrid;