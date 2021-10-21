
function computerPlay(){
    //Return "rock", "paper" or "sissors" randomly
    let arr = ["rock", "paper", "sissors"];
    
   return arr[Math.floor(Math.random() * arr.length)];
}
