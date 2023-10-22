
	
  document.addEventListener( 'DOMContentLoaded', function () {
	const glavnaya = new Splide( '#main-carousel', {
	type      : 'fade',
	rewind    : false,
	pagination: false,
	arrows    : false,
	start  : 2,
	video: {
		  autoplay: true,
		  mute    : true,
	},
} );

	const mini = new Splide( '#thumbnail-carousel', {
	fixedWidth  : 150,
	fixedHeight : 80,
	gap         : 1,
	start:2,
	perMove: 1,
	rewind      : false,
	pagination  : false,
	isNavigation: true,
	focus:'2',
	snap   : false,
	autoplay: true,

	breakpoints : {
		1130: {
		fixedWidth : 150,
		fixedHeight: 100,
		},
		680: {
			fixedWidth : 120,
			fixedHeight: 70,
			},
		480: {
			fixedHeight:60,
			fixedWidth:100,
		}
	},
	} );

	glavnaya.sync(mini);
	glavnaya.mount( window.splide.Extensions );
	mini.mount( window.splide.Extensions );
} );


