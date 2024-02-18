function continuegame(){
    const alphabet= getRandomAlphabet()
    console.log("your random alphabet",alphabet);
    const currentalphabet= document.getElementById('current-alphabet')
    currentalphabet.innerText=alphabet;
    addbackgroundcolour(alphabet)

}




function play(){
    HideElementByid('home-screen')
    ShowElementById('play-screen');
    continuegame()
}