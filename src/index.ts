let altura: number = document.getElementById("altura");
let alturapermitida = 130;
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (altura.value <= alturapermitida) {
    console.log("podes jugar a la montaña rusa");
  } else {
    console.log("no podes jugar a la montaña rusa");
  }
});
