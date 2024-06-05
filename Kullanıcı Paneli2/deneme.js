document.addEventListener("DOMContentLoaded", function() {
      var flipCheckbox = document.getElementById("flip");
      var coverDiv = document.querySelector(".cover");
  
      flipCheckbox.addEventListener("change", function() {
          if (flipCheckbox.checked) {
              coverDiv.style.transition = "transform 1s ease-in-out, background-color 1.5s ease-in-out"; // Geçiş efekti
              coverDiv.style.transform = "translateX(-100%)"; // Cover divini sola kaydır
              coverDiv.style.backgroundColor = "white"; // Renk değiştirme
          } else {
              coverDiv.style.transition = "transform 1s ease-in-out, background-color 1.5s ease-in-out"; // Geçiş efekti
              coverDiv.style.transform = "translateX(5%)"; // Cover divini sağa kaydır
              coverDiv.style.backgroundColor = " #7d2ae8"; // Renk değiştirme
          }
      });
  });




  