"use strict"
function sendMail() 
{
	if(checkName() && checkEmail() &&  checkComment()) {
		document.getElementsByName('mailme')[0].submit();
	}
}

//checks if the name email and comment are filled 

function checkName()
{
	var name = document.getElementsByName('name')[0].value;
	if(name.match(/^([a-zA-Z]*)*$/) && name > "") {
		return true;
	}
}

//checks if the name matches the right characters

function checkEmail()
{
	var email = document.getElementsByName('email')[0].value;
	if(email.match(/(.*)@([a-z]*).([a-z]{2,3})$/) && email > "") {
		return true;
	}
}

//checks if the email consist an @ and an .com or somthing like that 

function checkComment()
{
	var comment = document.	getElementsByName('comment')[0].value;
	if(comment.match(/^([a-zA-Z]*)*$/) && comment > "") {
		return true;
	}
}

//checks if the comment is filled