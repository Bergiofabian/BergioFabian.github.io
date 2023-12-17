
function getCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return time;
}

function getGreeting() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    if (hours >= 4 && hours < 12) {
        return 'Selamat Pagi';
    } else if (hours >= 12 && hours < 18) {
        return 'Selamat Siang';
    } else if (hours >= 18 && hours < 22) {
        return 'Selamat Sore';
    } else {
        return 'Selamat Malam';
    }
}

function updateDisplay() {
    const timeElement = document.getElementById('time');
    const greetingElement = document.getElementById('greeting');
    timeElement.textContent = getCurrentTime();
    greetingElement.textContent = getGreeting();
}

updateDisplay();
setInterval(updateDisplay, 1000);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
});