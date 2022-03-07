document.getElementById("menu-icon").addEventListener("click", ()=>{
    if(document.getElementById("nav-links").classList.contains("active")) {
        document.getElementById("nav-links").classList.remove("active");
    } else {
        document.getElementById("nav-links").classList.add("active");
    }
});