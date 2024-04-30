$(document).ready(function(){
    
    //banner owl carousel
    // $("#banner-area .carousel-inner").owlCarousel({
    //     dots:true,
    //     items:1
    // });
    
    // Top Sale Owl Carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // isotope filter
    var $grid=$(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
    })

    //filter items on button
    $('.button-group').on("click","button",function(){
        var filterValue=$(this).attr("data-filter");
        $grid.isotope({filter:filterValue});
    })

    //New T-shirt Owl Carousel
    $("#new-tshirt .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    //Blogs Owl-carousel
    $('#blogs .owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
        }
    }); 



//product   qty section
let $qty_up = $(".qty .qty-up");
let $qty_down = $(".qty .qty-down");
let $deal_price = $("#deal-price");
// let $input = $(".qty .qty-input");

// click on qty up button
$qty_up.click(function(e){

    let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
    let $price = $(`.product_price[data-id='${$(this).data("id")}']`);

    
    // change product price using ajax call
    $.ajax({url: "template/ajax.php", type : 'post', data : { itemid : $(this).data("id")}, success: function(result){
            let obj = new Object;
            obj = JSON.parse(result);
            let item_price = obj[0]['item_price'];

            if($input.val() >= 1 && $input.val() <= 9){
                $input.val(function(i, oldval){ 
                    return ++oldval;
                });

                // increase price of the product
                $price.text(parseInt(item_price * $input.val()).toFixed(2));

                // set subtotal price
                let subtotal = parseInt($deal_price.text()) + parseInt(item_price);
                $deal_price.text(subtotal.toFixed(2));
            }

        }}); // closing ajax request
}); // closing qty up button

// click on qty down button
$qty_down.click(function(e){

    let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
    let $price = $(`.product_price[data-id='${$(this).data("id")}']`);

    // change product price using ajax call
    $.ajax({url: "template/ajax.php", type : 'post', data : { itemid : $(this).data("id")}, success: function(result){
            let obj = new Object;
            obj = JSON.parse(result);
            let item_price = obj[0]['item_price'];

            if($input.val() > 1 && $input.val() <= 10){
                $input.val(function(i, oldval){
                    return --oldval;
                });


                // increase price of the product
                $price.text(parseInt(item_price * $input.val()).toFixed(2));

                // set subtotal price
                let subtotal = parseInt($deal_price.text()) - parseInt(item_price);
                $deal_price.text(subtotal.toFixed(2));
            }

        }}); // closing ajax request
}); // closing qty down button

});



