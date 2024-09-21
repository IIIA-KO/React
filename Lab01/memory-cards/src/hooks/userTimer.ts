import { useEffect, useState } from "react";

const useTimer = (initialTime: number, onTimeEnd: () => void) => {
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    const newTime = prev - 1;
                    if (newTime <= 0) {
                        clearInterval(timer);
                        onTimeEnd();
                        return 0;
                    }
                    return newTime;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [timeLeft, onTimeEnd]);

    const resetTimer = () => {
        setTimeLeft(initialTime);
    };

    return { timeLeft, resetTimer };
};

export default useTimer;
