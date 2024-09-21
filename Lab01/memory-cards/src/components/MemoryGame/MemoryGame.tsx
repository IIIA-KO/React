import { useCallback, useEffect, useState } from "react";
import CardGrid from "../CardGrid/CardGrid";
import { ICard } from "./ICard";
import useTimer from "../../hooks/userTimer"

const MemoryGame = () => {
    const [cards, setCards] = useState<ICard[]>([]);
    const [firstCard, setFirstCard] = useState<number | null>(null);
    const [secondCard, setSecondCard] = useState<number | null>(null);
    const [matches, setMatches] = useState<number>(0);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const onTimeEnd = () => {
        setIsGameOver(true);
    };

    const { timeLeft, resetTimer } = useTimer(60, onTimeEnd);

    const createCards = () => {
        const numbers = Array.from({ length: 5 }, (_, i) => i + 1);
        const cardNumbers = [...numbers, ...numbers];
        const shuffled = cardNumbers.sort(() => 0.5 - Math.random());

        const newCards: ICard[] = shuffled.map((number, index) => ({
            id: index,
            number,
            isOpen: false,
        }));

        setCards(newCards);
    };

    const flipCard = (id: number) => {
        if (isGameOver || cards[id].isOpen || firstCard === id || secondCard === id) return;

        const updatedCards = cards.map((card) =>
            card.id === id ? { ...card, isOpen: !card.isOpen } : card
        );
        setCards(updatedCards);

        if (firstCard === null) {
            setFirstCard(id);
        } else {
            setSecondCard(id);
        }
    };

    const checkMatch = useCallback(() => {
        if (firstCard !== null && secondCard !== null) {
            if (cards[firstCard].number === cards[secondCard].number) {
                setMatches((prev) => prev + 1);
                setFirstCard(null);
                setSecondCard(null);
            } else {
                setTimeout(() => {
                    const resetCards = cards.map((card) =>
                        card.id === firstCard || card.id === secondCard ? { ...card, isOpen: false } : card
                    );
                    setCards(resetCards);
                    setFirstCard(null);
                    setSecondCard(null);
                }, 1000);
            }
        }
    }, [cards, firstCard, secondCard]);

    const resetGame = () => {
        setIsGameOver(false);
        setMatches(0);
        setFirstCard(null);
        setSecondCard(null);
        createCards();
        resetTimer();
    };

    useEffect(() => {
        createCards();
    }, []);

    useEffect(() => {
        if (firstCard !== null && secondCard !== null) {
            checkMatch();
        }
    }, [firstCard, secondCard, checkMatch]);

    return (
        <div>
            <div>Time Left: {timeLeft} seconds</div>
            <div>Matches: {matches}</div>
            {isGameOver && <div>Game Over!</div>}
            <CardGrid cards={cards} onCardClick={flipCard} />
            <button onClick={resetGame}>Restart</button>
        </div>
    );
};

export default MemoryGame;