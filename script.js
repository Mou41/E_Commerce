document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('toggle');
    const navbar = document.querySelector('.navbar');
    const products = document.querySelectorAll('.product'); // Assuming .product is the class for your product elements
    const searchInput = document.getElementById('searchInput'); // Assuming 'searchInput' is the ID for your search input element

    // Event listener for menu toggle button
    menuToggle.addEventListener('change', function () {
        if (this.checked) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    });

    // Function to show additional information on mouseover
    function showAdditionalInfo(event) {
        const product = event.currentTarget;
        const additionalInfo = product.querySelector('.additional-info');
        additionalInfo.style.display = 'block';
    }

    // Function to hide additional information on mouseout
    function hideAdditionalInfo(event) {
        const product = event.currentTarget;
        const additionalInfo = product.querySelector('.additional-info');
        additionalInfo.style.display = 'none';
    }

    // Event listeners for mouseover and mouseout
    products.forEach(product => {
        product.addEventListener('mouseover', showAdditionalInfo);
        product.addEventListener('mouseout', hideAdditionalInfo);
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
