// Show an alert when the page loads
window.onload = function() {
    alert('Welcome to James D’s site!');
}

// Change the text color of the title when clicked
document.addEventListener('DOMContentLoaded', (event) => {
    const title = document.querySelector('.main-title');
    title.addEventListener('click', function() {
        this.style.color = this.style.color === 'black' ? 'red' : 'black';
    });
});
