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
        console.log("you have correctly pressed ", expected)
        removebackgroundcolour(expected)
        continuegame();
    }
    else{
        console.log("you missed a life ")
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