const toggleNav = () => {
    const currentDisplay = document.getElementById('burgerMenu').style.display;
    if(currentDisplay === "block") {
        document.getElementById('burgerMenu').style.display = "none";
        //display lines
        document.getElementById('closedMenu').src = "./images/burger.svg";

    } else {
        document.getElementById('burgerMenu').style.display = "block";
        //display cross
        document.getElementById('closedMenu').src = "./images/x.png";
    }
}

const openNav = () => {
    document.getElementById('burgerMenu').style.display = "block";
}
  
  const closeNav = () => {
    document.getElementById("burgerMenu").style.display = "none";
}