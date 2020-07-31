function sendMail(contactForm) {
    sendMailToCompany(contactForm);
    sendMailToUser(contactForm);
}
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
function sendMailToUser(contactForm) {
    emailjs.send("gmail", "roadmapsweden", {
        "from_name": På Vägen,
        "from_email": nathalie.zauels@gmail.com,
        "question_request": Thank you for your message. The På Vägen team will get in touch with you shortly.
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