function generateRandomNumber(num) {
  return Math.floor(Math.random() * num)
}
const loveFinder = {
    zodiac: ['Capricorn', 'Cancer', 'Libra', 'Sagittarius', 'Aries', 'Leo', 
    'Gemini', 'Taurus', 'Virgo', 'Pisces', 'Aquarius', 'Scorpio'],
    moonPhase: ['New', 'Waxing crescent', 'First quarter', 'Waxing gibbous', 
    'Full', 'Waning gibbous', 'Last quarter', 'Waning crescent'],
    affirmation: ['I am loved', 'I am worthy', 'I am beautiful'],
}
let selfLove = [];
for (let prop in loveFinder) {
  let optionIdx = generateRandomNumber(loveFinder[prop].length)
  switch(prop) {
    case 'zodiac': selfLove.push(`Your soulmate is a: 
    "${loveFinder[prop][optionIdx]}".`)
    break
    case 'moonPhase': selfLove.push(`You will meet them during: 
    "${loveFinder[prop][optionIdx]}".`)
    break
    case 'affirmation': selfLove.push(`"${loveFinder[prop][optionIdx]}".`)
    break
    default: selfLove.push('There is not enough info.')
  }
}
console.log(selfLove)
