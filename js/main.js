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
        document.getElementsByClassName("scroll")[0].style.transform = "rotate(180deg)"
    }else
    {
        // Show Navbar
        document.getElementsByClassName("header")[0].style.opacity = 1;
        document.getElementsByClassName("scroll")[0].style.transform = "rotate(0deg)"
    }
}

function thisEventListener()
{
    window.addEventListener('scroll', hideBar)
    {
    }
}

window.onscroll = function()
{
    var yPosition = window.scrollY;
    var maxScrollHeight = $(document).height() - $(window).height();

    percentage = (yPosition * 100) / maxScrollHeight;

    if(percentage > 96)
    {
        percentage = 96;
    }
    if(percentage < 1)
    {
        percentage = 1;
    }

    document.getElementsByClassName("scroll")[0].style.top = percentage+"vh";
}