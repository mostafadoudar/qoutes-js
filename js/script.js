
var add = document.getElementById("address").innerHTML = "Quote of the Day";
var text = document.getElementById("text").innerHTML = "Press the button below to recieve a random quote!";

var Quotes = [
  {'author': 'Jim Rohn', 
   'quote': 'Beware of what you become in pursuit of what you want.'
  },
  {'author': 'Epictetus', 
   'quote': 'It\'s not what happens to you, but how you react to it that matters.'
  },
  {'author': 'Frank Sinatra', 
   'quote': 'The best revenge is massive success.'
  },
  {'author': 'Wayne Gretzy', 
   'quote': 'You miss 100% of the shots you don\'t take.'
  },
  {'author': 'Nelson Mandela', 
   'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
  },
  {'author': 'Elbert Hubbard', 
   'quote': 'Do not take life too seriously. You will not get out alive.'
  },
];

function changeQuote(){
  const random = Number.parseInt(Math.random()*Quotes.length + 1);
  document.querySelector('#quoteOutput').textContent = `\"${Quotes[random].quote}\"`;
  document.querySelector('#authorOutput').textContent = `${Quotes[random].author}`;
  
}
