(function(){
  "use strict";

  var button = document.getElementById("getquote");
  var newQuote = document.getElementById("quote"),
      numQuote;

  var quotes=["\“Be yourself; everyone else is already taken.\”― Oscar Wilde",
  "\"Two things are infinite: the universe and human stupidity; and Im not sure about the universe.\" ― Albert Einstein",
  "“\So many books, so little time.\” ― Frank Zappa",
  "\“A room without books is like a body without a soul.\” ― Marcus Tullius Cicero",
  "\“You only live once, but if you do it right, once is enough.\” ― Mae West",
  "\“Be the change that you wish to see in the world.\” ― Mahatma Gandhi"
  ];

  button.addEventListener("click", function(e){
    numQuote = Math.floor(Math.random() * (quotes.length-1));
    console.log(numQuote);
    newQuote.textContent = quotes[numQuote];
  });
  
}
  )();
