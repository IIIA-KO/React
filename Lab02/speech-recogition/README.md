# Speech Recognition Custom Hook in React

This project demonstrates how to create a custom React hook that leverages the browser's Speech Recognition API (using `window.SpeechRecognition` or `window.webkitSpeechRecognition`) to convert speech to text. The hook allows a component to start and stop speech recognition and retrieve the transcript of spoken words.

## Task Overview

The main objectives of the task are:

- **Create a custom hook** (`useSpeechRecognition`) that:
  - Uses the browser's Speech Recognition API to listen to the user's speech.
  - Converts the speech into a transcript (text).
  - Allows starting and stopping the speech recognition process.
- **Implement the hook in a React component** to display the recognized text in real-time.