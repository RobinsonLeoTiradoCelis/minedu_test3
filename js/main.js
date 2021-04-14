$(document).ready(function() {	

	$('.btn-programa').click(function(){
		var data_tab = $(this).attr('data-toggle');
		
		$(this).parents(".content-item-programa").find('.bloque-cursos-nivel').hide();
		$(this).parents(".content-item-programa").find('.bloque-programa-detalle').show();
		$('.prog-tab-link').removeClass('tab-active');
		$('.prog-tab-body').removeClass('tab-active');
		$(".prog-tabs").find('[data-tab="'+data_tab+'"]').addClass('tab-active');
        $("#"+data_tab).addClass('tab-active');
		
	});

	 /*TABS*/
    $('.prog-tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');
		$(this).siblings().removeClass('tab-active');
		$(this).parents(".prog-container-tabs").find('.prog-tab-body').removeClass('tab-active');
		$(this).addClass('tab-active');
		$("#"+tab_id).addClass('tab-active');
	});
	
	$('.prog-tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');
		$(this).siblings().removeClass('tab-active');
		$(this).parents(".prog-container-tabs").find('.prog-tab-body').removeClass('tab-active');
		$(this).addClass('tab-active');
		$("#"+tab_id).addClass('tab-active');
	});

    $('.nav-pills').click(function(){
		$(".content-item-programa").show();
		$('.bloque-cursos-nivel').show();
		$('.bloque-programa-detalle').hide();
	});

	$(".card-accordion-grupo").click(function(){
      $(this).siblings(".collapse-accordion-grupo").slideToggle('slow');
      $(this).toggleClass('acordion_active');
    });
	 

     

});

