$(function() {
		   
	//$('ul.number').html('');
	$('ul.tab').html('');
	
	$('div.slideshow').cycle({
						  
		fx:'fade',
		speed: 400,
		timeout: 3000,
		after: onAfter,
		pager: '.tab',
		activePagerClass: 'active',
		pagerAnchorBuilder:function(index, DOMelement) {
			
			if (index == 0) {
				
				return '<li><a href="#"><img src="common/images/small_thumb1.jpg" alt="" /></a><span></span></li>';
			
			}
			else if (index == 1) {
				
				return '<li><a href="#"><img src="common/images/small_thumb2.jpg" alt="" /></a><span></span></li>';
				
			}
			else if (index == 2) {
				
				return '<li><a href="#"><img src="common/images/small_thumb3.jpg" alt="" /></a><span></span></li>';
				
			}
			else if (index == 3) {
				
				return '<li><a href="#"><img src="common/images/small_thumb4.jpg" alt="" /></a><span></span></li>';
				
			}
			else if (index == 4) {
				
				return '<li><a href="#"><img src="common/images/small_thumb5.jpg" alt="" /></a><span></span></li>';
				
			}
			
		}
		
	});
	
	$('ul.number li').click(function() {
		
		$('ul.number li').removeClass('active');
		
		var curIndex = $(this).index();
		
		$('div.slideshow').cycle(curIndex);
		$(this).addClass('active');
		
		return false;
		
	});
	
});

function onAfter(curr, next, opts) {

 	var index = opts.currSlide;

	$('ul.number li').removeClass('active');
	$('ul.number li').eq(index).addClass('active');
	
}
 