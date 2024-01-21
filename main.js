import './style.css'
import {showPopup} from './popup.js'
import {hidePopup} from './popup-hide.js'


document.addEventListener("DOMContentLoaded", function () {
  // Drop Down Menu Event for Pages
  const dropDown = document.getElementById("drop-down");
  const dropDownMenu = document.getElementById("drop-down_menu");

  dropDown.addEventListener("click", dropDownList);

  // Event Handeler Function
  function dropDownList() {
    if (dropDownMenu.classList.contains("hidden")) {
      dropDownMenu.classList.remove("hidden");
    } else {
      dropDownMenu.classList.add("hidden");
    }
  }

  // Drop Down Menu Event for Pages End

// Humburger Menu control 
  const menuBar = document.getElementById("menu");
  const navBar = document.getElementById("nav-bar");

  function setNavBarState(isVisible) {
    localStorage.setItem("navBarVisible", isVisible);
  }
  function getNavBarState() {
    return localStorage.getItem("navBarVisible") === "true";
  }
  const initialNavBarState = getNavBarState();
  navBar.classList.toggle("hidden", !initialNavBarState);
  navBar.classList.toggle("w-full", initialNavBarState);

  function updateNavBar() {
    if (window.innerWidth < 1024) {
      menuBar.addEventListener("click", toggleNavBar);
    } else {

      menuBar.removeEventListener("click", toggleNavBar);

      navBar.classList.remove("w-full");
      navBar.classList.add("hidden");
      setNavBarState(false);
    }
  }
  function toggleNavBar() {
    navBar.classList.toggle("hidden");
    const isNavBarVisible = !navBar.classList.contains("hidden");
    navBar.classList.toggle("w-full", isNavBarVisible);
    setNavBarState(isNavBarVisible);
  }
  updateNavBar();
window.addEventListener("resize", updateNavBar);

// Humburger Menu Ends
const overlay = document.getElementById('overlay');
const loginContainer = document.getElementById("pop-out");
const popOutButtonDesktop = document.getElementById("lg-member_login_desktop");
const popOutButtonMobile = document.getElementById("lg-member_login_mobile");
const removePopOut = document.getElementById("remove");

function setLoginContainerState(isVisible) {
  localStorage.setItem("loginContainerVisible", isVisible);
}

function getLoginContainerState() {
  return localStorage.getItem("loginContainerVisible") === "true";
}

const initialLoginContainer = getLoginContainerState();


loginContainer.classList.toggle("hidden", !initialLoginContainer);
overlay.classList.toggle('hidden',!initialLoginContainer)
loginContainer.style.transitionDuration = initialLoginContainer ? "500ms" : "0ms";
loginContainer.style.transform = initialLoginContainer ? "translateX(0)" : "translateX(100%)";

function toggleLoginContainer() {
 
  loginContainer.classList.toggle("hidden");
  overlay.classList.toggle('hidden')

  const isLoginContainerVisible = !loginContainer.classList.contains("hidden")
  setLoginContainerState(isLoginContainerVisible);

  loginContainer.style.transitionDuration = loginContainer.classList.contains("hidden") ? "0ms" : "500ms";
  loginContainer.style.transform = loginContainer.classList.contains("hidden") ? "translateX(100%)" : "translateX(0)";
}

// Event listeners for both buttons
popOutButtonDesktop.addEventListener("click", toggleLoginContainer);
popOutButtonMobile.addEventListener("click", toggleLoginContainer);

removePopOut.addEventListener("click", function () {
  loginContainer.classList.toggle("hidden");
  overlay.classList.toggle('hidden')
  setLoginContainerState(false);
});


  // Close the login container when clicking outside of it
  document.addEventListener("click", function (e) {
    if (
      !loginContainer.contains(e.target) &&
      e.target !== popOutButtonDesktop &&
      e.target !== popOutButtonMobile
    ) {
      loginContainer.classList.add("hidden");
    }
    if (!dropDownMenu.classList.contains(e.target) && e.target !== dropDown) {
      dropDownMenu.classList.add("hidden");
    }
    });
    
    var words = document.querySelectorAll(".text-custom2 .word");
    var currentWord = 0;

setInterval(function () {
    words[currentWord].classList.remove("opacity-100", "translate-y-0");
    words[currentWord].classList.add("opacity-0", "-translate-y-3");
    currentWord = (currentWord + 1) % words.length;
    words[currentWord].classList.remove("opacity-0", "-translate-y-3");
    words[currentWord].classList.add("opacity-100", "translate-y-0");
}, 2000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

});

const popupContainer = document.querySelectorAll('.person-container')

popupContainer.forEach(item =>{
  
    if(showPopup){
      item.addEventListener('mouseenter',function(){
        showPopup(item)
      }) 
    }
    if(hidePopup){
      item.addEventListener('mouseleave',function(){
        hidePopup(item)
      }) 
    }
  
})
