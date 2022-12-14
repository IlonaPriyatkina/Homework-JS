const hiddenMenu = document.querySelector(".header__navigator");
const btnHiddenMenu = document.querySelector(".header__navigator-button");


btnHiddenMenu.addEventListener('click', function(){
	
	hiddenMenu.classList.toggle('active');
})