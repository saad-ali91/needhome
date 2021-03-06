// Preloader
function preloaderFadeOutInit(){
  $('.preloader').fadeOut('slow');
  $('body').attr('class','');
  }
  // Window load function
  jQuery(window).on('load', function () {
  (function ($) {
  preloaderFadeOutInit();
  })(jQuery);
  });


// $(function(){
//     $('.filter-form').hide(0);
//     $('#formSwitchCheckDefault').click(function(){
//         $('.filter-form').slideToggle(function(){
//             $('.form-1').slideToggle(10);
//         });
        
//     });
// });

// $(function(){
//     $('.filter-form').hide();
//     $('#formSwitchCheckDefault').click(function(){
//         $('.filter-form').slideToggle(function(){
//             // $('.form-1').slideToggle(10);
//             $('.hero-section form h4').slideToggle(10);
//             $('.hero-section .form-1 div:nth-child(2)').slideToggle(10);
//         });
//     });
// });


$(document).ready(function(){
    $('.featured-carousel').slick({
        infinite: true,
        slidesToShow: 4,
        prevArrow:'<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });


  $('.main-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow:'<i class="fa fa-angle-left" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-right" aria-hidden="true"></i>',
    adaptiveHeight: true,
    asNavFor: '.main-gallery-nav'
  });
  $('.main-gallery-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main-gallery',
    adaptiveHeight: true,
    dots: false,
    prevArrow: false,
    nextArrow:false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // $(document).ready(function() {
  //   $('.floor-gallery').magnificPopup({
  //     type:'image',
  //     delegate: 'a',
  //     gallery: {
  //       enabled: true
  //     }
  //   });
  //   });

// Function for Listing Page Radio Buttons
$(function(){
  $('.listing .fa-filter').addClass('display-none');
  $('#flexRadioDefault1').click(function(){
    // $('.listing').slideDown(500);
    // $('.listing-map').hide(500);
    if($('#flexRadioDefault1').is(':checked') ){
      $(this).prop('disabled', true);
      $('#flexRadioDefault2').prop('disabled', false);
      var contRemoval = $('.listing .container-fluid');
      var clsMd4 = $('.listing .row:first .col-md-3:first');
      var clsMd8 = $('.listing .row:first .col-md-4:first');
      $(contRemoval).removeClass('container-fluid').addClass('container');
      $(clsMd4).removeClass('col-md-3').addClass('col-md-4');
      $(clsMd8).removeClass('col-md-4').addClass('col-md-8');
      $('.form-div').removeClass('display-none');
      $('.search-filter').css('overflow-y', 'scroll');
      $('.listing .fa-filter').addClass('display-none');
      $('.map-iframe').css('display', 'none');
    } 
     
  })
  $('#flexRadioDefault2').click(function(){
    
     if($(this).is(':checked')){
      //  $('#flexRadioDefault2:checked');
      $(this).prop('disabled', true);
      $('#flexRadioDefault1').prop('disabled', false);
      var contRemoval = $('.listing .container:first');
      var clsMd4 = $('.listing .row:first .col-md-4:first');
      var clsMd8 = $('.listing .row:first .col-md-8:first');
      $(contRemoval).removeClass('container').addClass('container-fluid');
      $(clsMd4).removeClass('col-md-4').addClass('col-md-3');
      $(clsMd8).removeClass('col-md-8').addClass('col-md-4');
      $('.form-div').addClass('display-none');
      $('.search-filter').addClass('overflow-y');
      $('.listing .fa-filter').removeClass('display-none');
      $('.map-iframe').css('display', 'block');
    // $('.listing-map').show(500);
    // $('.listing').hide(500);
      $('.columns div:first-child').removeClass('col-sm-2').addClass('col-sm-3');
      $('.columns div:nth-child(2)').removeClass('col-sm-3 offset-7').addClass('col-sm-4 offset-5');
     }
  })
})



$(function(){
  $('.listing .fa-filter').click(function(){
    $('.form-div').toggleClass('display-none');
    $('.search-filter').addClass('overflow-y-scroll').removeClass('overflow-y');
  })
})

$(function(){
  $('.listing-map .form-div').css('display','none');
  $('.filter-div .fa').click(function(){
    $('.listing-map .form-div').toggle(100);
    $('.listing-map .accordion').toggle(100);
    $('.listing-map .scroll-class').toggleClass('scroll-1');
  })
})



// Single List Filter
$(document).ready(function(){
  $("#soldInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#sold-ul li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Listing 2 Col Input
$(document).ready(function(){
  $("#2-col-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#2-col-ul li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Listing Map View Search Filter
$(document).ready(function(){
  $("#map-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#map-ul li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



// Listing Filter
$(document).ready(function(){
  $("#listing-searchfilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#listing-search-fil li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});




// Main Header Section Filter
$(function(){
  $('#formSwitchCheckDefault').click(function(){
    $('.form-div .g-3').toggleClass('filter-form');
    $('.selections').toggleClass('display-block');
    $('.h4-sear').toggleClass('display-block');
    $('#filter-form .col-2 .btn').toggleClass('display-none');
    $('#cityNameSame').toggleClass('width-custom');
    $('#cityName').toggleClass('filter-form');
    $('.form-div .btn-search').toggleClass('filter-form');
    $('.form-1 .col-sm-12').toggleClass('form-width');
    $('.form-div').toggleClass('border-radius-form');
  });
});


// Listing Filters
$(document).ready(function(){
  $(".city-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".list-filter li").filter(function() {
      let searchResult = $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     
      console.log(searchResult);
    // alert(searchResult.data);
        // if(searchResult.count() <= 0){
         
        // }else {
         
        // }

        
      
     
    });
    console.log(value);
    
  });
});


// Listing City
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.cityRadio:checked").val();
      $('#cityList').text(selValue);
  })
})

// Listing City Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.cityRadioMap:checked").val();
      $('#mapCityList').text(selValue);
  })
})

// Listing  Neighbourhood
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.neighbourhoodRadio:checked").val();
      $('#neighbourhood').text(selValue);
  })
})
// Listing  Neighbourhood Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.neighbourhoodRadioMap:checked").val();
      $('#map-neighbourhood').text(selValue);
  })
})


