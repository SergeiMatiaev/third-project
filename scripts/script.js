const burgerMenu = document.getElementById('burgerMenu')
const mobileMenu = document.getElementById("mobileBloсk")
const menuClouse = document.getElementById("menuClouse")


burgerMenu.onclick = function () 
{ mobileMenu.style.display = 'flex'

}
   
menuClouse.onclick = function ()
{mobileMenu.style.display = 'none'
}


alert(mobileMenu)
