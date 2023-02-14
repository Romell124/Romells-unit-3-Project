/* Declare variables below to save the different sections (divs) of your story*/
let yesbutton = document.querySelector(".option-one");
let yesscreen = document.querySelector(".option-one-screen");
let endyesscreen = document.querySelector(".option-one-end");

yesbutton.onclick = function() {
    yesscreen.style.display = "block";
     endyesscreen.style.display = "block";
};
let nobutton = document.querySelector(".option-two");
let noscreen = document.querySelector(".option-two-screen");

nobutton.onclick = function() {
    noscreen.style.display = "block";
    let endnoscreen = document.querySelector(".option-two-end");
    endnoscreen.style.display = "block";
};
    


/*
INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/