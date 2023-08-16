# JavaScript Countdown Timer

A JavaScript utility function for displaying a countdown timer in `MM:SS` format. This utility handles input validation and provides an easy way to visualize a countdown.

## Usage

1. Include the `countdown.js` file in your project.

2. Call the `countDown` function with a time value in seconds to start the countdown.

    ```javascript
    // Example: Start a countdown for 2588 seconds (about 43 minutes and 8 seconds).
    countDown(2588);
    ```

3. The countdown will display the remaining time in `MM:SS` format, updating every second. When the countdown reaches zero, it will stop, and a message indicating the end of the countdown will be displayed.

## Example

```javascript
const timeInSeconds = 2588; // About 43 minutes and 8 seconds.
countDown(timeInSeconds);
