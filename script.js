const enquiryForm =
    document.getElementById("enquiryForm");

const formMessage =
    document.getElementById("formMessage");


enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get form values

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const company =
        document.getElementById("company").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("messageBox").value.trim();



    // Validation

    if (
        !name ||
        !email ||
        !phone ||
        !service ||
        !message
    ) {

        formMessage.textContent =
            "Please fill in all required fields.";

        formMessage.style.color =
            "#b14b4b";

        return;

    }



    // Email subject

    const subject =
        encodeURIComponent(
            "Business Enquiry - " + service
        );



    // Email body

    const body =
        encodeURIComponent(

            "NEW BUSINESS ENQUIRY\n\n" +

            "Name: " +
            name +
            "\n" +

            "Email: " +
            email +
            "\n" +

            "Phone: " +
            phone +
            "\n" +

            "Company / Organization: " +
            (company || "Not provided") +
            "\n" +

            "Enquiry Type: " +
            service +
            "\n\n" +

            "Message:\n" +
            message

        );



    // Success message

    formMessage.textContent =
        "Your enquiry is ready. Opening your email application...";

    formMessage.style.color =
        "#355f4b";



    // Open email application

    window.location.href =
        "mailto:abhilashagroup2007@gmail.com" +

        "?subject=" +
        subject +

        "&body=" +
        body;

});