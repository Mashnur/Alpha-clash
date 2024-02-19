function handlekeyboardbuttonpressed(event){
    const playerpressed= event.key;
    console.log("Player pressed", playerpressed)
    // get expected press 
    const currentalphabet= document.getElementById('current-alphabet')
    const currentalpha= currentalphabet.innerText
    const expected =currentalpha.toLocaleLowerCase()
    console.log(expected , playerpressed)
    if (playerpressed==expected){
        console.log("you got a point ")
                // get the current score 
                const currentelemnetscore =document.getElementById('current-score')
                const currentscoretext=currentelemnetscore.innerText;
                const currentscore =parseInt(currentscoretext)
                console.log(currentscore)
                const newscore =currentscore+1;
                currentelemnetscore.innerText=newscore;
        console.log("you have correctly pressed ", expected)
        removebackgroundcolour(expected)
        continuegame();
        


    }
    else{
        console.log("you missed a life ")
        const currentlifeelement=document.getElementById('current-life');
        const currentlifetext= currentlifeelement.innerText;
        const currentlife= parseInt(currentlifetext);
        console.log(currentlife);
        const newlife=currentlife-1;
        currentlifeelement.innerText=newlife;
    }
}
document.addEventListener('keyup',handlekeyboardbuttonpressed)






function continuegame(){
    const alphabet= getRandomAlphabet()
    console.log("your random alphabet",alphabet);
    const currentalphabet= document.getElementById('current-alphabet')
    const currentalpha= currentalphabet.innerText
    // console.log(currentalpha)
    currentalphabet.innerText=alphabet;
    addbackgroundcolour(alphabet)

}




function play(){
    HideElementByid('home-screen')
    ShowElementById('play-screen');
    continuegame()
}