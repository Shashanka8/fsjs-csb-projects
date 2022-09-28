const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#button");

// function to generate random Hex code
function generateHexCode() {
  const chars = "0123456789ABCDEF";
  let code = "#";

  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * 16)];
  }

  return code;
}

btn.addEventListener("click", () => {
  canvas.style.backgroundColor = generateHexCode();
});
