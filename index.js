var quoteButton = document.getElementByClass('.quoteButton');
var newQuote = document.getElementByClass('.quoteMessage');
var quotes = ["Feminism is the radical notion that women are human beings. - Cheris Kramrae",
"A feminist is anyone who recognizes the equality and full humanity of women and men. - Gloria Steinem",
"Feminism isn’t about hating men. It’s about challenging the absurd gender distinctions that boys and girls learn from childhood and carry into their adult lives. - Robert Webb",
"I can only speak for myself and what feminism means to me, and that is equality for every human being: equal rights, equal representation, equal pay, etc. - Madeline Brewer",
"Feminism is not just about women; it's about letting all people lead fuller lives. - Jane Fonda",
"We need everyone to be a feminist. Feminism is the fight for the equality of sexes, not for the domination of one sex over another. - Najat Vallaud-Belkacem",
"Being a feminist means to always pay it forward to support other women. I'm so grateful for the women in my life who help me everyday to become a better person and to be one step closer to my dreams, and I hope I can do the same - Jenny Wang"];
quoteButton.on("click", pickQuote);




function pickQuote() {
  console.log("clicked button")
  event.preventDefault();
  var random = Math.random() * quotes.length;
  var round = Math.floor(random);
  var newText = quotes[round];
  newQuote.text(newText);
}

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
