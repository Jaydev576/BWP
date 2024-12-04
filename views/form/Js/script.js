let currentPage = 0;
let title = document.querySelector('.form_details h2');
let submitBtn = document.querySelector('.submit');
let form = document.querySelector('.form-content')
let inputBox = document.querySelectorAll('.dropbox_section input')
let leftList = document.querySelectorAll('.left_list p')
let check;
const multiPage = [
    'business-details',
    'aboutus',
    'features',
    'testimonials',
    'contact-details'
];
const tagLines = [
    'Let\'s discuss about your business',
    'Exploring more in your business',
    'Why people trust you?',
    'Give some Testimonials',
    'Want more leads?'
];
const fields = [
    // For Checking Fields
    ['Name_of_Business', 'Tagline'],
    ['product', 'city', 'establishedYear', 'additionalProduct'],
    ['betterQuality', 'customerSupport', 'experience'],
    ['Name1', 'testimonial1', 'Name2', 'testimonial2', 'Name3', 'testimonial3'],
    ['businessEmail', 'phone', 'address', 'calendlyLink']
]

// Left list color change
const leftListColorTransition = (currentPage) => {
    // Clearing color
    for (let i = 0; i != leftList.length; i++) {
        leftList[i].style.color = `rgba(51,51,51, 0.796)`
        leftList[i].style.textDecoration = 'none'
    }
    // Set current page Color
    leftList[currentPage].style.color = 'black'
    leftList[currentPage].style.textDecoration = 'underline'
}

// Change the page of form
const switchMultiPage = (currentPage) => {
    title.innerHTML = `${tagLines[currentPage]}`;
    multiPage.map(item => {
        let x = document.querySelector(`.${item}`)
        x.style.display = 'none'
    })
    document.querySelector(`.${multiPage[currentPage]}`).style.display = 'block';
    leftListColorTransition(currentPage);
}
switchMultiPage(currentPage)


// Transition of Pages when all fields are satisfy its conditions
const transitionOfPages = () => {
    // Next Page
    document.querySelector('.next_btn').addEventListener('click', () => {
        if (currentPage < multiPage.length) {
            document.querySelector('.next_btn').style.display = 'flex'

            if (checkFields(currentPage)) {
                currentPage += 1; switchMultiPage(currentPage);
                currentPage == multiPage.length - 1 ? submitBtn.style.display = 'block' : submitBtn.style.display = 'none';
                if (currentPage == multiPage.length - 1) {
                    document.querySelector('.next_btn').style.display = 'none'
                }
            }
        }
    })
    // Submit Btn - For Last Page
    submitBtn.addEventListener('click', () => {
        document.querySelector('.next_btn').style.display = 'none'
        checkFields(multiPage.length - 1)
    })
    // Previous Page
    document.querySelector('.prev_btn').addEventListener('click', () => {
        if (currentPage > 0) {
            document.querySelector('.next_btn').style.display = 'flex'
            currentPage -= 1; switchMultiPage(currentPage);
            currentPage == multiPage.length - 1 ? submitBtn.style.display = 'block' : submitBtn.style.display = 'none';
        }
    })
}
transitionOfPages()


// Checking each fields
const checkFields = (currentPage) => {
    check = true;
    fields[currentPage].forEach(item => {
        let x = document.querySelector(`#${item}`);
        if (x.value == '') {
            // Check fields is empty or not
            x.parentElement.nextElementSibling.innerHTML = `${item.charAt(0).toUpperCase()}${item.slice(1)} is required`
            check = false;
        }
        else {
            // Check fields's condition
            switch (item) {
                case 'establishedYear': {
                    let year = new Date().getFullYear();
                    if (!(/^[0-9]{4}$/.test(x.value))) {
                        x.parentElement.nextElementSibling.innerHTML = `Year should be between 1000 - ${year}`;
                        check = false;
                    }
                    else if (parseInt(x.value) > year) {
                        x.parentElement.nextElementSibling.innerHTML = `Year should be less than ${year}`
                        check = false;
                    }
                    else
                        x.parentElement.nextElementSibling.innerHTML = ``
                    break;
                }
                case 'businessEmail': {
                    if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(x.value))) {
                        x.parentElement.nextElementSibling.innerHTML = `Email is invalid`;
                        check = false;
                    }
                    else
                        x.parentElement.nextElementSibling.innerHTML = ``
                    break;
                }
                case 'phone': {
                    if (!(/^[0-9]{1,}$/.test(x.value))) {
                        x.parentElement.nextElementSibling.innerHTML = `Phone Number should be Numerical`;
                        check = false;
                    }
                    else
                        x.parentElement.nextElementSibling.innerHTML = ``
                    break;
                }
                default:
                    x.parentElement.nextElementSibling.innerHTML = ``
                    break;
            }
        }
    })
    return check;
}

// ------------------------------------


const uploadImageOnCanvas = e => {
    let image = e.target.files[0];
    let canvas = e.target.previousElementSibling;
    let labelcanvas = e.target.parentElement;
    canvas.style.opacity = "0";
    let imageUrl = URL.createObjectURL(image)
    labelcanvas.style.backgroundImage = `url(${imageUrl})`;
    labelcanvas.style.border = "2px solid black";
}

// Give Cloudnary link of image uploaded
const uploadImage = async (e) => {
    //Uploading into Cloudinary
    if (e) {
        let image = e.files[0]
        const imageData = new FormData();
        imageData.append("file", image);
        imageData.append("upload_preset", 'webtree');

        const res = await fetch('https://api.cloudinary.com/v1_1/doeuywzyb/image/upload', {
            method: 'POST',
            body: imageData
        });
        const imageurl = await res.json();
        console.log(imageurl);
        return imageurl.url
    }
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
            console.log(url);
            formData[e.target[i].id] = url;
        }
        else
            formData[e.target[i].id] = e.target[i].value;
    }

    if (check) {
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
            window.location.href = resjson.redirectUrl;
        }, 100);
        e.target.reset()
    }
})