// Occupancy Status
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.occupancyRadio:checked").val();
      $('#occupancy').text(selValue);
  })
})

// Occupancy Status Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.occupancyRadioMap:checked").val();
      $('#map-occupancy').text(selValue);
  })
})

// Only Numbers for Listing Filters
$(function(){
  $(document).on('keypress', '#price-from,#price-to,#p-sqft-from,#p-sqft-to,#bed-from,#bed-to,#bath-from,#bath-to,#sizesq-from,#sizesq-to,#deposit-from,#deposit-to', function () {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
});
})
// Only Numbers for Map Listing Filters
$(function(){
  $(document).on('keypress', '#map-price-from,#map-price-to,#map-p-sqft-from,#map-p-sqft-to,#map-bed-from,#map-bed-to,#map-bath-from,#map-bath-to,#smap-izesq-from,#map-sizesq-to,#map-deposit-from,#map-deposit-to', function () {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
});
})

// Listing Price Range 
$(function(){
  $('#price-from').keyup(function(){
    var selValue = $("#price-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#pricerange').css('display', 'none');
      $('#price_too').css('display','none');
      $('.price-doll-1').css('display','none');
    }else {
      $('.price-doll-1').css('display', 'block');
      $('#pricerange').css('display', 'block');
      $('.price-doll-1').css('display','block');
      $('.price-doll-2').css('display','none');
      $('#pricerange').text(selValue);
    }

  })
  
  $('#price-to').keyup(function(){
    var selValue = $("#price-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#price_too').css('display','block');
      $('#price_too').text('and more');
      $('#priceto').css('display', 'none');
      $('.price-doll-2').css('display','none');
    }
    else {
      $('#price_too').css('display','block');
       $('#price_too').text('to');
      $('#priceto').css('display', 'block');
      $('#priceto').text(selValue);
      $('.price-doll-2').css('display','block');
    }
  })
})
// Listing Map Price Range 
$(function(){
  $('#map-price-from').keyup(function(){
    var selValue = $("#map-price-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-pricerange').css('display', 'none');
      $('#map-price_too').css('display','none');
      $('.map-price-doll-1').css('display','none');
    }else {
      $('.map-price-doll-1').css('display', 'block');
      $('#map-pricerange').css('display', 'block');
      $('.map-price-doll-1').css('display','block');
      $('.map-price-doll-2').css('display','none');
      $('#map-pricerange').text(selValue);
    }
  })
  $('#map-price-to').keyup(function(){
    var selValue = $("#map-price-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-price_too').css('display','block');
      $('#map-price_too').text('and more');
      $('#map-priceto').css('display', 'none');
      $('.map-price-doll-2').css('display','none');
    }
    else {
      $('#map-price_too').css('display','block');
       $('#map-price_too').text('to');
      $('#map-priceto').css('display', 'block');
      $('#map-priceto').text(selValue);
      $('.map-price-doll-2').css('display','block');
    }
  })
})


