module.exports = {
  appExit: "Okay, let's try this again later.",
  errors: {
    device: {
      mediaResponse: "Sorry, your device doesn't support media response."
    },
    noInput: {
      first: "Sorry, I couldn't hear you.",
      reprompt: 'Sorry, can you repeat that?'
    },
    unknownInput: {
      first: "I'm not sure what you said. Can you repeat that?",
      reprompt: "I still didn't get that."
    }
  },
  fallback: {
    whatWasThat: 'Sorry, what was that?',
    didntCatchThat: "I didn't catch that",
    misunderstand: "I'm having trouble understanding you",
    finalReprompt: "I'm sorry I'm having trouble here. Maybe we should try this again later."
  },
  prompts: {
    select: {
      artist: "What artist do you want to hear?",
      city: "Please select a city",
      year: "Please select a year",
      yearAndCity: "Please select a city and year",
      collection: "Please select a collection",
      topic: "Please select a topic"
    }
  },
  suggestion: {
    artist: {
      gratefulDead: 'Grateful Dead',
      cowboyJunkies: 'Cowboy Junkies',
      dittyBops: 'Ditty Bops',
      discoBiscuits: 'Disco Biscuits',
      hotButteredRum: 'Hot Buttered Rum',
      kellerWilliams: 'Keller Williams'
    }, 
    artistsPrompt: "I have some music from The Ditty Bops, Cowboy Junkies, and Grateful Dead, for example"
  }
  
};
