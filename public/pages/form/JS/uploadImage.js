let inputBox = document.querySelectorAll('.dropbox_section input')

const uploadImage = async (e) => {
    let image = e.target.files[0];
    let canvas = e.target.previousElementSibling;
    let labelcanvas = e.target.parentElement;
    canvas.style.opacity = "0";
    let imageUrl = URL.createObjectURL(image)
    labelcanvas.style.backgroundImage = `url(${imageUrl})`;
    labelcanvas.style.border = "2px solid black";
}

inputBox.forEach(item => {
    item.addEventListener('change', uploadImage)
})