// Listing Price Sqft
$(function(){
  $('#p-sqft-from').keyup(function(){
    var selValue = $("#p-sqft-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#psqft').css('display', 'none');
      $('#psqft_too').css('display','none');
      $('.psqft-doll-1').css('display','none');
    }else {
      $('.psqft-doll-1').css('display', 'block');
      $('#psqft').css('display', 'block');
      $('.psqft-doll-1').css('display','block');
      $('.psqft-doll-2').css('display','none');
      $('#psqft').text(selValue);
    }
  })
  $('#p-sqft-to').keyup(function(){
    var selValue = $("#p-sqft-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#psqft_too').css('display','block');
      $('#psqft_too').text('and more');
      $('#psqftto').css('display', 'none');
      $('.psqft-doll-2').css('display','none');
    }
    else {
      $('#psqft_too').css('display','block');
       $('#psqft_too').text('to');
      $('#psqftto').css('display', 'block');
      $('#psqftto').text(selValue);
      $('.psqft-doll-2').css('display','block');
    }
  })
})
// Listing Map Price Sqft
$(function(){
  $('#map-p-sqft-from').keyup(function(){
    var selValue = $("#map-p-sqft-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-psqft').css('display', 'none');
      $('#map-psqft_too').css('display','none');
      $('.map-psqft-doll-1').css('display','none');
    }else {
      $('.map-psqft-doll-1').css('display', 'block');
      $('#map-psqft').css('display', 'block');
      $('.map-psqft-doll-1').css('display','block');
      $('.map-psqft-doll-2').css('display','none');
      $('#map-psqft').text(selValue);
    }
  })
  $('#map-p-sqft-to').keyup(function(){
    var selValue = $("#map-p-sqft-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-psqft_too').css('display','block');
      $('#map-psqft_too').text('and more');
      $('#map-psqftto').css('display', 'none');
      $('.map-psqft-doll-2').css('display','none');
    }
    else {
      $('#map-psqft_too').css('display','block');
       $('#map-psqft_too').text('to');
      $('#map-psqftto').css('display', 'block');
      $('#map-psqftto').text(selValue);
      $('.map-psqft-doll-2').css('display','block');
    }
  })
})



// Listing Bed
$(function(){
  $('#bed-from').keyup(function(){
    var selValue = $("#bed-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#bed').css('display', 'none');
      $('#bed_too').css('display','none');
      $('.bed-doll-1').css('display','none');
    }else {
      $('.bed-doll-1').css('display', 'block');
      $('#bed').css('display', 'block');
      $('.bed-doll-1').css('display','block');
      $('.bed-doll-2').css('display','none');
      $('#bed').text(selValue);
    }
  })
  $('#bed-to').keyup(function(){
    var selValue = $("#bed-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#bed_too').css('display','block');
      $('#bed_too').text('and more');
      $('#bedto').css('display', 'none');
      $('.bed-doll-2').css('display','none');
    }
    else {
      $('#bed_too').css('display','block');
       $('#bed_too').text('to');
      $('#bedto').css('display', 'block');
      $('#bedto').text(selValue);
      $('.bed-doll-2').css('display','block');
    }
  })
})
// Listing Map Bed
$(function(){
  $('#map-bed-from').keyup(function(){
    var selValue = $("#map-bed-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-bed').css('display', 'none');
      $('#map-bed_too').css('display','none');
      $('.map-bed-doll-1').css('display','none');
    }else {
      $('.map-bed-doll-1').css('display', 'block');
      $('#map-bed').css('display', 'block');
      $('.map-bed-doll-1').css('display','block');
      $('.map-bed-doll-2').css('display','none');
      $('#map-bed').text(selValue);
    }
  })
  $('#map-bed-to').keyup(function(){
    var selValue = $("#map-bed-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-bed_too').css('display','block');
      $('#map-bed_too').text('and more');
      $('#map-bedto').css('display', 'none');
      $('.map-bed-doll-2').css('display','none');
    }
    else {
      $('#map-bed_too').css('display','block');
       $('#map-bed_too').text('to');
      $('#map-bedto').css('display', 'block');
      $('#map-bedto').text(selValue);
      $('.map-bed-doll-2').css('display','block');
    }
  })
})




