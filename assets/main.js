// function getRandomElement(arr){ 
//     var a = arr[Math.floor(Math.random() * arr.length)];
//     return a;
// }
// console.log(getRandomElement([1,2,3,4,5]));


// function getCountElement(arr){
//     var obj = {};
//     var dem1 = 0;
//     var dem2 = 0;
//     var dem3 = 0;
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index]=="one"){
//             dem1++;
//         }else if(arr[index]=="two"){
//             dem2++;
//         }
//         else{
//             dem3++;
//         }
//     }
    
//     obj.one=dem1;
//     obj.two=dem2;
//     obj.three=dem3;
//     return obj;
// }
// console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout: 1000,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    // autoplay:true,
    autoplayTimeout: 1000,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})