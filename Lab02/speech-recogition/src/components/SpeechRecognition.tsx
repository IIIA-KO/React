import useSpeechRecognition from '../hooks/useSpeechRecognition';

const SpeechRecognition: React.FC = () => {
    const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();

    return (
        <div>
            <h1>Speech Recognition</h1>
            <button onClick={isListening ? stopListening : startListening}>
                {isListening ? 'Stop Listening' : 'Start Listening'}
            </button>
            <p>{isListening ? 'Listening...' : 'Click to start listening'}</p>
            <h3>Transcript:</h3>
            <p>{transcript}</p>
        </div>
    );
};

export default SpeechRecognition;