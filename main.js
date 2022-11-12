window.onload = function() { 
    document.getElementById('loginForm').addEventListener('submit', function(event){
        event.preventDefault();
    var emailId = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    document.getElementById('submitBtn').onclick = console.log(`Email: ${emailId} Password: ${password}`);
    });
}