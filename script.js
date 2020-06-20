
   
   //time object from momentsjs
   document.getElementById("currentDay").textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
   console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
   $(".btn").click(saveNote)
// local storage jquery
   function saveNote(e) {
     e.preventDefault()
      var noteTime = $(this).attr("id")
       var noteContext;
      //saving function into local storage
   }
   if (window.localStorage) {
       var noteSeven = document.getElementById("seven",);
       noteSeven.value = localStorage.getItem("seven",);
       noteSeven.addEventListener("input", function () {
           localStorage.setItem("seven", noteSeven.value)
       }, false);
   }
    if (window.localStorage) {
       var noteEight = document.getElementById("eight",);
       noteEight.value = localStorage.getItem("eight",);
       noteEight.addEventListener("input", function () {
           localStorage.setItem("eight", noteEight.value)
       }, false);
   }
   if (window.localStorage) {
       var noteNine = document.getElementById("nine",);
       noteNine.value = localStorage.getItem("nine",);
       noteNine.addEventListener("input", function () {
           localStorage.setItem("nine", noteNine.value)
       }, false);
   }
   if (window.localStorage) {
       var noteTen = document.getElementById("ten",);
       noteTen.value = localStorage.getItem("ten",);
       noteTen.addEventListener("input", function () {
           localStorage.setItem("ten", noteTen.value)
       }, false);
   }
   if (window.localStorage) {
       var noteEleven = document.getElementById("eleven",);
       noteEleven.value = localStorage.getItem("eleven",);
       noteEleven.addEventListener("input", function () {
           localStorage.setItem("eleven", noteEleven.value)
       }, false);
   }
   if (window.localStorage) {
       var noteTwelve = document.getElementById("twelve",);
       noteTwelve.value = localStorage.getItem("twelve",);
       noteTwelve.addEventListener("input", function () {
           localStorage.setItem("twelve", noteTwelve.value)
       }, false);
   }
   if (window.localStorage) {
       var noteOne = document.getElementById("one",);
       noteOne.value = localStorage.getItem("one",);
       noteOne.addEventListener("input", function () {
           localStorage.setItem("one", noteOne.value)
       }, false);
   }
   if (window.localStorage) {
       var noteTwo = document.getElementById("two",);
       noteTwo.value = localStorage.getItem("two",);
       noteTwo.addEventListener("input", function () {
           localStorage.setItem("two", noteTwo.value)
       }, false);
   }
   if (window.localStorage) {
       var noteThree = document.getElementById("three",);
       noteThree.value = localStorage.getItem("three",);
       noteThree.addEventListener("input", function () {
           localStorage.setItem("three", noteThree.value)
       }, false);
   }
   if (window.localStorage) {
       var noteFour = document.getElementById("four",);
       noteFour.value = localStorage.getItem("four",);
       noteFour.addEventListener("input", function () {
           localStorage.setItem("four", noteFour.value)
       }, false);
   }
   if (window.localStorage) {
       var noteFive = document.getElementById("five",);
       noteFive.value = localStorage.getItem("five",);
       noteFive.addEventListener("input", function () {
           localStorage.setItem("five", noteFive.value)
       }, false);
   }
   if (window.localStorage) {
       var noteSix = document.getElementById("six",);
       noteSix.value = localStorage.getItem("six",);
       noteSix.addEventListener("input", function () {
           localStorage.setItem("six", noteSix.value)
       }, false);
   }

   //if (window.localStorage) {
    //   var clearD =document.getElementById("clear");
    //   clearD.value = localStorage.clear("clear");
    //   clearD.addEventListener("button");
 //  }