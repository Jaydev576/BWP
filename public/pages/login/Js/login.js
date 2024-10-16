let form = document.querySelector('.form')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let formData = {
        "email": e.target[0].value,
        "password": e.target[1].value
    }
    e.target.reset()

    setTimeout(async () => {
        //Fetching login 
        let res = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let resjson = await res.json();
        window.location.href = resjson.redirectUrl;
    }, 1000);

})