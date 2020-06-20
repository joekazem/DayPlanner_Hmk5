
   
   
   document.getElementById("currentDay").textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
   console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
   $(".btn").click(saveNote)

   function saveNote(e) {
       e.preventDefault()
       var noteTime = $(this).attr("id")
       var noteContext;
       console.log($(this))
   }
   localStorage.setItem('seven');
   