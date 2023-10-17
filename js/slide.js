
	
	document.addEventListener( 'DOMContentLoaded', function () {
		const glavnaya = new Splide( '#main-carousel', {
		type      : 'fade',
		rewind    : true,
		pagination: false,
		arrows    : false,
	} );
	
		const mini = new Splide( '#thumbnail-carousel', {
		fixedWidth  : 150,
		fixedHeight : 80,
		gap         : 1,
		start:'2',
		perMove: 1,
		rewind      : false,
		pagination  : false,
		isNavigation: true,
		focus:'2',
		snap   : false,
		autoplay: true,

		breakpoints : {
			600: {
			fixedWidth : 60,
			fixedHeight: 44,
			},
		},
		} );
	
		glavnaya.sync(mini);
		glavnaya.mount( window.splide.Extensions );
		mini.mount( window.splide.Extensions );

		const closeModalButton = document.getElementById("closeModalButton");
		const modal = document.getElementById("myModal");
		const overlay = document.getElementById("overlay");


		// mini.on('arrows:updated', function  (prev, next, prevIndex, nextIndex) {
		//
		// 		next.addEventListener('click', function () {
		// 			modal.style.display = "block";
		// 			closeModalButton.style.display = "block";
		// 			overlay.style.display = "block"; 
		// 			next.removeEventListener('click',arguments.callee);
		// 		}
		// );
		
		// closeModalButton.onclick = function () {
		// 	closeModal();
		// };
		// overlay.onclick = function () {
		// 	closeModal();
		// };
		
		// function closeModal() {
		// 	modal.style.display = "none";
		// 	closeModalButton.style.display = "none";
		// 	overlay.style.display = "none"; // 
		// }
	} );

	

