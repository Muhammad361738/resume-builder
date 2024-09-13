var form = document.getElementById("resume");
var displayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect ionput values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //   generate the resume dynamically
    var resumeHtml = "\n   <h2><strong>Resume</strong><h2>\n   <h3>Personal Informationh</h3> \n   <p><b>Name : </b> ".concat(name, "</p>\n   <p><b>Email : </b> ").concat(email, "</p>\n   <p><b>Phone: </b> ").concat(phone, "</p>\n\n   <h3>Education</h3>\n   <p><b>Education : </b> ").concat(education, "</p>\n   \n     <h3>Experience</h3>\n   <p><b>Experience : </b> ").concat(experience, "</p>\n\n     <h3>Skills</h3>\n   <p><b>Skills: </b> ").concat(skills, "</p>\n   ");
    // display generated resume 
    if (displayElement) {
        displayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The Resume Display Element is Missing.");
    }
});