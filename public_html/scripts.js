/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
   $(".Thing").css("background-color", "red");
   
   $('p:first').css({"background-color":"purple","color":"white"});
   
   
   $('#oneButton').bind('click',alertButtonClick);
   
   $('#textBox1').bind('blur',onBlurEvent)
                .bind('focus',onFocusEvent)
                .bind('onmousedown',onMDownEvent)
                .bind('onmouseup',onMUpEvent)
                .bind('change',onChangeEvent);
        
                $(window).resize(resizedWindow);
                $('.Thing').bind('mouseover', mouseOver).bind('mouseout', mouseOut);
                $('#twoButton').bind('dblclick', dblClickedMe);
                $("form").submit(function() { alert("Submit button clicked") });
                $('#threeButton').bind('click',unbindLogo);
                
                
                $('#replaceWHtml').bind('click', replaceWHtml);
                $('#replaceWText').bind('click', replaceWText);
                $('#addAPara').bind('click', addAPara);
                $('#removeAPara').bind('click', removeAPara);
});

function replaceWHtml(){
    $('#h1Tag').html('<h3>H3 Thing</h3>');
}
function replaceWText(){
    $('#h1Tag2').text('<h3>H3 Thing</h3>');
}


function addAPara(){
    $('#addAPara').append('<p>Another paragraph</p>');
}

function removeAPara(){
    $('#removeAPara p:last').remove();
}


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

function mouseOver()
{
$(".Thing").css("background-color", "green");
}

function mouseOut()
{
$(".Thing").css("background-color", "red");
}

function dblClickedMe()
{
$("#second").html("You double clicked my button");
}

function unbindLogo()
{
$('#logo').unbind('mouseover', mouseOverMe).unbind('mouseout', mouseOutMe);
}


