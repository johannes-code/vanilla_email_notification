
const contactMessage = {
    email: "bjottleif@not.home",
    message: "not at home",

};

const response = await fetch("/api/contactform",{
    method: "POST",
    body: JSON.stringify(contactMessage),

});
const data = await response.text()

console.log(data)