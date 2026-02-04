function scrollToOrder() {
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let glassType = document.getElementById("glassType").value;
  let details = document.getElementById("details").value;

  let message = `New Glass Order Enquiry:%0AName: ${name}%0APhone: ${phone}%0AGlass Type: ${glassType}%0ADetails: ${details}`;

  window.open("https://wa.me/919876543210?text=" + message, "_blank");
});
