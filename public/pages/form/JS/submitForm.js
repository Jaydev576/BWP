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
    //Uploading into Cloudinary
    let image = e.files[0];
    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("upload_preset", 'webtree');

    const res = await fetch('https://api.cloudinary.com/v1_1/doeuywzyb/image/upload', {
        method: 'POST',
        body: imageData
    });
    const imageurl = await res.json();
    return imageurl.url;
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
            let url = await uploadImage(e.target[i]);
            formData[e.target[i].id] = url;
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
        console.log(resjson);
        // window.location.href = resjson.redirectUrl;
    }, 100);
    e.target.reset()
})
