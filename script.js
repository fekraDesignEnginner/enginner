document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('services-container').style.display = 'block';
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password.';
    }
});

function showServiceDetails(serviceName, servicePrice) {
    document.getElementById('service-name').textContent = `Service: ${serviceName}`;
    document.getElementById('service-price').textContent = `Price: ${servicePrice}$`;
}
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('services-container').style.display = 'block';
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password.';
    }
});

function showServiceDetails(serviceName, servicePrice) {
    document.getElementById('service-name').textContent = `Service: ${serviceName}`;
    document.getElementById('service-price').textContent = `Price: ${servicePrice}$`;
}
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('services-container').style.display = 'block';
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password.';
    }
});

function showServiceDetails(serviceName, servicePrice) {
    // Update service details
    document.getElementById('service-name').textContent = `Service: ${serviceName}`;
    document.getElementById('service-price').textContent = `Price: ${servicePrice}$`;

    // Show notification
    const notificationBar = document.getElementById('notification-bar');
    notificationBar.textContent = `Selected: ${serviceName} - Price: ${servicePrice}$`;
    notificationBar.classList.add('show');

    // Remove the notification after 5 seconds
    setTimeout(() => {
        notificationBar.classList.remove('show');
    }, 5000);
}
