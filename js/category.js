document.addEventListener('DOMContentLoaded', function () {
	new Splide('#new-product', {
	  perPage: 1,
	  perMove: 1,
	  type:'loop',
	  drag   : 'free',
	  snap   : true,
	  pagination: true,
	  autoplay: true,
	  
	}).mount();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
	new Splide('#featured-product', {
	  perPage: 4,
	  perMove: 1,
	  type:'loop',
	  snap   : true,
	  gap: "10px",
	  pagination: true,
	  autoplay: true,
	  breakpoints: {
		1050: {
			perPage: 3,
		},
		715: {
			perPage: 2,
		},
		480: {
			perPage: 1,
		},
	  }
	}).mount();
  });

  document.addEventListener('DOMContentLoaded', function () {
	new Splide('#second-product', {
	  perPage: 4,
	  perMove: 4,
	  type      : 'slide',
	  drag:false,
	  isNavigation: false,
	  snap   : false,
	  gap: 10,
	  pagination: true,
	  breakpoints: {
		1050: {
			perPage: 3,
			perMove: 3,
		},
		715: {
			perPage: 2,
			perMove: 2,
		},
		480: {
			perPage: 1,
			perMove: 1,
		},
  }
	}).mount();
  });