<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<title>Guilherme's Wishlist</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
<script src="jquery-3.7.1.min.js"></script>
<body>


<div class="header">
<h1>Guilherme's wishlist</h1>

<?php 
$jsonString = file_get_contents('content.json');
$items = json_decode($jsonString, true);
$categories = array_unique(array_column($items, 'category'));

echo'<button class="categoryButton" data-category="all">All</button>';
foreach ($categories as $category) {
    echo '<button class="categoryButton" data-category="' . $category . '">' . ucfirst($category) . '</button>';
}
?>

</div>

<div class="wishContainer">
<?php 
include 'card.php'
?>

</div>
<script src="script.js"></script>
<script src="jquery-3.7.1.min.js"></script>
</body>
</html>