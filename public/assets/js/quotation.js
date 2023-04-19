const quotationForm = document.querySelector("#quotationForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let telephone = document.getElementById("Telephone");
let serviceCat = document.getElementById("select1").value;
let departureCity = document.getElementById("departureCity");
let postCode = document.getElementById("postCode");
let weigth = document.getElementById("weight");
let height = document.getElementById("height");
let width = document.getElementById("width");
let length = document.getElementById("length");
let selectVan = document.getElementById("select2").value;

quotationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    name: name.value,
    email: email.value,
    telephone: telephone.value,
    departureCity: departureCity.value,
    postCode: postCode.value,
    serviceCat: serviceCat,
    weigth: weigth.value,
    height: height.value,
    width: width.value,
    length: length.value,
    selectVan: selectVan,
  };

  console.log(formData);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/quote");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email Sent, we will get back with you as soon as posible.");
      name.value = "";
      email.value = "";
      telephone.value = "";
      departureCity.value = "";
      postCode.value = "";
      serviceCat.value = "";
      weigth.value = "";
      height.value = "";
      width.value = "";
      length.value = "";
      selectVan.value = "";
    } else {
      alert("Something went wrong. Please call us directly. Thank you.");
    }
  };
  xhr.send(JSON.stringify(formData));
});
