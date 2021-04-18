


 

/// favorite movie 

/* 
to do list: 
ask the user if he like fast and furious movie
validator--keep asking the user to answer with yes or no
ask the user how many pic he/she want to see on the webpage

*/
// function expresstion 

<<<<<<< HEAD
var likeFandf;

var doYou= function(){

likeFandf= prompt('if you like fast and furious answer yes if you dont just answer no');
=======
var likeFandf= prompt('if you like fast and furious answer yes if you dont just answer no');
>>>>>>> e4d7533f12e2988be3b9c8806c037f9abc48f1d6


// validator

while(likeFandf !== 'yes'&& likeFandf !=='no'){
  likeFandf = prompt('your answer should be yes or no')
<<<<<<< HEAD
}
console.log('Fast and furious my favorite movie');
=======
>>>>>>> e4d7533f12e2988be3b9c8806c037f9abc48f1d6
}
doYou();

// function declaration

function picTures(){


if(likeFandf =='yes'){
  userAnswer='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTrdDQiElf3opr67Ja6FewlDg_fvVFqlhyQ&usqp=CAU">';

} else if (likeFandf == 'no'){
  var num=prompt('rate from 1 to 10 how much do hate fast and furious')
   userAnswer='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc172nQE-DieCGRmeMVwPuz6pGWeGz-66KlQ&usqp=CAU">';
}

var imagesNum= prompt('how many image for Fast&furious do you want??');

for(var i=0 ; i<imagesNum; i++){
 document.write(userAnswer);

}
console.log('numofpic');
}

picTures();