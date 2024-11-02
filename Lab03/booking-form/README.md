# Booking Form with Validation

This project implements a dynamic booking form inspired by [Booking.com's flight search form](https://www.booking.com/flights/index.uk.html). The form allows users to input various parameters for their trip, including destination, dates, number of travelers, and other preferences, using validation to ensure all required fields are correctly filled out.

## Features

- **Destination Selection**: Users can select a destination city from a predefined list.
- **Date Selection**: Users can choose between:
    - **Calendar-based range**: A range of check-in and check-out dates, with options for flexibility (+1, +2, +3, or +7 days).
    - **Flexible Dates**: Selects travel duration (e.g., weekend, week, month) and limits travel month options to three months forward.
- **Guest and Room Counters**: Separate counters for adults, children, and rooms, with a minimum of one adult and one room.
- **Pets Option**: Users can specify whether they’ll be bringing pets.

## Validation

Validation is managed using [react-hook-form](https://react-hook-form.com/) and [yup](https://github.com/jquense/yup) to ensure all fields comply with the required formats and constraints:

- **Destination**: Required, must select from the list.
- **Date Range**:
    - **Calendar Dates**: Requires both a start and end date.
    - **Flexible Dates**: Requires travel duration and a maximum of three selected months.
- **Guests and Rooms**:
    - Minimum of 1 adult.
    - Minimum of 1 room.
    - Children count cannot be negative.
- **Pets**: Optional.

The form displays validation messages to guide users in filling out fields accurately.

## Libraries Used

- **react-hook-form**: Manages form state and submissions.
- **yup**: Schema-based form validation.
- **react-date-range**: Date picker for selecting check-in/check-out dates.
- **date-fns**: Date manipulation for dynamic month generation in the flexible date option.

## Form Structure and Components

The form components are designed to modularly handle different parts of the booking form:

1. **GuestCounter**: Increases/decreases the number of adults, children, or rooms, with validation to enforce minimum values.
2. **FlexibleDates**: Allows the user to select a flexible travel duration and up to three months for travel.
3. **DestinationSelect**: Dropdown to select a destination city.
4. **DateTypeSelector**: Toggle between "Calendar" and "Flexible" date selection options.
5. **CalendarDates**: Date range selection using a calendar picker.

## Usage

After filling out the form, submit to see the data structure printed to the console, helping to visualize the state and data flow for further integrations.