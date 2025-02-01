$(document).ready(function () {
    $.getJSON("wishlist.json", function (data) {
        let categories = new Set();
        let wishlistContainer = $(".wishContainer");

        // Add all items to the page and collect categories
        data.forEach(item => {
            categories.add(item.category);

            let productHTML = `
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
            `;
            wishlistContainer.append(productHTML);
        });

        // Generate category buttons
        let categoryButtons = $("#categoryButtons");
        categories.forEach(category => {
            let buttonHTML = `<button class="categoryButton" data-category="${category}">${category}</button>`;
            categoryButtons.append(buttonHTML);
        });

        // Category filtering logic
        $(document).on("click", ".categoryButton", function () {
            let category = $(this).data("category");
            if (category === "all") {
                $(".wishProduct").show();
            } else {
                $(".wishProduct").hide();
                $("." + category).show();
            }

            $(".categoryButton").removeClass("selected");
            $(this).addClass("selected");
        });
    });
});
