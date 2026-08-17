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
        difficulty: 1
    },
    {
        word: 'Moon',
        theme: 'Space',
        difficulty: 2

    },
    {
        word: 'Hope',
        theme: 'Emotions',
        difficulty: 3

    },
    {
        word: 'Coach',
        theme: 'Sports',
        difficulty: 4

    },
    {
        word: 'Forest',
        theme: 'Nature',
        difficulty: 1

    },
    {
        word: 'Planet',
        theme: 'Space',
        difficulty: 2

    },
    {
        word: 'Brave',
        theme: 'Emotions',
        difficulty: 3

    },
    {
        word: 'Goal',
        theme: 'Sports',
        difficulty: 4

    },
    {
        word: 'Grow',
        theme: 'Nature',
        difficulty: 1
    },
    {
        word: 'Alien',
        theme: 'Space',
        difficulty: 2
    },
    {
        word: 'Comfort',
        theme: 'Emotions',
        difficulty: 3

    },
    {
        word: 'Medal',
        theme: 'Sports',
        difficulty: 4

    },
    {
        word: 'River',
        theme: 'Nature',
        difficulty: 1

    },
    {
        word: 'Spaceship',
        theme: 'Space',
        difficulty: 2

    },
    {
        word: 'Fear',
        theme: 'Emotions',
        difficulty: 3
    },
    {
        word: 'Track',
        theme: 'Sports',
        difficulty: 4
    },
]

const selectedWords = []
const selectedWordIndex = []
const clearedWords = [] // to store cleared arrays in one array
/*-------------------------------- Variables --------------------------------*/

let attempts = 4
console.log('attempts:' + attempts)


/*------------------------ Cached Element References ------------------------*/

const allWordElements = document.querySelectorAll('.words')
// console.log(allWordElements)

const deSelectAllEl = document.querySelector('.deselect')

const submitEL = document.querySelector('.submit')
const shuffleEl = document.querySelector('.shuffle')


/*-------------------------------- Functions --------------------------------*/

// function for selecting + deselecting.
function handleClick(event) {
    console.log(event.target.textContent)
    const selectedWordIndex = selectedWords.findIndex((oneWord) => { return oneWord === event.target.textContent })

    if (selectedWordIndex === -1) {

        if (selectedWords.length < 4) {
            selectedWords.push(event.target.textContent)
            event.target.classList.remove('not-selected')
            event.target.classList.add('selected')
            console.log(selectedWords)
        }
    }
    else {
        event.target.classList.add('not-selected')
        event.target.classList.remove('selected')

        selectedWords.splice(selectedWordIndex, 1)
        console.log(selectedWords)
    }
}

function deSelectAll() {

    for (let i = 0; i < allWordElements.length; i++) {
        allWordElements[i].classList.add('not-selected')
    }

    selectedWords.splice(0, 4)
    console.log(selectedWords)

}



/// .theme ??? ask about it.
function submit() {
    if (selectedWords.length === 4 && attempts > 0) {

        const firstTheme = words.find((item) => item.word === selectedWords[0]).theme
        console.log(firstTheme)

        let isCorrect = true;
        for (let i = 1; i < selectedWords.length; i++) {
            const groupTheme = words.find((item) => item.word === selectedWords[i]).theme

            if (groupTheme !== firstTheme) {
                isCorrect = false;
            }

        } if (isCorrect === false) {
            console.log('incorrect theme!')
            selectedWords.splice(0, 4)
            console.log(selectedWords)
            if (attempts > 0) {
                attempts = attempts - 1
                console.log('attempts remaining:' + attempts)
            } if (attempts === 0) {
                console.log('No more attempts!')
            }
        }
        else {
            const difficulty = words.find((word) => word.word === selectedWords[0]).difficulty
            console.log(`difficulty:` + difficulty)
            allWordElements.forEach((element) => {
                if (selectedWords.includes(element.textContent)) {
                    element.classList.add(`difficulty-${difficulty}`)
                    element.classList.remove(`selected`)
                }

            })
            console.log('Correct theme!')
            const copy = []
            selectedWords.forEach((word) => { copy.push(word) })
            clearedWords.push(copy)
            console.log(clearedWords)
            selectedWords.splice(0, 4)
            console.log(selectedWords)
        }
    }
}


// //if theme correct
// function butInOneSquare() {
// }



function shuffleBtn() {
    // console.log('shuffle works!')
    words.sort(() => Math.random() - 0.5)
    console.log(words)
    allWordElements.forEach((oneWordElement, index) => {
        oneWordElement.textContent = words[index].word
        console.log(words[index].word)

    })
}




/*----------------------------- Event Listeners -----------------------------*/


allWordElements.forEach((oneWordElement, index) => {
    oneWordElement.addEventListener('click', handleClick)
    oneWordElement.textContent = words[index].word

})


deSelectAllEl.addEventListener('click', deSelectAll)
submitEL.addEventListener('click', submit)
shuffleEl.addEventListener('click', shuffleBtn)