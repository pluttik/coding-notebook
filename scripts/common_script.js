/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

var scrollLast = window.scrollY;
var elTop = header.getBoundingClientRect().top;
window.addEventListener( 'scroll', function() {
    var wHeight = document.documentElement.clientHeight;
    var dHeight = document.body.offsetHeight;
    var elHeight = header.offsetHeight;
    console.log(wHeight,dHeight,elHeight); //637,791,118
    var scrollCurrent = window.scrollY;
    var scrollDiff = scrollCurrent - scrollLast;
    console.log('elTop=',elTop);
    if( scrollCurrent <= 0 ) {// scrolled to the very top; element sticks to the top
        header.style.top = '0px';
        console.log('one');
    }
    else if( scrollDiff < 0 ) {// scrolled up; element slides in
        console.log('two',scrollDiff);
        header.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';
    }
    else if( scrollDiff > 0 ) {// scrolled down
        console.log('three');
        if( scrollCurrent >= dHeight ) {// scrolled to the very bottom; element slides in
            console.log('threeAAA',scrollCurrent + wHeight, dHeight - elHeight);
            header.style.top = ((elTop = scrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';
            console.log(header.style.top);
        }
        else {// scrolled down; element slides out
            //header.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
            header.style.top = '-' + Math.abs(elHeight) + 'px';
            console.log('threeBBB',scrollCurrent,header.style.top);
        }
    }
    scrollLast = window.scrollY;
    //...
},true);