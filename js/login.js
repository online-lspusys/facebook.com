document.getElementById('languageBtn').addEventListener('click', function() {
    document.getElementById('languageModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('languageModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('languageModal')) {
        document.getElementById('languageModal').style.display = 'none';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    alert('Login submitted!');
});
