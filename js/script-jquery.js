jQuery(document).ready(function($){
	/************************************************************************
	INPUT OF DISCUSSIONS	
	*************************************************************************/
	//Opens the list of discussions mobile version
	$('.see-discussions-mobile').click(function(event){
		$('.inv-list-discussions').animate({'right': '0px'}, 'slow');	
		$('.black-background').fadeIn(1000);
		$('.input-discussions-true').hide(1, function(){
			$('.input-discussions-false').show(1);	
		});
	});

	//Closes the list of discussions mobile version
	$('.close-input-discussions').click(function(event){
		$('.inv-list-discussions').animate({'right':'-100%'}, 'slow');
		$('.black-background').fadeOut();
	});

	$('.black-background').click(function(event){
		$('.inv-list-discussions').animate({'right':'-100%'}, 'slow');
		$(this).fadeOut();
	});

	//Open the input of discussion true and closes the false
	$('.input-discussions-false').click(function(event){
		$(this).slideUp('fast', function(){
			$(this).parents('.input-discussions').find('.input-discussions-true').slideDown(500);
		});
	});

	//Closes the input of discussion true and opens the false
	$('.close-input-discussion-true').click(function(event){
		event.preventDefault();
		$(this).parents('.input-discussions').find('.input-discussions-true').slideUp('slow', function(){
			$(this).parents('.input-discussions').find('.input-discussions-false').slideDown('slow');
			$('.textarea').empty();
		});
	});


	/************************************************************************
	MODAL OF NOTES	
	*************************************************************************/
	//Open the modal of notes
	$(".fa-sticky-note").click(function(event){
		$('.modal-notes').fadeIn('fast');
		$('html').css({'overflow':'hidden'});
	});

	//Close the modal of notes
	$(".header-modal-notes .fa-times").click(function(event){
		$('.modal-notes').fadeOut('fast');
		$('html').css({'overflow':'auto'});
	});

	/************************************************************************
	MODAL OF QUESTION AND ANSWERS	
	*************************************************************************/
	//Open the model of the question and answers
	$(".discussion-title-tags h4").click(function(event){
		event.preventDefault();
		$('.modal-question-answers').fadeIn('fast');
		$('html').css({'overflow':'hidden'});
	});

	//Close the model of the question and answers
	$(".close-modal-question-answers").click(function(event){
		$('.modal-question-answers').fadeOut('fast');
		$('html').css({'overflow':'auto'});
	});

	//Open the coment of the response
	$(".comentTheResponse-question").click(function(){
		$(this).parents(".inv-content-question").find(".inv-input-comentTheResponse").slideDown(500);
		$(this).parents(".inv-content-question").find('.input-comentTheResponse').focus();
	});

	//Close the comment of the response
	$(".inv-buttons-comentTheResponse a").click(function(){
		event.preventDefault();
		$(this).parents(".inv-content-question").find(".inv-input-comentTheResponse").slideUp(500, function(){
			$(this).parents(".inv-content-question").find('.input-comentTheResponse').empty();
		});
	});

	/************************************************************************
	INTERACTION OF VIDEO CLASS	
	*************************************************************************/
	$(".discussions").click(function(event){
		if(!$(this).hasClass("interaction-option-selected")){
			$(this).parents(".menu-interactionOfClass").find(".op-menu-interactionOfClass div").removeClass("interaction-option-selected");
			$(this).parents(".menu-interactionOfClass").find(".fa-chevron-up").hide();
			$(this).addClass("interaction-option-selected");
			$(this).parents(".op-menu-interactionOfClass").find(".fa-chevron-up").show();
			$(this).parents(".inv-interactionOfClass").find(".content-interaction").hide();
			$(this).parents(".inv-interactionOfClass").find(".inv-content-discussions").show();
		}
	});
	$(".exercises").click(function(event){
		if(!$(this).hasClass("interaction-option-selected")){
			$(this).parents(".menu-interactionOfClass").find(".op-menu-interactionOfClass div").removeClass("interaction-option-selected");
			$(this).parents(".menu-interactionOfClass").find(".fa-chevron-up").hide();
			$(this).addClass("interaction-option-selected");
			$(this).parents(".op-menu-interactionOfClass").find(".fa-chevron-up").show();
			$(this).parents(".inv-interactionOfClass").find(".content-interaction").hide();
			$(this).parents(".inv-interactionOfClass").find(".inv-content-exercises").show();
		}
	});

	$(".files").click(function(event){
		if(!$(this).hasClass("interaction-option-selected")){
			$(this).parents(".menu-interactionOfClass").find(".op-menu-interactionOfClass div").removeClass("interaction-option-selected");
			$(this).parents(".menu-interactionOfClass").find(".fa-chevron-up").hide();
			$(this).addClass("interaction-option-selected");
			$(this).parents(".op-menu-interactionOfClass").find(".fa-chevron-up").show();
			$(this).parents(".inv-interactionOfClass").find(".content-interaction").hide();
			$(this).parents(".inv-interactionOfClass").find(".inv-content-files").show();
		}
	});

	$(".links").click(function(event){
		if(!$(this).hasClass("interaction-option-selected")){
			$(this).parents(".menu-interactionOfClass").find(".op-menu-interactionOfClass div").removeClass("interaction-option-selected");
			$(this).parents(".menu-interactionOfClass").find(".fa-chevron-up").hide();
			$(this).addClass("interaction-option-selected");
			$(this).parents(".op-menu-interactionOfClass").find(".fa-chevron-up").show();
			$(this).parents(".inv-interactionOfClass").find(".content-interaction").hide();
			$(this).parents(".inv-interactionOfClass").find(".inv-content-links").show();
		}
	});

	$(".github").click(function(event){
		if(!$(this).hasClass("interaction-option-selected")){
			$(this).parents(".menu-interactionOfClass").find(".op-menu-interactionOfClass div").removeClass("interaction-option-selected");
			$(this).parents(".menu-interactionOfClass").find(".fa-chevron-up").hide();
			$(this).addClass("interaction-option-selected");
			$(this).parents(".op-menu-interactionOfClass").find(".fa-chevron-up").show();
			$(this).parents(".inv-interactionOfClass").find(".content-interaction").hide();
			$(this).parents(".inv-interactionOfClass").find(".inv-content-github").show();
		}
	});

	/************************************************************************
	CAREERS
	*************************************************************************/
	$('.tt-topic').click(function(event){
		if(!$(this).hasClass('open-topic-course')){
			$(this).parents('.list-program-course').find('.list-class-program-content').slideUp(500);
			$(this).parents('.program-course').find('.list-class-program-content').slideDown(500);
			$(this).parents('.list-program-course').find('.tt-topic').removeClass('open-topic-course');
			$(this).addClass('open-topic-course');
		}
	});

	/************************************************************************
	MODAL - EXPLANATION NUBLEI TV
	*************************************************************************/
	// Open the explantaion nublei tv
	$('.open-modal-explanation-nubleitv').click(function(event){
		$('.modal-explanation-nubleitv').fadeIn('slow');
	});

	//Close the explanation nublei tv
	$('.close-modal-explanation-nubleitv').click(function(event){
		$('.modal-explanation-nubleitv').fadeOut('fast');
	});

	/************************************************************************
	MODAL - CONTENT OF VIDEO NUBLEI TV
	*************************************************************************/
	// Open the modal of video of the nublei tv
	$('.open-modal-video-nubleitv').click(function(event){
		$('.modal-video-nubleitv').fadeIn('slow');
	});

	//Close the modal of video of the nublei tv
	$('.close-modal-video-nubleitv').click(function(event){
		$('.modal-video-nubleitv').fadeOut('fast');
	});

	/************************************************************************
	NUBLEI TV
	*************************************************************************/
	$('.list-menu-nubleiTv li').click(function(event){
		if(!$(this).hasClass('menu-selected-nubleitv')){
			$(this).parents('.menu-nubleiTv').find('.list-menu-nubleiTv li').removeClass('menu-selected-nubleitv');
			$(this).addClass('menu-selected-nubleitv');
		}
	});
});