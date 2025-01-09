const formElement = document.querySelector("#contactform");
    if (formElement === null) {
        throw Error("Missing the form element 'contactform'");
    }


    formElement.addEventlistener("submit", async (event) => {
        event.preventDefault();

        //prevents submission from refreshing the page
    })

//form info    
const contactMessage = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
};

//sends the message to backend
const response = await fetch("/api/contactform",{
    method: "POST",
    body: JSON.stringify(contactMessage),
});

    if (response.ok) {
        formELement.reset();
    }
;