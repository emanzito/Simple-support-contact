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

    // Validate all fields
    if (name.value.trim() === "" || phone.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
      window.alert("Por favor, preencha todos os campos obrigatórios");
      return false;
    }

    // Create an object with form data
    const formData = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      company: company.value,
      message: message.value,
      timestamp: new Date().toISOString(),
    };

    // Save data to localStorage
    saveToLocalStorage(formData);

    // Clear form fields
    [name, phone, email, company, message].forEach((field) => (field.value = ""));

    window.alert("Message sent successfully!");
    return true;
  });

  // Add a new button to display data
  var displayDataBtn = document.getElementById("displayDataBtn");
  var dataDisplay = document.getElementById("dataDisplay");

  displayDataBtn.addEventListener("click", function () {
    displayDataFromLocalStorage();
  });

  // Add a new button to clear data
  var clearDataBtn = document.getElementById("clearDataBtn");

  clearDataBtn.addEventListener("click", function () {
    clearDataFromLocalStorage();
  });
});

function saveToLocalStorage(data) {
  // Get existing data from localStorage
  let existingData = JSON.parse(localStorage.getItem("contactFormData")) || [];

  // Add new data
  existingData.push(data);

  // Save updated data back to localStorage
  localStorage.setItem("contactFormData", JSON.stringify(existingData));
}

// Function to retrieve data (you can call this when needed)
function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("contactFormData")) || [];
}

function displayDataFromLocalStorage() {
  const data = getDataFromLocalStorage();
  let displayHtml = "<h2>Dados Armazenados:</h2>";

  if (data.length === 0) {
    displayHtml += "<p>Nenhum dado armazenado.</p>";
  } else {
    displayHtml += "<ul>";
    data.forEach((item, index) => {
      displayHtml += `
        <li>
          <strong>Entry ${index + 1}:</strong><br>
          Name: ${item.name}<br>
          Cellphone: ${item.phone}<br>
          Email: ${item.email}<br>
          Company: ${item.company}<br>
          Message: ${item.message}<br>
          Data: ${new Date(item.timestamp).toLocaleString()}
        </li>`;
    });
    displayHtml += "</ul>";
  }

  dataDisplay.innerHTML = displayHtml;
}

function clearDataFromLocalStorage() {
  if (confirm("Are you sure you want to delete all stored data?")) {
    localStorage.removeItem("contactFormData");
    alert("Everything was deleted.");
    // If you're displaying the data, update the display
    displayDataFromLocalStorage();
  }
}
