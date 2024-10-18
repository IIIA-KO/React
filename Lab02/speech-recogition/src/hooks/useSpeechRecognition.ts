import { useState, useEffect } from 'react';
import { ISpeechRecognitionEvent } from '../types/ISpeechRecognitionEvent';

const useSpeechRecognition = () => {
    const [transcript, setTranscript] = useState<string>('');
    const [isListening, setIsListening] = useState<boolean>(false);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        console.error('Speech recognition is not supported in this browser.');
        return {
            transcript: '',
            isListening: false,
            startListening: () => { },
            stopListening: () => { },
        }
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    const startListening = () => {
        recognition.start();
        setIsListening(true);
    };

    const stopListening = () => {
        recognition.stop();
        setIsListening(false);
    };

    useEffect(() => {
        recognition.onresult = (event: ISpeechRecognitionEvent) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                interimTranscript += result[0].transcript;
            }
            setTranscript(interimTranscript);
        };

        recognition.onerror = (event: Event) => {
            console.error('Speech recognition error:', event);
        };

        return () => {
            recognition.stop();
        };
    }, []);

    return { transcript, isListening, startListening, stopListening };
};

export default useSpeechRecognition;
