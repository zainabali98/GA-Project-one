console.log('It works!')



/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

// Garden, Forest, Grow, River... Nature
// Moon, Planet, Alien, spaceship... Space
// Hope, Brave, Comfort, Fear... Emotions
// Coach, Goal, medal, Track... sports

const words = [
    {
        word: 'Garden',
        theme: 'Nature',
    },
    {
        word: 'Moon',
        theme: 'Space',
    },
    {
        word: 'Hope',
        theme: 'Emotions',
    },
    {
        word: 'Coach',
        theme: 'Sports',
    },
    {
        word: 'Forest',
        theme: 'Nature',
    },
    {
        word: 'Planet',
        theme: 'Space',
    },
    {
        word: 'Brave',
        theme: 'Emotions',
    },
    {
        word: 'Goal',
        theme: 'Sports',
    },
    {
        word: 'Grow',
        theme: 'Nature',
    },
    {
        word: 'Alien',
        theme: 'Space',
    },
    {
        word: 'Comfort',
        theme: 'Emotions',
    },
    {
        word: 'Medal',
        theme: 'Sports',
    },
    {
        word: 'River',
        theme: 'Nature',
    },
    {
        word: 'Spaceship',
        theme: 'Space',
    },
    {
        word: 'Fear',
        theme: 'Emotions',
    },
    {
        word: 'Track',
        theme: 'Sports',
    },
]

const selectedWords = []

const selectedWordIndex = []


/*------------------------ Cached Element References ------------------------*/

const allWordElements = document.querySelectorAll('.words')
console.log(allWordElements)




/*-------------------------------- Functions --------------------------------*/

// function for selecting + deselecting.
function handleClick(event) {
    console.log(event.target.textContent)
    const selectedWordIndex = selectedWords.findIndex((oneWord) => { return oneWord === event.target.textContent })

    if (selectedWordIndex === -1) {
        event.target.style.backgroundColor = '#5A594E'
        event.target.style.border = '#5A594E'
        if (selectedWords.length < 4) {
            selectedWords.push(event.target.textContent)
            console.log(selectedWords)
        }

    }
    else {
        event.target.style.backgroundColor = '#EFEFE6'
        event.target.style.border = '#EFEFE6'
        selectedWords.splice(selectedWordIndex, 1)
    }
}



//group 4 words, select 4 words ---> submit btn active.
// function selectFourWords(){  
// }

// after submit btn 
// function checkForTheme(){}

//if theme correct
function butInOneSquare() {

}

function remainingAttempts() {

}

function shuffleBtn() {

}

function deSelectAll() {

}

// check fo rtheme
// function submitResult() {
//     for (i = 0; i < words.length; i++) {
//         if (words.theme[i] === 0) {
//             return
//         }
//     }
// }



/*----------------------------- Event Listeners -----------------------------*/


allWordElements.forEach((oneWordElement, index) => {
    oneWordElement.addEventListener('click', handleClick)
    oneWordElement.textContent = words[index].word

})


// deselectBtnEl.addEventListener('click', deSelectWord)