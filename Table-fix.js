
  document.addEventListener("DOMContentLoaded", function () {
    var tables = document.querySelectorAll("table:not([class])");
    tables.forEach(function (table) {
      // Prevent wrapping if already inside a scroll container
      if (table.parentElement.classList.contains("table-scroll")) return;

      var wrapper = document.createElement("div");
      wrapper.className = "table-scroll";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  });
