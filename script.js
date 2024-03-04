document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product');

    // Function to toggle additional information on click
    function toggleAdditionalInfo(event) {
        const product = event.currentTarget;
        const additionalInfo = product.querySelector('.product-info');
        additionalInfo.classList.toggle('show');
    }

    // Event listener for click on product
    products.forEach(product => {
        product.addEventListener('click', toggleAdditionalInfo);
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
