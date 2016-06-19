//Main File of wingbot

//user object to store information given
var user  = {
  name = "";
  gender ="";
}

//TODO: function that returns message when bot starts



//TODO: function that asks userName from the user
function getUserName () {
  sendMessage("Oh hey there, what’s your name?");
  var userName = getAnswer();
  user.name = userName;
  sendMessage("Hey "+userName+"! I’m Wingbot. Want some help writing your dating profile?");
  if (getAnswer()=="NO" || getAnswer()=="no") {
      sendMessage("Ok. But if you do, I’ll be around. Catch you later!");
      end();
  } else {
    sendMessage("Awesome! What gender speaks to you the most?");
    chooseGender();
  }
}

//chooseGender function where 3 buttons are shown and

//TODO: sendMessage function
function sendMessage() {

}

//TODO: getAnswer() function
function getAnswer() {

}

//TODO: end function, it collects data from the user
function end () {

}
