let form = document.querySelector('.form-content')

// Give Cloudnary link of image uploaded
const uploadImageOnCanvas = e => {
    let image = e.target.files[0];
    let canvas = e.target.previousElementSibling;
    let labelcanvas = e.target.parentElement;
    canvas.style.opacity = "0";
    let imageUrl = URL.createObjectURL(image)
    labelcanvas.style.backgroundImage = `url(${imageUrl})`;
    labelcanvas.style.border = "2px solid black";
}
const uploadImage = async (e) => {
    // upload on cloudnary
    let image = e.files[0];
    let imageUrl = URL.createObjectURL(image)
    return `www.cloudnary/${imageUrl}`
}
inputBox.forEach(item => {
    item.addEventListener('change', uploadImageOnCanvas)
})

// Form submission
form.addEventListener('submit', async (e) => {
    let formData = {}
    e.preventDefault()
    for (let i = 0; i != e.target.length - 1; i++) {
        if (i >= 0 && i <= 3) {
            if (e.target[i].checked)
                formData['theme'] = e.target[i].value;
        }
        else if (i == 4 || i == 5 || i == 13 || i == 15 || i == 17) {
            formData[e.target[i].id] = 'https://res.cloudinary.com/doeuywzyb/image/upload/v1726820480/pxiui0j4h8uq5yu285vq.jpg';
            // formData[e.target[i].id] = await uploadImage(e.target[i]);
        }
        else
            formData[e.target[i].id] = e.target[i].value;
    }

    setTimeout(async () => {
        //Fetching form 
        let res = await fetch('/form', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let resjson = await res.json();
        window.location.href = resjson.redirectUrl;
    }, 1000);
    e.target.reset()
})
