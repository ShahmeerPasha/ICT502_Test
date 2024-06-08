document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('createEmail').value;
    let password = document.getElementById('createPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert("Account created successfully!");
        window.location.href = 'login.html';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    if (email === 'check' && password === 'check') {
        window.location.href = 'index.html';
    } else {
        alert("Invalid email or password!");
    }
});

