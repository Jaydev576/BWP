let cards = document.querySelectorAll('.previewBtn')

cards.forEach(item => {
    item.addEventListener('click', async () => {
        setTimeout(() => {
            // window.location.href = '/preview/theme1'
        }, 1200);
    })
})