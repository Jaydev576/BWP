let form = document.querySelector('.form')
let errorMess = document.querySelector('.errortext')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let formData = {
        "type": document.querySelector('.button-submit').value,
        "email": e.target[0].value,
        "password": e.target[1].value
    }



    //Fetching login 
    let res = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let resjson = await res.json();
    console.log(resjson);

    if (resjson.statusCode == 404) {
        errorMess.style.display = 'block';
        errorMess.innerHTML = resjson.message;
    }
    else {
        e.target.reset()
        errorMess.style.display = 'none';
        window.location.href = resjson.redirectUrl;
    }
})