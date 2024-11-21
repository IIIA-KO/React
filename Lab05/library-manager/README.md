# Library Manager

## Overview

The **Library Manager** project is a single-page application (SPA) developed using React and TypeScript. The application demonstrates state management using **RTK Query**. The project allows users to manage a collection of books, including adding, updating, deleting, and filtering books.

## Task Description

1. **Create a SPA**: Develop a small SPA that utilizes state management or context API.
2. **Complexity**: Implement at least 3 operations.
3. **Bonus**: Use state management libraries like Effector, RTK Query, XState, Jotai, or Recoil for additional points.

### My Choice: RTK Query

RTK Query was chosen as the state management library for this project. It provides a simple and efficient way to manage server-side state and handle API requests.

## Features

- **Book Management**: Add, update, and delete books from the collection.
- **Filtering**: Filter books based on title or author.
- **State Management**: Utilize RTK Query for managing the application's state and API interactions.

## Best Practices in React Programming

1. **State Management**:
   - **RTK Query**: Efficiently handles server-side state and API interactions, reducing boilerplate code.
   - **Context API**: Used for managing global state, such as theme settings, without the need for additional libraries.

2. **Lazy Loading Components**:
   - **React.lazy and Suspense**: Used `React.lazy` for lazy loading components, enhancing performance by loading components only when needed.

3. **Performance Optimization**:
   - **Memoization**: Use of `React.memo` and hooks like `useMemo` and `useCallback` to prevent unnecessary re-renders and optimize performance.
   -  **Debouncing**: Implementation of `useDebounce` to limit the rate of function execution, particularly useful for handling frequent events like input changes.

## Implementation Details

- **RTK Query**: Used for managing API requests and caching the state of books.
- **React Components**: Modular components for book cards, statistics, and filters.

## How It Was Done

1. **State Management with RTK Query**:
   - RTK Query was used to define API endpoints for fetching, adding, updating, and deleting books.
   - The `useGetBooksQuery`, `useAddBookMutation`, `useUpdateBookMutation`, and `useDeleteBookMutation` hooks were utilized to interact with the API.

2. **API Integration**:
   - The API endpoints were defined using `createApi` and `fetchBaseQuery` in the `api.ts` file.
   - The application interacts with a mock server using `json-server`.

3. **Component Structure**:
   - The application was structured into reusable components such as `BookCard`, `Statistics`, and `BookFilter`.
   - Each component was designed to handle specific functionality, promoting modularity and reusability.

## How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Mock Server**:
   ```bash
   (npx) json-server --watch db.json --port 3001
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.