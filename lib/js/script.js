jQuery.noConflict();
jQuery(function(){ 
	jQuery('ul.menu-primary').superfish({ 
	animation: {opacity:'show'},
autoArrows:  true,
                dropShadows: false, 
                speed: 200,
                delay: 800
                });
            });
jQuery('#top-menu-wrap').mobileMenu({
                defaultText: 'Menu',
                className: 'menu-primary-responsive',
                containerClass: 'menu-primary-responsive-container',
                subMenuDash: '&ndash;'
            });

jQuery(function(){ 
	jQuery('ul.menu-secondary').superfish({ 
	animation: {opacity:'show'},
autoArrows:  true,
                dropShadows: true, 
                speed: 200,
                delay: 800
                });
            });
jQuery('.menu-secondary-container').mobileMenu({
                defaultText: 'Navigation',
                className: 'menu-secondary-responsive',
                containerClass: 'menu-secondary-responsive-container',
                subMenuDash: '&ndash;'
            });
   
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
      });
    });