let cardArray = [
    {
        "name": "js",
        "img": "IMG/after-effects.png"
    },
    {
        "name": "python",
        "img": "IMG/whatsapp.png"
    },
    {
        "name": "Node",
        "img": "IMG/facebook.png"
    },
    {
        "name": "java",
        "img": "IMG/instagram.png"
    },
    {
        "name": "Ajax",
        "img": "IMG/gmail.png"
    },
    {
        "name": "Mysql",
        "img": "IMG/youtube.png"
    }
];

const gameCard = cardArray.concat(cardArray)
const parent = document.querySelector('#card-section')

// console.log(gameCard)


// step 3 card shuffling 
// const myNumbers = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))

//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp

//     }
//     return array
// }

// const shuffledChild = myNumbers(gameCard)
// console.log(arr)

// or 

// step 3 card shuffling 
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


let clickcount = 0;
let firstCard = "";
let secCard = "";

// style match card 
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}


const resetGame = () => {
    firstCard = "";
    secCard = "";
    clickcount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })

}

// step 4 card selection
parent.addEventListener('click', (event) => {
    let curcard = event.target;

    // jar purn div la select kel tar te select nahi vhav mhanun return false kel aht.
    if (curcard.id === "card-section") {
        return false;
    }

    clickcount++;

    // fakt 2 div select karnya sathi condition.
    if (clickcount < 3) {

        if (clickcount === 1) {
            firstCard = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected')
            console.log(firstCard)

        }
        else {
            secCard = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected')

        }

        if (firstCard !== "" && secCard !== "") {
            if (firstCard === secCard) {
                // curcard.classList.add('card_match')

                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)

            }
            else {
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }



})

// console.log(parent)

for (let i = 0; i < shuffledChild.length; i++) {
    let childDiv = document.createElement('div')
    childDiv.classList.add('card')

    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;


    const frontdiv = document.createElement('div')
    frontdiv.classList.add('frontcard')

    const backdiv = document.createElement('div')
    backdiv.classList.add('backcard')

    backdiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parent.appendChild(childDiv)
    childDiv.appendChild(frontdiv)
    childDiv.appendChild(backdiv)
}

// console.log(parent)

