function lightOn() {
    if (document.body.style.background !== "white") {
                document.body.style.background = "white";
                document.getElementById("colorChange1").style.color = "black";
                document.getElementById("colorChange2").style.color = "black";
                document.getElementById("colorChange3").style.color = "black";
                document.getElementById("colorChange4").style.color = "black";
                document.getElementById("colorChange5").style.color = "black";
                document.getElementById("colorChange6").style.color = "black";
                document.getElementById("colorChange7").style.color = "black";
                document.getElementById("colorChange8").style.color = "black";
            }
            else {
                document.body.style.background = "rgb(38, 38, 38)";
                document.getElementById("colorChange1").style.color = "white";
                document.getElementById("colorChange2").style.color = "white";
                document.getElementById("colorChange3").style.color = "white";
                document.getElementById("colorChange4").style.color = "white";
                document.getElementById("colorChange5").style.color = "white";
                document.getElementById("colorChange6").style.color = "white";
                document.getElementById("colorChange7").style.color = "white";
                document.getElementById("colorChange8").style.color = "white";
            }
}

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
        }

