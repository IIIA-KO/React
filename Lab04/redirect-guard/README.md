# Redirect Guard Project

## Overview

The **Redirect Guard** project is a React application that provides a mechanism to confirm user intent before redirecting to external links. This is achieved by displaying a popup that asks the user to confirm their action.

## Task Description

1. Implement a custom hook `useExternalRedirect` to manage the state of the popup and handle external link clicks.
2. Create a context `ExternalRedirectContext` to provide the state and functions from the hook to the components that need them.
3. Develop a component `ExternalRedirectPopup` that displays a confirmation dialog when a user clicks on an external link.
4. Ensure that the popup is styled appropriately and is responsive.
5. Integrate the popup functionality into existing components (`Home` and `About`) using the `ExternalLink` component.

## Features

- **External Link Handling**: Intercepts clicks on external links and displays a confirmation popup.
- **Popup Confirmation**: Users can choose to proceed to the external link or cancel the action.
- **Context API**: Utilizes React's Context API to manage and provide state across components.
- **Responsive Design**: The popup is styled to be responsive and user-friendly.

## Implementation Details

- **Custom Hook**: `useExternalRedirect` manages the popup state and provides functions to handle link clicks and popup actions.
- **Context Provider**: `ExternalRedirectProvider` wraps the application to provide the redirect context.
- **Popup Component**: `ExternalRedirectPopup` is responsible for rendering the confirmation dialog.
- **Link Component**: `ExternalLink` uses the custom hook to handle clicks and prevent default link behavior.