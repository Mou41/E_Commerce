document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product');

    // Function to toggle all content display
    function toggleAllContent(event) {
        const product = event.currentTarget;
        const additionalInfo = product.querySelector('.additional-info');
        const productName = product.querySelector('h3');

        // Toggle the display of additional info and price
        additionalInfo.style.display = additionalInfo.style.display === 'block' ? 'none' : 'block';
        productName.style.display = productName.style.display === 'block' ? 'none' : 'block';
    }

    // Event listeners for toggling all content
    products.forEach(product => {
        product.addEventListener('click', toggleAllContent);
    });

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchQuery = searchInput.value.toLowerCase().trim();
        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchQuery)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
