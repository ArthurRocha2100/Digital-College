document.addEventListener('DOMContentLoaded', () => {
    loadHeaderComponent();
    loadFooterComponent();

})
    
function loadHeaderComponent() {
    fetch('/Modimal1/components/Header/Header.html')
    .then((response) => response.text())
    .then((data) => {
        const header = document.getElementById('headerComponent').innerHTML = data;
    })
    .catch((error) => {
        console.log(error);
    })
}


function loadFooterComponent() {
    fetch('/Modimal1/components/Footer/Footer.html')
    .then((response) => response.text())
    .then((data) => {
        const header = document.getElementById('footerComponent').innerHTML = data;
    })
    .catch((error) => {
        console.log(error);
    })
    
}