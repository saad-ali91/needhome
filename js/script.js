
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


$(function(){
  $('#flexRadioDefault1').click(function(){
    $('.listing').slideDown(500);
    $('.listing-map').hide(500);
  })
  $('#flexRadioDefault2').click(function(){
    $('.listing-map').show(500);
    $('.listing').hide(500);
  })
})

$(function(){
  $('.filter-div .fa').click(function(){
    $('.listing-map .accordion').toggle(500);
    $('.listing-map .scroll-class').toggleClass('scroll-1');
  })
})



// Single List Filter
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


// Main Header Section Filter
$(function(){
  $('#formSwitchCheckDefault').click(function(){
    $('.form-div .g-3').toggleClass('filter-form');
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
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


// Listing City
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='city']:checked").val();
      $('#cityList').text(selValue);
  })
})
// Listing City Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='mapCityList']:checked").val();
      $('#mapCityList').text(selValue);
  })
})

// Listing  Neighbourhood
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='neighbourhood']:checked").val();
      $('#neighbourhood').text(selValue);
  })
})
// Listing  Neighbourhood Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='map-neighbourhood']:checked").val();
      $('#map-neighbourhood').text(selValue);
  })
})


// Occupancy Status
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='occupancy']:checked").val();
      $('#occupancy').text(selValue);
  })
})

// Occupancy Status Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='map-occupancy']:checked").val();
      $('#map-occupancy').text(selValue);
  })
})




// Listing Price Range 
$(function(){
  $('#price-from').blur(function(){
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
  
  $('#price-to').blur(function(){
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
  $('#map-price-from').blur(function(){
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
  $('#map-price-to').blur(function(){
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
  $('#p-sqft-from').blur(function(){
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
  $('#p-sqft-to').blur(function(){
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
  $('#map-p-sqft-from').blur(function(){
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
  $('#map-p-sqft-to').blur(function(){
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
  $('#bed-from').blur(function(){
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
  $('#bed-to').blur(function(){
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
  $('#map-bed-from').blur(function(){
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
  $('#map-bed-to').blur(function(){
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
  $('#bath-from').blur(function(){
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
  $('#bath-to').blur(function(){
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
  $('#map-bath-from').blur(function(){
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
  $('#map-bath-to').blur(function(){
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
  $('#sizesq-from').blur(function(){
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
  $('#sizesq-to').blur(function(){
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
  $('#map-sizesq-from').blur(function(){
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
  $('#map-sizesq-to').blur(function(){
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







// Promotion
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='promotion']:checked").val();
      $('#promotion').text(selValue);
  })
})
// Promotion MAp
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='map-promotion']:checked").val();
      $('#map-promotion').text(selValue);
  })
})

// Walk 
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='walk']:checked").val();
      $('#walk').text(selValue);
  })
})
// Walk Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='map-walk']:checked").val();
      $('#map-walk').text(selValue);
  })
})
// Transit
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='transit']:checked").val();
      $('#transit').text(selValue);
  })
})
// Transit Map
$(function(){
  $('.list-filter input').on('change',function(){
    $('.list-names').css("display" , "block");
      var selValue = $("input[name='map-transit']:checked").val();
      $('#map-transit').text(selValue);
  })
})




// Listing Sales Status
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("input[name='sale']:checked"), function(){
      check.push($(this).val()); 
    });
    $('#sale').text(check.join(", "));
  })
})
// ListingMap Sales Status
$(function(){
  $('.list-filter input').on('change', function(){
    $('.list-names').css("display" , "block");
    var check = [];
    $.each($("input[name='map-sale']:checked"), function(){
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
    $.each($("input[name='construction']:checked"), function(){
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
    $.each($("input[name='map-construction']:checked"), function(){
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
    $.each($("input[name='condoamenities']:checked"), function(){
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
    $.each($("input[name='map-condoamenities']:checked"), function(){
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
    $.each($("input[name='product']:checked"), function(){
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
    $.each($("input[name='map-product']:checked"), function(){
      check.push($(this).val()); 
    });
    $('#map-product').text(check.join(", "));
  })
})



$(function(){
  $('.reset').click(function(){
    $('#cityList,#neighbourhood,#sale,#construction,#occupancy,#condoamenities,#product,#promotion,#walk,#transit').empty();
    $('#pricerange,#price_too,#priceto,#psqft,#psqft_too,#psqftto,#bed,#bedto,#bed_too,#bath,#bath_too,#bathto,#sizesq,#sizesq_too,#sizesqto').empty();

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
    
    
  });
  
});
$(function(){
  $('.reset').click(function(){
    $('#mapCityList,#map-neighbourhood,#map-sale,#map-construction,#map-occupancy,#map-condoamenities,#map-product,#map-promotion,#map-walk,#map-transit').empty();
    $('#map-pricerange,#map-price_too,#map-priceto,#map-psqft,#map-psqft_too,#map-psqftto,#map-bed,#map-bedto,#map-bed_too,#map-bath,#map-bath_too,#map-bathto,#map-sizesq,#map-sizesq_too,#map-sizesqto').empty();

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
  });
  $("#min-price").select2("val", "");
  var maxPrice = [30000, 35000, 40000, 50000, 60000];
  $('#max-price').select2({
    data: maxPrice
  });
  var neighbourhoodForm = ['401 Business Park', 'Adjala-Tosorontio','Agincourt North, E07'];
  $('#neighbourhood-form').select2({
    data: neighbourhoodForm
  });
  var city = ['Torronto', 'Vaughan','Mississauga'];
  $('#city').select2({
    data: city
  });
  var beds = ['1', '1+','2','2+'];
  $('#beds').select2({
    data: beds
  });
  var baths = ['1', '1+','2','2+'];
  $('#baths').select2({
    data: baths
  });
  var landSize = ['1+ acres', '2+ acres','5+ acres','10+ acres','50+ acres'];
  $('#landSize').select2({
    data: landSize
  });
  var vipsales = ['VIP Sales', 'Coming Soon','Planning','Sold Out'];
  $('#vipsales').select2({
    data: vipsales
  });
  var constStatus = ['Pre Construction', 'Under Construction','Construction Complete'];
  $('#const-status').select2({
    data: constStatus
  });
  var occupancyForm = ['30 Days', '90 Days','6 Months','1 Year','18 Months','2 years'];
  $('#occupancy-form').select2({
    data: occupancyForm
  });
  var condo = ['Fitness', 'Party Room','Terrace','Other','Lounge','Concierge','Pool'];
  $('#condo').select2({
    data: condo
  });
  var prodType = ['Condow', 'Condow Hometown','Loft','Single Family','Townhome'];
  $('#prod-type').select2({
    data: prodType
  });
  var buildingTypes = ['House', 'Row / Townhouse','Apartment','Duplex','Triplex'];
  $('#buildingTypes').select2({
    data: buildingTypes
  });
  var keywords = ['Waterfront', 'Garage','Pool'];
  $('#keywords').select2({
    data: keywords
  });

})