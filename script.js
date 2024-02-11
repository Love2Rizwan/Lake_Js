document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Here you can do further processing, like sending the form data to a server using AJAX
    
    // For demonstration, let's just log the values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});
