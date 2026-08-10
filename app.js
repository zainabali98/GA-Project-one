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
        theme:'Nature',
    },
    {
        word:'Moon',
        theme:'Space',
    }
    {
        word:'Hope',
        theme:'Emotions',
    }
    {
        word:'Coach',
        theme:'Sports',
    }
    {
        word:'Forest',
        theme:'Nature',
    }
    {
        word: 'Planet',
        theme:'Space',
    },
    {
        word:'Brave',
        theme:'Emotions',
    }
    {
        word:'Goal',
        theme:'Sports',
    }
    {
        word:'Grow',
        theme:'Nature',
    }
    {
        word: 'Alien',
        theme:'Space',
    },
    {
        word:'Comfort',
        theme:'Emotions',
    }
    {
        word:'Medal',
        theme:'Sports',
    }
    {
        word:'River',
        theme:'Nature',
    }
    {
        word: 'Spaceship',
        theme:'Space',
    },
    {
        word:'Fear',
        theme:'Emotions',
    }
    {
        word:'Track',
        theme:'Sports',
    }
]

const selectedWords = []


/*------------------------ Cached Element References ------------------------*/

const allWordElements = document.querySelectorAll('.words')
console.log(allWordElements)

/*-------------------------------- Functions --------------------------------*/

function selectWord(){
    console.log('it works!!!')
}

function deSelectWord(){

}

//group 4 words, select 4 words ---> submit btn active.
function selectFourWords(){

}

// after submit btn 
function checkForTheme(){

}


//if theme correct
function butInOneSquare(){

}

function remainingAttempts(){

}

function shuffleBtn(){

}

function deSelectAll(){

}



/*----------------------------- Event Listeners -----------------------------*/

// selectWordd.addEventListener('click', selectWord)

allWordElements.forEach((oneWordElement, index)=>{
    oneWordElement.addEventListener('click',selectWord)
    oneWordElement.textContent = words[index].word

})

for(let oneWordElement of allWordElements){
    oneWordElement.addEventListener('click',selectWord)
}