// Listing Bath
$(function(){
  $('#bath-from').keyup(function(){
    var selValue = $("#bath-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#bath').css('display', 'none');
      $('#bath_too').css('display','none');
      $('.bath-doll-1').css('display','none');
    }else {
      $('.bath-doll-1').css('display', 'block');
      $('#bath').css('display', 'block');
      $('.bath-doll-1').css('display','block');
      $('.bath-doll-2').css('display','none');
      $('#bath').text(selValue);
    }
  })
  $('#bath-to').keyup(function(){
    var selValue = $("#bath-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#bath_too').css('display','block');
      $('#bath_too').text('and more');
      $('#bathto').css('display', 'none');
      $('.bath-doll-2').css('display','none');
    }
    else {
      $('#bath_too').css('display','block');
       $('#bath_too').text('to');
      $('#bathto').css('display', 'block');
      $('#bathto').text(selValue);
      $('.bath-doll-2').css('display','block');
    }
  })
})
// Listing Map Bath
$(function(){
  $('#map-bath-from').keyup(function(){
    var selValue = $("#map-bath-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-bath').css('display', 'none');
      $('#map-bath_too').css('display','none');
      $('.map-bath-doll-1').css('display','none');
    }else {
      $('.map-bath-doll-1').css('display', 'block');
      $('#map-bath').css('display', 'block');
      $('.map-bath-doll-1').css('display','block');
      $('.map-bath-doll-2').css('display','none');
      $('#map-bath').text(selValue);
    }
  })
  $('#map-bath-to').keyup(function(){
    var selValue = $("#map-bath-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-bath_too').css('display','block');
      $('#map-bath_too').text('and more');
      $('#map-bathto').css('display', 'none');
      $('.map-bath-doll-2').css('display','none');
    }
    else {
      $('#map-bath_too').css('display','block');
       $('#map-bath_too').text('to');
      $('#map-bathto').css('display', 'block');
      $('#map-bathto').text(selValue);
      $('.map-bath-doll-2').css('display','block');
    }
  })
})



// Listing Size sqft
$(function(){
  $('#sizesq-from').keyup(function(){
    var selValue = $("#sizesq-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#sizesq').css('display', 'none');
      $('#sizesq_too').css('display','none');
      $('.sizesq-doll-1').css('display','none');
    }else {
      $('.sizesq-doll-1').css('display', 'block');
      $('#sizesq').css('display', 'block');
      $('.sizesq-doll-1').css('display','block');
      $('.sizesq-doll-2').css('display','none');
      $('#sizesq').text(selValue);
    }
  })
  $('#sizesq-to').keyup(function(){
    var selValue = $("#sizesq-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#sizesq_too').css('display','block');
      $('#sizesq_too').text('and more');
      $('#sizesqto').css('display', 'none');
      $('.sizesq-doll-2').css('display','none');
    }
    else {
      $('#sizesq_too').css('display','block');
       $('#sizesq_too').text('to');
      $('#sizesqto').css('display', 'block');
      $('#sizesqto').text(selValue);
      $('.sizesq-doll-2').css('display','block');
    }
  })
})
// Listing Map Size sqft
$(function(){
  $('#map-sizesq-from').keyup(function(){
    var selValue = $("#map-sizesq-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-sizesq').css('display', 'none');
      $('#map-sizesq_too').css('display','none');
      $('.map-sizesq-doll-1').css('display','none');
    }else {
      $('.map-sizesq-doll-1').css('display', 'block');
      $('#map-sizesq').css('display', 'block');
      $('.map-sizesq-doll-1').css('display','block');
      $('.map-sizesq-doll-2').css('display','none');
      $('#map-sizesq').text(selValue);
    }
  })
  $('#map-sizesq-to').keyup(function(){
    var selValue = $("#map-sizesq-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-sizesq_too').css('display','block');
      $('#map-sizesq_too').text('and more');
      $('#map-sizesqto').css('display', 'none');
      $('.map-sizesq-doll-2').css('display','none');
    }
    else {
      $('#map-sizesq_too').css('display','block');
       $('#map-sizesq_too').text('to');
      $('#map-sizesqto').css('display', 'block');
      $('#map-sizesqto').text(selValue);
      $('.map-sizesq-doll-2').css('display','block');
    }
  })
})


