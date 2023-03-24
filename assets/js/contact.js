const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    
    links.classList.toggle("show-links");
});

//mycode
function sendMail(){
    var params = {
        name: document.getElementById("username").value,
        email: document.getElementById("useremail").value,
        message: document.getElementById("usermsg").value,
    };

    const serviceID = "service_e7p9sbb";
    const templateID = "template_4q83vkf";

emailjs
.send(serviceID,templateID,params)
.then((res) => {
        document.getElementById("username").value = "";
        document.getElementById("useremail").value = "";
        document.getElementById("usermsg").value = "";
        console.log(res);
        alert("Your Message Sent to Amol, Successfully!");
    })
  .catch((err) => console.log(err));
}