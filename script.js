$(document).ready(function () {

    $('[data-category="all"]').addClass('selected');

    $.getJSON("content.json", function (wishlist) {
        const container = $(".wishContainer");
        const categoryButtonsContainer = $("#categoryButtons");

        // Set to keep track of unique categories
        const categories = new Set();

        // Loop through the wishlist items
        wishlist.forEach(item => {
            // Add the category to the categories set (ensures unique categories)
            categories.add(item.category);

            // Create the wish product element
            const wishProduct = $(`
                <div class="wishProduct ${item.category}">
                    <div class="imageContainer">
                        <img src="${item.imageURL}" alt="${item.name}">
                    </div>
                    <div class="productInfo">
                        <a href="${item.link}" target="_blank">
                            <h2>${item.name} <div class="newTabIcon"></div></h2>
                        </a>
                        <p>${item.price}€</p>
                    </div>
                </div>
            `);

            // Append the wish product to the container
            container.append(wishProduct);
        });

        // Loop through the categories set and create category buttons
        categories.forEach(category => {
            const categoryButton = $(`
                <button class="categoryButton" data-category="${category}">${category}</button>
            `);

            // Append each category button to the categoryButtons container
            categoryButtonsContainer.append(categoryButton);
        });

        // Add functionality to filter wishlist based on category selection
        $('.categoryButton').on('click', function () {
            var category = $(this).data('category');
            if (category === 'all') {
                $('.wishProduct').show();  // Show all products
            } else {
                $('.wishProduct').hide();  // Hide all products
                $('.' + category).show();  // Show only selected category products
            }

            // Highlight the selected category button
            $('.categoryButton').removeClass("selected");
            $(this).addClass("selected");
        });

        // Optionally, add the 'all' button if you want to show all products by default
     
        categoryButtonsContainer.prepend(allButton);
    });
});
