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
	  gap: "30px",
	  pagination: true,
	  autoplay: true,
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
	}).mount();
  });