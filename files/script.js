function menubazbaste() {

            var menubar = document.getElementById("menubar");
            if (rightarrow.style.display == "none") {
                rightarrow.style.display = "inherit";
                menubar.style.display = "none";
                menu.style.display = "block";
            } else {
                rightarrow.style.display = "none";
                menubar.style.display = "inherit";
                menu.style.display = "none";
            }
        }