let currentPage = 0;
let title = document.querySelector('.form_details h2');
let submitBtn = document.querySelector('.submit');
let inputBox = document.querySelectorAll('.dropbox_section input')
let Images = []

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
    ['Name_of_Business', 'Tagline'],
    ['product', 'city', 'establishedYear', 'additonalProduct'],
    ['betterQuality', 'customerSupport', 'experience'],
    ['Name1', 'testimonial1', 'Name2', 'testimonial2', 'Name3', 'testimonial3'],
    ['businessEmail', 'phone', 'address', 'calendyLink']
]


const switchMultiPage = (currentPage) => {
    title.innerHTML = `${tagLines[currentPage]}`;
    multiPage.map(item => {
        let x = document.querySelector(`.${item}`)
        x.style.display = 'none'
    })
    document.querySelector(`.${multiPage[currentPage]}`).style.display = 'block';
}
switchMultiPage(currentPage)




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
// Previous Page
document.querySelector('.prev_btn').addEventListener('click', () => {
    if (currentPage > 0) {
        document.querySelector('.next_btn').style.display = 'flex'
        currentPage -= 1; switchMultiPage(currentPage);
        currentPage == multiPage.length - 1 ? submitBtn.style.display = 'block' : submitBtn.style.display = 'none';
    }
})


// Checking each fields
const checkFields = (currentPage) => {
    let check = true;
    fields[currentPage].forEach(item => {
        let x = document.querySelector(`#${item}`);
        if (x.value == '') {
            x.parentElement.nextElementSibling.innerHTML = `${item.charAt(0).toUpperCase()}${item.slice(1)} is required`
            check = false;
        }
        else {
            x.parentElement.nextElementSibling.innerHTML = ``
        }
    })
    return check;
}