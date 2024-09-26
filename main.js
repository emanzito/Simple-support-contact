document.addEventListener("DOMContentLoaded", function () {
  //I don't know why I added this Event Listener and why it works
  var name = document.getElementById("full-name");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var company = document.getElementById("company");
  var message = document.getElementById("message");
  var btn = document.getElementById("btn1");

  // Add event clicking the button
  btn.addEventListener("click", function (event) {
    event.preventDefault();

    // Log of the values on console
    console.log("Nome completo:", name.value);
    console.log("Telefone:", phone.value);
    console.log("Email:", email.value);
    console.log("Empresa:", company.value);
    console.log("Mensagem:", message.value);

    //Warns user if there's no message on the 'question/comment' box
    if (message.value.trim() === "") {
      window.alert("Please fill in all mandatory fields");
      return false;
    } else {
      return true;
    }
  });
});

//Choose a Data Base of your choice, this is only a simple test
