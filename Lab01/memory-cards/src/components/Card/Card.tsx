import { CardProps } from "./CardProps";
import './Card.css';

const Card = ({ id, isOpen, onClick }: CardProps) => {
    return (
        <div
            className={`card ${isOpen ? 'open' : ''}`}
            onClick={() => onClick(id)}
        >
            <div className={`card-inner ${isOpen ? 'flipped' : ''}`}>
                <div className="card-front">?</div>
                <div className="card-back">{id}</div>
            </div>
        </div>
    );
}

export default Card;