// Listing Deposit
$(function(){
  $('#deposit-from').keyup(function(){
    var selValue = $("#deposit-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#deposit').css('display', 'none');
      $('#deposit_too').css('display','none');
      $('.deposit-doll-1').css('display','none');
    }else {
      $('.deposit-doll-1').css('display', 'block');
      $('#deposit').css('display', 'block');
      $('.deposit-doll-1').css('display','block');
      $('.deposit-doll-2').css('display','none');
      $('#deposit').text(selValue);
    }
  })
  $('#deposit-to').keyup(function(){
    var selValue = $("#deposit-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#deposit_too').css('display','block');
      $('#deposit_too').text('and more');
      $('#depositto').css('display', 'none');
      $('.deposit-doll-2').css('display','none');
    }
    else {
      $('#deposit_too').css('display','block');
       $('#deposit_too').text('to');
      $('#depositto').css('display', 'block');
      $('#depositto').text(selValue);
      $('.deposit-doll-2').css('display','block');
    }
  })
})
// Map Listing Deposit
$(function(){
  $('#map-deposit-from').keyup(function(){
    var selValue = $("#map-deposit-from").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-deposit').css('display', 'none');
      $('#map-deposit_too').css('display','none');
      $('.map-deposit-doll-1').css('display','none');
    }else {
      $('.map-deposit-doll-1').css('display', 'block');
      $('#map-deposit').css('display', 'block');
      $('.map-deposit-doll-1').css('display','block');
      $('.map-deposit-doll-2').css('display','none');
      $('#map-deposit').text(selValue);
    }
  })
  $('#map-deposit-to').keyup(function(){
    var selValue = $("#map-deposit-to").val(); 
    if((selValue).length === '' || (selValue).length < 1){
      $('#map-deposit_too').css('display','block');
      $('#map-deposit_too').text('and more');
      $('#map-depositto').css('display', 'none');
      $('.map-deposit-doll-2').css('display','none');
    }
    else {
      $('#map-deposit_too').css('display','block');
       $('#map-deposit_too').text('to');
      $('#map-depositto').css('display', 'block');
      $('#map-depositto').text(selValue);
      $('.map-deposit-doll-2').css('display','block');
    }
  })
})





// Promotion
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.promotionRadio:checked").val();
      $('#promotion').text(selValue);
  })
})
// Promotion MAp
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.promotionRadioMap:checked").val();
      $('#map-promotion').text(selValue);
  })
})

// Walk 
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.walkRadio:checked").val();
      $('#walk').text(selValue);
  })
})
// Walk Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.walkRadioMap:checked").val();
      $('#map-walk').text(selValue);
  })
})
// Transit
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.transitRadio:checked").val();
      $('#transit').text(selValue);
  })
})
// Transit Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input:radio.transitRadioMap:checked").val();
      $('#map-transit').text(selValue);
  })
})




// Listing Sales Status
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("#salesCheck input[type=checkbox]:checked"), function(){
      check.push($(this).val()); 
    });
    $('#sale').text(check.join(", "));
  })
})
// Listing Map Sales Status
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("#salesCheckMap input[type=checkbox]:checked"), function(){
      check.push($(this).val()); 
    });
    $('#map-sale').text(check.join(", "));
  })
})

// Listing Construction
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("#constructionCheck input[type=checkbox]:checked"), function(){
      check.push($(this).val()); 
    });
    $('#construction').text(check.join(", "));
  })
})
// Listing Map Construction
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("#constructionCheckMap input[type=checkbox]:checked"), function(){
      check.push($(this).val()); 
    });
    $('#map-construction').text(check.join(", "));
  })
})

