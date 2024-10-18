declare global {
    interface Window {
        SpeechRecognition: any | undefined;
        webkitSpeechRecognition: any | undefined;
    }
}