"use strict";

// Открытие окна для входа и регистрации
$(document).ready(function() {
  $(".wrapper1_block_grid_4").click(function() {
    $(".wrapper1_block_grid_4_1").slideToggle(500);
    $("body").toggleClass("lock");
  });
});

// Открытие списка покупок
$(document).ready(function() {
  $(".wrapper1_block_grid_5").click(function() {
    $(".wrapper1_block_bracket").slideToggle(500);
    $("body").toggleClass("lock");
  });
});

/* Change block img which to the push on button*/
$(document).ready(function() {
  $("#next_button").click(function() {
    // Переход вперед по кнопке
    let currentImage = $(".img_slider_div.show");
    let currentImageIndex = $(".img_slider_div.show").index();
    let nextImageIndex = currentImageIndex + 1;
    let nextImage = $(".img_slider_div").eq(nextImageIndex);

    currentImage.fadeOut(1000);
    currentImage.removeClass("show");

    // Переход с последнего слайда на первый
    if (nextImageIndex == $(".img_slider_div:last").index() + 1) {
      $(".img_slider_div")
        .eq(0)
        .fadeIn(1000);

      $(".img_slider_div")
        .eq(0)
        .addClass("show");
    } else {
      nextImage.fadeIn(1000);
      nextImage.addClass("show");
    }
  });

  // Переход назад по кнопке
  $("#prev_button").click(function() {
    let currentImage = $(".img_slider_div.show");
    let currentImageIndex = $(".img_slider_div.show").index();
    let prevImageIndex = currentImageIndex - 1;
    let prevImage = $(".img_slider_div").eq(prevImageIndex);

    currentImage.fadeOut(1000);
    currentImage.removeClass("show");
    prevImage.fadeIn(1000);
    prevImage.addClass("show");
  });
});

// Создание фона при наведении 'navigation_product'=============>
// Navigation_product_for_us:
$(document).ready(function() {
  $("#navigation_product_for_us_id").mouseenter(function(event) {
    $(this).addClass("background_color_hover");
  });
  $("#navigation_product_for_us_id").mouseleave(function(event) {
    $("#navigation_product_for_us_id").removeClass("background_color_hover");
  });
});

// Navigation_product_best_sellers:

$(document).ready(function() {
  $("#navigation_product_best_sellers_id").mouseenter(function(event) {
    $(this).addClass("background_color_hover");
  });
  $("#navigation_product_best_sellers_id").mouseleave(function(event) {
    $(this).removeClass("background_color_hover");
  });
});

// Navigation_newn_colection:

$(document).ready(function() {
  $("#navigation_product_new_collection_id").mouseenter(function(event) {
    $(this).addClass("background_color_hover");
  });
  $("#navigation_product_new_collection_id").mouseleave(function(event) {
    $(this).removeClass("background_color_hover");
  });
});

// Navigation_idea_for_gift:

$(document).ready(function() {
  $("#navigation_product_idea_for_gift_id").mouseenter(function(event) {
    $(this).addClass("background_color_hover");
  });
  $("#navigation_product_idea_for_gift_id").mouseleave(function(event) {
    $(this).removeClass("background_color_hover");
  });
});

$(document).ready(function() {
  $("#nav_navigation_li").mouseenter(function(event) {
    $(this).addClass("background_color_hover");
  });
  $("#nav_navigation_li").mouseleave(function(event) {
    $(this).removeClass("background_color_hover");
  });
});

/*CHANGE THE 'stock' WICH TO THE CLICK ON THE 'navigation_product'*/

$(document).ready(function() {
  $("#navigation_product_for_us_id").on("click", function() {
    $(".for_us").css("visibility", "visible");
    $(".best_sellers").css("visibility", "hidden");
    $(".new_collection").css("visibility", "hidden");
    $(".idea_for_gift").css("visibility", "hidden");
  });
});

$(document).ready(function() {
  $(".navigation_product_best_sellers").on("click", function() {
    $(".for_us").css("visibility", "hidden");
    $(".best_sellers").css("visibility", "visible");
    $(".new_collection").css("visibility", "hidden");
    $(".idea_for_gift").css("visibility", "hidden");
  });
});

$(document).ready(function() {
  $("#navigation_product_new_collection_id").on("click", function() {
    $(".best_sellers").css("visibility", "hidden");
    $(".for_us").css("visibility", "hidden");
    $(".new_collection").css("visibility", "visible");
    $(".idea_for_gift").css("visibility", "hidden");
  });
});

$(document).ready(function() {
  $("#navigation_product_idea_for_gift_id").on("click", function() {
    $(".best_sellers").css("visibility", "hidden");
    $(".for_us").css("visibility", "hidden");
    $(".new_collection").css("visibility", "hidden");
    $(".idea_for_gift").css("visibility", "visible");
  });
});

/*ADD  'navigation_block' WICH TO THE CLICK ON THE 'nav_burger'*/
$(document).ready(function() {
  $(".nav_burger").click(function(event) {
    $(".nav_burger,.ul_navigation").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

/*JUMP ON THE OTHER TAB WHEN CLICK TO THE 'а'*/
$(document).ready(function() {
  $("a").each(function() {
    var a = new RegExp("/" + window.location.host + "/");
    if (!a.test(this.href)) {
      $(this).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(this.href, "_blank");
      });
    }
  });
});

// Анимация 'adversiting_stock'

$(document).ready(function() {
  $(".adversiting_stock_div").blur(function() {
    $(".adversiting_stock_div .adversiting_stock_block_img img").animate(
      {
        left: "-=50",
        opacity: 0.4
      },
      5000,
      "easeInElastic"
    );
  });
});
