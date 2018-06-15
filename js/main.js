$(function(){
  $('.selection__parts ul').hide();
  $('.selection__parts a').on('click', function() {
  	var ul = $(this).next('ul');
	if(ul.length) {
    	ul.slideToggle(500);
    	return false;
    }
  });
});
