
// Initialize your app
var myApp = new Framework7();

var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination'
      });

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


var myApp = new Framework7(); 
 
var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});             

var myApp = new Framework7();
 
var $$ = Dom7;
 
$$('.accordion-item').on('opened', function () {
 
}); 
 
$$('.accordion-item').on('closed', function (e) {
  
}); 

var myApp = new Framework7();
 
var $$ = Dom7;
 
$$('.alert-text').on('click', function () {
    myApp.alert('只在电脑端显示');
});
 
$$('.alert-text-title').on('click', function () {
    myApp.alert('请用电脑登陆', '只在电脑端显示');
});
 
$$('.alert-text-title-callback').on('click', function () {
    myApp.alert('Here goes alert text', 'Custom Title!', function () {
        myApp.alert('Button clicked!')
    });
});
 
$$('.alert-text-callback').on('click', function () {
    myApp.alert('Here goes alert text', function () {
        myApp.alert('Button clicked!')
    });
});