// Listing Condo
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("#condoCheck input[type=checkbox]:checked"), function(){
      check.push($(this).val()); 
    });
    $('#condoamenities').text(check.join(", "));
  })
})
// Listing Map Condo
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("#condoCheckMap input[type=checkbox]:checked"), function(){
      check.push($(this).val()); 
    });
    $('#map-condoamenities').text(check.join(", "));
  })
})

// Listing Product Type
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("#productCheck input[type=checkbox]:checked"), function(){
      check.push($(this).val()); 
    });
    $('#product').text(check.join(", "));
  })
})
// Listing Map Product Type
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("#productCheckMap input[type=checkbox]:checked"), function(){
      check.push($(this).val()); 
    });
    $('#map-product').text(check.join(", "));
  })
})



$(function(){
  $('.reset').click(function(){
    $('#cityList,#neighbourhood,#sale,#construction,#occupancy,#condoamenities,#product,#promotion,#walk,#transit').empty();
    $('#pricerange,#price_too,#priceto,#psqft,#psqft_too,#psqftto,#bed,#bedto,#bed_too,#bath,#bath_too,#bathto,#sizesq,#sizesq_too,#sizesqto,#deposit,#deposit_too,#depositto').empty();
    

    // Listing Price
    $(function(){
      var emptydiv = $('#pricerange').is(':empty');
      if(emptydiv){
        $('.price-doll-1,.price-doll-2').css('display', 'none');
      }else{
        $('.price-doll-1,.price-doll-2').css('display', 'block');
      }
    })
    // Listing Price Sqft
    $(function(){
      var emptydiv = $('#psqft').is(':empty');
      if(emptydiv){
        $('.psqft-doll-1,.psqft-doll-2').css('display', 'none');
      }else{
        $('.psqft-doll-1,.psqft-doll-2').css('display', 'block');
      }
    })
    // Listing Bed
    $(function(){
      var emptydiv = $('#bed').is(':empty');
      if(emptydiv){
        $('.bed-doll-1,.bed-doll-2').css('display', 'none');
      }else{
        $('.bed-doll-1,.bed-doll-2').css('display', 'block');
      }
    })
    // Listing Bathroom
    $(function(){
      var emptydiv = $('#bath').is(':empty');
      if(emptydiv){
        $('.bath-doll-1,.bath-doll-2').css('display', 'none');
      }else{
        $('.bath-doll-1,.bath-doll-2').css('display', 'block');
      }
    })
    // Listing Size Sqft
    $(function(){
      var emptydiv = $('#sizesq').is(':empty');
      if(emptydiv){
        $('.sizesq-doll-1,.sizesq-doll-2').css('display', 'none');
      }else{
        $('.sizesq-doll-1,.sizesq-doll-2').css('display', 'block');
      }
    })
    //Listing Deposit
    $(function(){
      var emptydiv = $('#deposit').is(':empty');
      if(emptydiv){
        $('.deposit-doll-1,.deposit-doll-2').css('display', 'none');
      }else{
        $('.deposit-1,.deposit-doll-2').css('display', 'block');
      }
    })
    
    
  });
  
});
$(function(){
  $('.reset').click(function(){
    $('#mapCityList,#map-neighbourhood,#map-sale,#map-construction,#map-occupancy,#map-condoamenities,#map-product,#map-promotion,#map-walk,#map-transit').empty();
    $('#map-pricerange,#map-price_too,#map-priceto,#map-psqft,#map-psqft_too,#map-psqftto,#map-bed,#map-bedto,#map-bed_too,#map-bath,#map-bath_too,#map-bathto,#map-sizesq,#map-sizesq_too,#map-sizesqto,#map-deposit,#map-deposit_too,#map-depositto').empty();

    // Listing Map Price 
    $(function(){
      var emptydiv = $('#map-pricerange').is(':empty');
      if(emptydiv){
        $('.map-price-doll-1,.map-price-doll-2').css('display', 'none');
      }else{
        $('.map-price-doll-1,.map-price-doll-2').css('display', 'block');
      }
    })
    // Listing Map Price Sqft
    $(function(){
      var emptydiv = $('#map-psqft').is(':empty');
      if(emptydiv){
        $('.map-psqft-doll-1,.map-psqft-doll-2').css('display', 'none');
      }else{
        $('.map-psqft-doll-1,.map-psqft-doll-2').css('display', 'block');
      }
    })
    // Listing Map Bed 
    $(function(){
      var emptydiv = $('#map-bed').is(':empty');
      if(emptydiv){
        $('.map-bed-doll-1,.map-bed-doll-2').css('display', 'none');
      }else{
        $('.map-bed-doll-1,.map-bed-doll-2').css('display', 'block');
      }
    })
    // Listing Bathroom
    $(function(){
      var emptydiv = $('#map-bath').is(':empty');
      if(emptydiv){
        $('.map-bath-doll-1,.map-bath-doll-2').css('display', 'none');
      }else{
        $('.map-bath-doll-1,.map-bath-doll-2').css('display', 'block');
      }
    })
    // Listing Size Sqft
    $(function(){
      var emptydiv = $('#map-sizesq').is(':empty');
      if(emptydiv){
        $('.map-sizesq-doll-1,.map-sizesq-doll-2').css('display', 'none');
      }else{
        $('.map-sizesq-doll-1,.map-sizesq-doll-2').css('display', 'block');
      }
    })
    //Listing Map Deposit
    $(function(){
      var emptydiv = $('#map-deposit').is(':empty');
      if(emptydiv){
        $('.map-deposit-doll-1,.map-deposit-doll-2').css('display', 'none');
      }else{
        $('.map-deposit-doll-1,.map-deposit-doll-2').css('display', 'block');
      }
    })


  });
});


