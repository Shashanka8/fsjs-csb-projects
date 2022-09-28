const img = document.getElementById("img");
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const mainDiv = document.getElementById("main");

submitBtn.addEventListener("click", () => {
  const qrValue = input.value;

  if (!qrValue.trim()) return alert("Please enter any value");

  submitBtn.innerText = "Generating QR Code...";
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

  img.addEventListener("load", () => {
    img.style.display = "block";
    mainDiv.style.height = "500px";
    submitBtn.innerText = "Generate QR Code";
  });
});
