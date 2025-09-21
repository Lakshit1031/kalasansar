document.addEventListener('DOMContentLoaded', () => {

    // Image Gallery Logic
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove 'active' class from all thumbnails
            document.querySelector('.thumbnail.active').classList.remove('active');
            
            // Add 'active' class to the clicked thumbnail
            this.classList.add('active');
            
            // Update the main image src to the clicked thumbnail's src
            mainImage.src = this.src;
        });
    });

    // Quantity Selector Logic
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const quantityDisplay = document.getElementById('quantity');

    let quantity = 2; // Initial quantity

    increaseBtn.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) { // Prevent quantity from going below 1
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

});