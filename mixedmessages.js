function randomNumber(num) {
    //gets a random number from 0 to num-1
    return Math.floor(Math.random() * num)
}

const prediction = {
    zodiacSign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    trait: ['passionate', 'exuberant', 'practical', 'grounded', 'intellectual', 'curious', 'intuitve', 'emotional'],
    reco: ['Take time to know yourself', 'A narrow focus brings big results', 'Show up fully', 'Don\'t make assumptions', 'Be patient and persistent', 'In order to get, you have to give', 'Luck comes from hard work', 'Be your best at all times', 'Don\'t try to impress everyone', 'Don\'t be afraid of being afraid']
}

//store person prediction in array 

let personalPrediction = []

//Iterate over the object

for(let char in prediction) {
    let optionIdx = randomNumber(prediction[char].length) 

    switch(char) {
        case 'zodiacSign':
            personalPrediction.push(`Your zodiac sign is a ${prediction[char][optionIdx]}.`)
            break
        case 'trait':
            personalPrediction.push(`Your trait is ${prediction[char][optionIdx]}.`)
            break
        case 'reco':
            personalPrediction.push(`Advice for you: ${prediction[char][optionIdx]}.`)
            break
        default:
            personalPrediction.push('Future is unclear.')
    }
}

function formatPrediction(pred) {
    const formatted = personalPrediction.join('\n')
    console.log(formatted)
}


formatPrediction(personalPrediction); 