$(function(){
  $('.p-amenities').click(function(){
    var list = $('#p-amenities').val();
    if((list) === ''){
      alert('Enter Amenities');
    }else{
      $('.p-amenities-li').append('<li>'+ list + '<i class="fa fa-times-circle"></i> </li>');
      $('#p-amenities').val('');
    }
    
  });

  $('.p-amenities-li').on('click','.fa-times-circle',function(){
    $(this).parent('li').fadeOut(200);
  })
});

//Developers Name
$(function(){
  $('.developer-btn').click(function(){
    var list = $('#developer-btn').val();
    if((list) === ''){
      alert('Enter Developer\'s Name');
    }else{
      $('.developer-li').append('<li>'+ list + '<i class="fa fa-times-circle"></i> </li>');
      $('#developer-btn').val('');
    }
    
  });

  $('.developer-li').on('click','.fa-times-circle',function(){
    $(this).parent('li').fadeOut(200);
  })
});

//Sales Company
$(function(){
  $('#sales-com').change(function(){
    var list = $('#sales-com').val();
      $('.sales-com').append('<li>'+ list + '<i class="fa fa-times-circle"></i> </li>');
      $('#sales-com').val('');
  });
  $('.sales-com').on('click','.fa-times-circle',function(){
    $(this).parent('li').fadeOut(200);
  })
});

//Architects
$(function(){
  $('#archi').change(function(){
    var list = $('#archi').val();
      $('.archi').append('<li>'+ list + '<i class="fa fa-times-circle"></i> </li>');
      $('#archi').val('');
  });
  $('.archi').on('click','.fa-times-circle',function(){
    $(this).parent('li').fadeOut(200);
  })
});

//Interior Designer
$(function(){
  $('#interior').change(function(){
    var list = $('#interior').val();
      $('.interior').append('<li>'+ list + '<i class="fa fa-times-circle"></i> </li>');
      $('#interior').val('');
  });
  $('.interior').on('click','.fa-times-circle',function(){
    $(this).parent('li').fadeOut(200);
  })
});


// Home Page Minimum and Maximum

  // var minPrice = ['10000','12000','15000','16000','18000','20000','25000','30000'];
  // $('#min-price').autocomplete({
  //   source: minPrice
  // }
  // );
  // var maxPrice = ['40000','50000','60000','70000','80000','90000'];
  // $('#max-price').autocomplete({
  //   source: maxPrice
  // }
  // );

