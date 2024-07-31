const btnSubmit = document.querySelector("button");
const form = document.querySelector("form");
const datas = {  
};

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password === "") {
        alert('All form fields must be filled in');
    } else {
        datas.email = email;
        datas.password = password;
        console.log(datas);
        form.reset();
    }
    
});

