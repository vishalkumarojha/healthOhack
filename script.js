document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#ffc107'; // Lighter yellow on hover
        button.style.transform = 'translateY(10px)'; // Move down by 10px
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ffcc00'; // Back to default yellow
        button.style.transform = 'translateY(0)'; // Reset position
    });
});
