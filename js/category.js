document.addEventListener('DOMContentLoaded', function () {
	new Splide('#new-product', {
	  perPage: 1,
	  perMove: 1,
	  type:'loop',
	  gap: "30px",
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