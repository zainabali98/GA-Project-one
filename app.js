console.log('Project-1: Connections')



/*-------------------------------- Constants --------------------------------*/
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
/*-------------------------------- Variables --------------------------------*/




/*------------------------ Cached Element References ------------------------*/

const allWordElements = document.querySelectorAll('.words')
// console.log(allWordElements)

const deSelectAllEl = document.querySelector('.deselect')

const submitEL = document.querySelector('.submit')


/*-------------------------------- Functions --------------------------------*/

// function for selecting + deselecting.
function handleClick(event) {
    console.log(event.target.textContent)
    const selectedWordIndex = selectedWords.findIndex((oneWord) => { return oneWord === event.target.textContent })

    if (selectedWordIndex === -1) {

        if (selectedWords.length < 4) {
            selectedWords.push(event.target.textContent)
            event.target.style.backgroundColor = '#5A594E'
            event.target.style.border = '#5A594E'
            console.log(selectedWords)
        }
    }
    else {
        event.target.style.backgroundColor = '#EFEFE6'
        event.target.style.border = '#EFEFE6'
        selectedWords.splice(selectedWordIndex, 1)
        console.log(selectedWords)
    }
}

function deSelectAll() {

    // for (let i = 0; i < selectedWords.length; i++) {
    //     selectedWords[i].style.backgroundColor = '#EFEFE6'
    //     selectedWords[i].style.border = '#EFEFE6'}

    selectedWords.splice(0, 4)
    console.log(selectedWords)

}



/// .theme ??? ask about it.
function submit() {
    if (selectedWords.length === 4) {

        const firstTheme = words.find((item) => item.word === selectedWords[0]).theme
        console.log(firstTheme)

        let isCorrect = true;
        for (let i = 0; i < selectedWords.length; i++) {
            const groupTheme = words.find((item) => item.word === selectedWords[i]).theme

            if (groupTheme !== firstTheme) {
                isCorrect = false;
            }

        } if (isCorrect === false) {
            console.log('incorrect theme!')
        }
    }
}


// //if theme correct
// function butInOneSquare() {
// }

// //after submitbtn
// function remainingAttempts() {
// }

function shuffleBtn() {

}




/*----------------------------- Event Listeners -----------------------------*/


allWordElements.forEach((oneWordElement, index) => {
    oneWordElement.addEventListener('click', handleClick)
    oneWordElement.textContent = words[index].word

})


deSelectAllEl.addEventListener('click', deSelectAll)

submitEL.addEventListener('click', submit)