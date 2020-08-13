// Creating the function for the Email JS function for the contact form

function sendMail(contactForm) {
    sendMailToCompany(contactForm);
}
// creating the function for the send to with the information gathered from the contact form and connected to EMail JS
function sendMailToCompany(contactForm) {
    emailjs.send("gmail", "roadmapsweden", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "question_request": contactForm.questionsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
       
