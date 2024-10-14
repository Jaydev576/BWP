
let currentPage = 0;
let title = document.querySelector('.form_details h2');
let submitBtn = document.querySelector('.submit');

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

const switchMultiPage = (currentPage) => {
    title.innerHTML = `${tagLines[currentPage]}`;
    multiPage.map(item => {
        let x = document.querySelector(`.${item}`)
        x.style.display = 'none'
    })
    document.querySelector(`.${multiPage[currentPage]}`).style.display = 'block';
}
switchMultiPage(currentPage)

document.querySelector('.next_btn').addEventListener('click', () => {
    if (currentPage < multiPage.length) {

        document.querySelector('.next_btn').style.display = 'flex'

        currentPage += 1; switchMultiPage(currentPage);

        currentPage == multiPage.length - 1 ? submitBtn.style.display = 'block' : submitBtn.style.display = 'none';
        if (currentPage == multiPage.length - 1) {
            document.querySelector('.next_btn').style.display = 'none'
        }
    }
})
document.querySelector('.prev_btn').addEventListener('click', () => {
    if (currentPage > 0) {
        document.querySelector('.next_btn').style.display = 'flex'
        currentPage -= 1; switchMultiPage(currentPage);
        currentPage == multiPage.length - 1 ? submitBtn.style.display = 'block' : submitBtn.style.display = 'none';
    }
})