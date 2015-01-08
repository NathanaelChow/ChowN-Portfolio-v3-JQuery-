/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
   $(".Thing").css("background-color", "red");
   
   $('h2:first').css({"background-color":"purple","color":"white"});
   
   
   $('#oneButton').bind('click',alertButtonClick);
   
   $('#textBox1').bind('blur',onBlurEvent)
                .bind('focus',onFocusEvent)
                .bind('onmousedown',onMDownEvent)
                .bind('onmouseup',onMUpEvent)
                .bind('change',onChangeEvent);
        
                $(window).resize(resizedWindow);
                $('#logo').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
                $('#twoButton').bind('dblclick', dblClickedMe);
                $("form").submit(function() { alert("Submit button clicked") });
                $('#threeButton').bind('click',unbindLogo);
});

function alertButtonClick() {
alert("There was a button clicked");
}

function onBlurEvent()
{
$("#second").html("You left the text box");
}

function onFocusEvent()
{
$("#second").html("You entered the text box");
}

function onMDownEvent()
{
$("#second").html("You left the text box");
}

function onMUpEvent()
{
$("#second").html("You entered the text box");
}

function onChangeEvent()
{
$("#third").html("You changed the text box");
}

function resizedWindow()
{
$("#second").html("Window was resized W: " + $(window).width() + " H: " + $(window).height());
}

function mouseOverMe()
{
$("#second").html("You put your cursor on my logo");
}

function mouseOutMe()
{
$("#second").html("You left my logo");
}

function dblClickedMe()
{
$("#second").html("You double clicked my button");
}

function unbindLogo()
{
$('#logo').unbind('mouseover', mouseOverMe).unbind('mouseout', mouseOutMe);
}
