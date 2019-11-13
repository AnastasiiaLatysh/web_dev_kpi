function sendFeedback(obj) {
  var name = document.getElementById('firstname').value;
  var feedback = document.getElementById('feedback').value;
  var message = "Are you sure to submit data? "
  console.log(name);
  console.log(feedback);

  if (!feedback){
    return false;
  }

  if (!name){
     message = message + "Note: You did not enter your name. "
   }
  else {
     message = message + "Your name is " + name + ". "
   }

  var answer = confirm(message + "Feedback is " + feedback)
  if (answer) {
      window.open("success_page.html");
      return true;
  }
  else {
    return false;
  }
}
