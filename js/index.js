// ------- Form validation javascript -------//

const form = document.getElementById('MyForm');
const FullName = document.getElementById('FullName');
const Email = document.getElementById('Email');
const Subject = document.getElementById('Subject');
const Message = document.getElementById('Message');
const Errors = document.getElementById('Errors');
const Success = document.getElementById('Success');

window.onload = function(e){ 
  //console.log("window.onload"); 
  Errors.style.display='none';
  Success.style.display='none';
}

form.addEventListener('submit', (e) => {
  // Clear previous errors
  Errors.textContent = '';
  
  let messages = [];
  
  // Check if FullName is empty
  if (FullName.value === '' || FullName.value === null) {
    messages.push('FullName cannot be empty');
  }
  
  // Check if Email is empty
  if (Email.value === '' || Email.value === null) {
    messages.push('Email cannot be empty');
  }

  // Check if Subject is empty
  if (Subject.value === '' || Subject.value === null) {
    messages.push('Subject cannot be empty');
  }

  // Check if Message is empty
  if (Message.value === '' || Message.value === null) {
    messages.push('Message cannot be empty');
  }

  // If there are any error messages, show them and prevent form submission
  if (messages.length > 0) {
    Errors.style.display='block';
    Errors.innerHTML = messages.join('<br>');
    e.preventDefault(); // Prevent the form from submitting
  }
  else{
    Success.style.display='block';
    Success.innerHTML = 'Good! Form has been submitted successfully';
    e.preventDefault(); // Prevent the form from submitting
  }
});