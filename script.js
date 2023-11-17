//your JS code here. If required.
function submitForm() {
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let phoneNumber = document.getElementById("phoneNumber").value;
            let email = document.getElementById("email").value;

            let result = "First Name: " + firstName + "\n" +
                         "Last Name: " + lastName + "\n" +
                         "Phone Number: " + phoneNumber + "\n" +
                         "Email ID: " + email;

            alert(result);
        }