// character is an alphabet or not

function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.match(letters))
      {
      alert('yes this is alphabet');
      
      }
      else
      {
      return 'this is not valid joker';
      }
      }   allLetter('txt')