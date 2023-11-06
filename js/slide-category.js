
	
  document.addEventListener( 'DOMContentLoaded', function () {
	const main = new Splide( '#main-carousel', {
	type      : 'fade',
	rewind    : true,
	pagination: false,
	arrows    : false,

} );

	const pocket = new Splide( '#thumbnail-carousel', {
	perMove: 1,
	rewind      : true,
	pagination  : true,
	snap   : false,

    });

	main.sync(pocket);
	main.mount();
	pocket.mount();
} );
document.addEventListener('DOMContentLoaded', function(){
	const media = new Splide ('#media-carousel', {
		type    : 'loop',
		rewind    : true,
		pagination: true,
		arrows    : false,
	})
	media.mount();
})


