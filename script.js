const menuuToggle = document.querySelector('.menuu-toggle input');
const nav = document.querySelector('nav ul');

menuuToggle.addEventListener('click', function () {
	nav.classList.toggle('slide');
});


$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100){
   		$("nav").css({"background-color" : "#161515"})
	}
  else {
      $("nav").css({"background-color" : "rgba(22,21,21,0.5)" })
  }
  })
})
