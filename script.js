// script.js

let lastHourLeft = '';
let lastHourRight = '';
let lastMinuteLeft = '';
let lastMinuteRight = '';
let lastSecondLeft = '';
let lastSecondRight = '';

function updateTime() {
    const now = new Date();

    const date = now.toLocaleDateString();
    const day = now.toLocaleDateString(undefined, { weekday: 'long' });
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    // Update date and day without animation
    document.getElementById('current-date').textContent = date;
    document.getElementById('current-day').textContent = day;

    // Split hour into left and right digits
    const hourLeft = hour.charAt(0);
    const hourRight = hour.charAt(1);

    // Animation for hour left
    if (hourLeft !== lastHourLeft) {
        fadeOutIn('current-hour-left', hourLeft);
        lastHourLeft = hourLeft;
    }

    // Animation for hour right
    if (hourRight !== lastHourRight) {
        fadeOutIn('current-hour-right', hourRight);
        lastHourRight = hourRight;
    }

    // Split minute into left and right digits
    const minuteLeft = minute.charAt(0);
    const minuteRight = minute.charAt(1);

    // Animation for minute left
    if (minuteLeft !== lastMinuteLeft) {
        fadeOutIn('current-minute-left', minuteLeft);
        lastMinuteLeft = minuteLeft;
    }

    // Animation for minute right
    if (minuteRight !== lastMinuteRight) {
        fadeOutIn('current-minute-right', minuteRight);
        lastMinuteRight = minuteRight;
    }

    // Split second into left and right digits
    const secondLeft = second.charAt(0);
    const secondRight = second.charAt(1);

    // Animation for second left
    if (secondLeft !== lastSecondLeft) {
        fadeOutIn('current-second-left', secondLeft);
        lastSecondLeft = secondLeft;
    }

    // Animation for second right
    if (secondRight !== lastSecondRight) {
        fadeOutIn('current-second-right', secondRight);
        lastSecondRight = secondRight;
    }
}

function fadeOutIn(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

    // Wait for fade-out transition to finish before changing the text
    setTimeout(() => {
        element.textContent = newValue;
        element.classList.remove('hidden'); // Fade back in
    }, 400); // Match the duration of the fade-out effect
}

// Initialize the clock
setInterval(updateTime, 1000);
updateTime();  // Initial call to display the time immediately