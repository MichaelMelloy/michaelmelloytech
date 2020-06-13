var lastScrollPosition = 0;
var currentScrollPosition = 0;

function hideBar() 
{

    lastScrollPosition = currentScrollPosition;
    currentScrollPosition = window.scrollY;

    if(currentScrollPosition > lastScrollPosition)
    {
        // Hide Navbar
        document.getElementsByClassName("header")[0].style.opacity = 0;
    }else
    {
        // Show Navbar
        document.getElementsByClassName("header")[0].style.opacity = 1;
    }
}

function thisEventListener()
{
    window.addEventListener('scroll', hideBar)
    {
    }
}