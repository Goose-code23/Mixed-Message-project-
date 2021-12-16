function randomNum(num){
   return Math.floor(Math.random() * num);
}

const ranMotivation = {
    IWill: ['be great', 'be amazing', 'strong','be awesome','strong','be happy'],
    ICan: ['do anything','acomplish my goal', 'be sucessful','be proud of myself'],
    Iam: ['proud of myself','happy','loved', 'worthy']
}

const empty = []

for (let item in ranMotivation){
    let option = randomNum(ranMotivation[item].length)

    switch (item) {
        case 'IWill':
            empty.push(`I will ${ranMotivation[item][option]}`)
            break 
        case 'ICan':
            empty.push(`I can ${ranMotivation[item][option]}`)
            break 
        case 'Iam':
            empty.push(`I am ${ranMotivation[item][option]}`)
            break 
        default: 
        empty.push('failed')
            
    }
}

function combine(combination){
    
    const combined = empty.join('\n')
    console.log(combined)
}

combine(empty);