// const fetch = require('node-fetch')

const getSingleJoke = () => {
  const joke = fetch('https://official-joke-api.appspot.com/jokes/random')
  const i = []

  joke
    .then(response => response.json())
    .then(singleJoke => { 
      console.log(singleJoke)
      i.push(singleJoke)
      console.log(i)

      const jokeQuestion = document.getElementById('jokeQuestion')
      const punchLine = document.getElementById('punchLine')

      jokeQuestion.innerText = i[0].setup
      punchLine.innerText = i[0].punchline
    })
    
    .catch(err => console.log(err))
    

    
}

getSingleJoke()


const jokes = fetch('https://official-joke-api.appspot.com/random_ten')