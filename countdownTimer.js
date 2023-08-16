function countDown(time) {
    // Create an interval timer that executes the callback function every 1000ms (1 second).
    const intervalTimer = setInterval(() => {
      // Check if the input time is greater than 3599 (1 hour).
      if (time > 3599) {
        console.log("Please Enter At Least 3599"); // Display an error message.
        clearInterval(intervalTimer); 
        return; 
      }
      // Calculate minutes and seconds from the 'time' value.
      const min = String(Math.trunc(time / 60)).padStart(2, "0");
      const sec = String(Math.trunc(time % 60)).padStart(2, "0");
  
      // Display the current countdown time in 'MM:SS' format.
      console.log(`${min}:${sec}`);
  
      time--;
      // Check if the countdown has reached zero.
      if (time < 0) {
        clearInterval(intervalTimer); // Clear the interval to stop the countdown.
        console.log("The Counter is Stop");
      }
    }, 1000); // Set the interval duration to 1000ms (1 second).
  }
  
  // Call the 'countDown' function with an example time value of 2588 seconds (about 43 minutes and 8 seconds).
  countDown(2588);
  