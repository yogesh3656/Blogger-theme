window.addEventListener("load", function(){
  document.querySelectorAll(".post-body table").forEach(function(table){
    if (!table.parentNode.classList.contains("table-responsive")) {
      var wrapper = document.createElement("div");
      wrapper.className = "table-responsive";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });
});

//------------------------"table finished"/"floating btn start"----------------------------------
// Get the button
let mybutton = document.getElementById(&quot;myBtn&quot;);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop &gt; 20 || document.documentElement.scrollTop &gt; 20) {
    mybutton.style.display = &quot;block&quot;;
  } else {
    mybutton.style.display = &quot;none&quot;;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
