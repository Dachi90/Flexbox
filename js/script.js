

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("wrapper").style.top = "0";
  } else {
    document.getElementById("wrapper").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



// $(document).ready(function(){
//     $("#burger").click(function(){
//         $("#enlaces").toggle();
//     });
// });
// $(document).ready(function(){
// 	$('#burger').click(function(){
// 	  if ( $('#navbar_links').css('visibility') == 'hidden' )
// 	    $('#navbar_links').css('visibility','visible');
// 	  else
// 	    $('#navbar_links').css('visibility','hidden');
// 	});
// });