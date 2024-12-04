let navLinks = document.querySelectorAll('#navlink')
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetSection = document.querySelector(link.getAttribute('href'))
        targetSection.scrollIntoView({ behavior: "smooth" })
    })
})