document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product');

    // Function to toggle additional information display
    function toggleAdditionalInfo(event) {
        const product = event.currentTarget;
        const additionalInfo = product.querySelector('.additional-info');
        additionalInfo.style.display = additionalInfo.style.display === 'block' ? 'none' : 'block';
    }

    // Event listeners for toggling additional information
    products.forEach(product => {
        product.addEventListener('click', toggleAdditionalInfo);
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
