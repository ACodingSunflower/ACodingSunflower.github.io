const toggleNav = () => {
    const currentDisplay = document.getElementById('burgerMenu').style.display;
    if(currentDisplay === "block") {
        document.getElementById('burgerMenu').style.display = "none"
    } else {
        document.getElementById('burgerMenu').style.display = "block"
    }
}

const openNav = () => {
    document.getElementById('burgerMenu').style.display = 'block';
  }
  
  const closeNav = () => {
    document.getElementById("burgerMenu").style.display = "none";
  }