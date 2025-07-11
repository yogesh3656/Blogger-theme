
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

