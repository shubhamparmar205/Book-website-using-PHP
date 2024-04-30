<!-- Shooping Cart Section -->
<?php
ob_start();
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        if (isset($_POST['delete-wishlist-submit'])){
            $deletedrecord = $Cart->deleteCart($_POST['item_id'],'wishlist');
        }

        //Add to Cart
        if(isset($_POST['cart-submit'])){
            $Cart->saveForLater($_POST['item_id'],'cart','wishlist');
            header("Location:" . $_SERVER['PHP_SELF']);
        }
    }
?>

 <section id="cart" class="py-3 mb-5">
    <div class="container-fluid w-75">
        <h5 class="font-baloo font-size-20">Wishlist</h5>

         <!-- shopping cart items -->
         <div class="row">
             <div class="col-sm-9">
                    <?php
                    foreach($product->getData('wishlist') as $item):
                    $cart=$product->getProduct($item['item_id']);
                    $subTotal[]=array_map(function($item){
                    ?>
                    <!-- cart item -->
                    <div class="row border-top py-3 mt-3">
                        <div class="col-sm-2">
                            <img src="<?php echo $item['item_image']?? './assets/products/1.0.png' ?>"  style="height:110px;" alt="cart1" class="img-fluid">
                        </div>
                        <div class="col-sm-8">
                            <h5 class="font-baloo font-size-20"><?php echo $item['item_name']?? "Unknown"?></h5>
                            <small>by Vans</small>
                            <!-- product ratings -->
                            <div class="d-flex">
                                <div class="rating star font-size-12">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <a href="#" class="px-2 font-rale font-size-14" style="text-decoration: none; color: black;">2045 ratings</a>
                            </div>
                            <!-- !product ratings -->

                            <!-- product qty -->
                            <div class="qty d-flex pt-2">
                            
                                <form method="post">
                                    <input type="hidden" value="<?php echo $item['item_id']??0;?>" name="item_id">
                                    <button type="submit" name="delete-wishlist-submit" class="btn font-baloo text-danger ps-0 pe-3 border-end">Delete</button>
                                </form>

                                <form method="post">
                                    <input type="hidden" value="<?php echo $item['item_id']??0;?>" name="item_id">
                                    <button type="submit" name="cart-submit" class="btn font-baloo text-danger">Add to Cart</button>
                                </form>
                                
                                
                            </div>
                            <!-- !product qty -->
                        </div>

                        <div class="col-sm-2 text-right">
                            <div class="text-danger font-baloo font-size-20">
                                ₹<span class="product_price" data-id="<?php echo $item['item_id'] ?? '0'; ?>"><?php echo $item['item_price']?></span>
                            </div>
                        </div>
                               
                        </div>
                            <!-- !cart item -->
                            <?php 
                            return $item['item_price'];
                            },$cart); // closing array_map functions
                            endforeach;
                            ?>
                        </div>
            </div>
            <!-- !shopping cart items -->

    </div>
</section>
<!-- !Shooping Cart Section -->