$(function(){
  var minPrice = [1000, 2000,1000, 15000, 20000];
  $('#min-price').select2({
    data: minPrice,
    allowClear: true,
    tags: true,
    placeholder: "Min Price",
    
  });
 
//   $(document).on('keypress', '.select2-search__field', function () {
//     $(this).val($(this).val().replace(/[^\d].+/, ""));
//     if ((event.which < 48 || event.which > 57)) {
//       event.preventDefault();
//     }
// });
  
  var maxPrice = [30000, 35000, 40000, 50000, 60000];
  $('#max-price').select2({
    data: maxPrice,
    allowClear: true,
    tags: true,
    placeholder: "Max Price"
  });
  var neighbourhoodForm = ['401 Business Park', 'Adjala-Tosorontio','Agincourt North, E07'];
  $('#neighbourhood-form').select2({
    data: neighbourhoodForm,
    allowClear: true,
    tags: true,
    placeholder: "Select"
  });
  var city = ['Torronto', 'Vaughan','Mississauga'];
  $('#city').select2({
    data: city,
    allowClear: true,
    tags: true,
    placeholder: "Select"
  });
  var beds = ['1', '1+','2','2+'];
  $('#beds').select2({
    data: beds,
    allowClear: true,
    tags: true,
    placeholder: "Select"
  });
  var baths = ['1', '1+','2','2+'];
  $('#baths').select2({
    data: baths,
    allowClear: true,
    tags: true,
    placeholder: "Any"
  });
  var landSize = ['1+ acres', '2+ acres','5+ acres','10+ acres','50+ acres'];
  $('#landSize').select2({
    data: landSize,
    allowClear: true,
    tags: true,
    placeholder: "Any"
  });
  var vipsales = ['VIP Sales', 'Coming Soon','Planning','Sold Out'];
  $('#vipsales').select2({
    data: vipsales,
    allowClear: true,
    tags: true,
    placeholder: "Any"
  });
  var constStatus = ['Pre Construction', 'Under Construction','Construction Complete'];
  $('#const-status').select2({
    data: constStatus,
    allowClear: true,
    tags: true,
    placeholder: "Any"
  });
  var occupancyForm = ['30 Days', '90 Days','6 Months','1 Year','18 Months','2 years'];
  $('#occupancy-form').select2({
    data: occupancyForm,
    allowClear: true,
    tags: true,
    placeholder: "Immediate"
  });
  var condo = ['Fitness', 'Party Room','Terrace','Other','Lounge','Concierge','Pool'];
  $('#condo').select2({
    data: condo,
    allowClear: true,
    tags: true,
    placeholder: "Select"
  });
  var prodType = ['Condow', 'Condow Hometown','Loft','Single Family','Townhome'];
  $('#prod-type').select2({
    data: prodType,
    allowClear: true,
    tags: true,
    placeholder: "Any"
  });
  var buildingTypes = ['House', 'Row / Townhouse','Apartment','Duplex','Triplex'];
  $('#buildingTypes').select2({
    data: buildingTypes,
    allowClear: true,
    tags: true,
    placeholder: "Any"
  });
  var keywords = ['Waterfront', 'Garage','Pool'];
  $('#keywords').select2({
    data: keywords,
    allowClear: true,
    tags: true,
    placeholder: "..."
  });

})

$(function(){
  $('#homeReset').click(function(){
    $('#min-price,#max-price,#neighbourhood-form,#city,#beds,#baths,#landSize,#vipsales,#const-status,#occupancy-form,#condo,#prod-type,#buildingTypes,#keywords').select2('val', 'All');
  });
});



// Slider Single Property Page
$(document).ready(function(){
  $('.slider-single-prop').slick({
      infinite: true,
      slidesToShow: 2,
      prevArrow:'<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>',
      nextArrow:'<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>',
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });
});


// let prices = document.querySelectorAll('.price');

// let pricesCon = Array.from(prices);
// pricesCon.reverse();
// pricesCon[0].textContent;
// console.log(pricesCon);

// prices.forEach(function(price){
//   let priceValue = price.textContent;
//   console.log(priceValue);
// })



$(function(){
  $('.columns-sel-selection').change(function(){
    var val = $('.columns-sel-selection option').filter(':selected').text();
    
    
  if(val === 'Two Column'){
    var liFilter = $('.list-size');
    liFilter.addClass('li-two-col');
    liFilter.removeClass('li-three-col');
    liFilter.removeClass('li-one-col');
    }
    else if(val === 'Three Column'){
      var liFilter = $('.list-size');
      liFilter.addClass('li-three-col');
      liFilter.removeClass('li-two-col');
      liFilter.removeClass('li-one-col');
    }
    else if(val === 'One Column'){
      var liFilter = $('.list-size');
      liFilter.addClass('li-one-col');
      liFilter.removeClass('li-three-col');
      liFilter.removeClass('li-two-col');
    }
  })
})