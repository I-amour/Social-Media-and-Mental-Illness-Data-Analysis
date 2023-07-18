// script.js
window.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  });
  