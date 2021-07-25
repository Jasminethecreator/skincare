function toggleDarkMode() {
   let background = document.getElementById ("bg");
    if(background.style.background === "black"){
        background.style.background = "white";
    } else {
        background.style.background = "black";
    }
}
