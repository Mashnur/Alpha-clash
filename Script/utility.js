function HideElementByid(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}
function ShowElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden')
}
function getRandomAlphabet(){
    const alphabetstring="abcdefghijklmnopqrstuvwxyz";
    const alphabets= alphabetstring.split('');
    // console.log(alphabet)
    const RandomNumber= Math.random()*25;
    const index= Math.round(RandomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}
function addbackgroundcolour(elementId){
    const elementcolor= document.getElementById(elementId);
    elementcolor.classList.add('bg-orange-400');
}
function removebackgroundcolour(elementId){
    const elementcolor= document.getElementById(elementId);
    elementcolor.classList.remove('bg-orange-400');
}
function setelementbyid (elementId , value){
    const element= document.getElementById(elementId);
    element.innerText=value;
     
}