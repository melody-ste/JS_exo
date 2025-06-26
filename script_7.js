let message = prompt("Dis quelque chose à Acné-bot.");

message = message.trim();

if (message.endsWith("?")) {
  console.log("Ouais Ouais...");

} else if (message === message.toUpperCase() && message !== "") {
  console.log("Pwa, calme-toi...");

} else if (message.toLowerCase().includes("fortnite")) {
  console.log("on s' fait une partie soum-soum ?");

} else if (message === "") {
  console.log("t'es en PLS ?");

} else {
  console.log("balek.");
}