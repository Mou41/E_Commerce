document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product');

    // Function to toggle additional information on click for small screens
    function toggleAdditionalInfo(event) {
        const product = event.currentTarget;
        const productInfo = product.querySelector('.product-info');
        const productName = product.querySelector('.product-name');

        // Toggle the visibility of product information
        productInfo.classList.toggle('show');
        
        // Toggle the visibility of product name
        productName.classList.toggle('hide');
    }

    // Event listener for clicking on products to toggle additional information
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
