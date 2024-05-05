<?php
foreach ($items as $product) :
    $productImageUrl = $product["imageURL"];
    $productName = $product["name"];
    $productLink = $product["link"];
    $productPrice = $product["price"];
    $productCategory = $product["category"];

?>


    <div class="wishProduct <?php echo $productCategory; ?>">
        <div class="imageContainer">
            <img src="<?php echo $productImageUrl; ?>" alt="Product Image">
        </div>

        <div class="productInfo">
            <a href="<?php echo $productLink; ?>" target=”_blank”>
                <h2><?php echo $productName; ?>
            <div class="newTabIcon"></div>
            </h2>
                
            </a>
            <p><?php echo $productPrice; ?>€</p>
        </div>

    </div>



<?php endforeach; ?>