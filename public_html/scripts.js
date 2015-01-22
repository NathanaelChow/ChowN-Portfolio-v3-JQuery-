/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    //Changes the title to red
   $(".Thing").css("background-color", "red");
   //Creates the header
   $('#superHumans').accordion({header: "h4"});
   
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
                $('#addAPara').bind('click', addAPara);
                $('#removeAPara').bind('click', removeAPara);
                
                $('#show').css('visibility', 'hidden');
                $('#hide').bind('click', hideThePage);
                $('#show').bind('visibility', showThePage);


});

//animation that hides the page
function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}
//animation that shows the page
function showThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);

}
//replaces text through html
function replaceWHtml(){
    $('#Thing2').html('<h4>Thing 2</h4>');
}

//adds text on command
function addAPara(){
    $('#randPara').append('<p>Another paragraph</p>');
}
//removes text that was added
function removeAPara(){
    $('#randPara p:last').remove();
}

//pops up an alert
function alertButtonClick() {
alert("There was a button clicked");
}
//shows that you left the text box in the events triggered
function onBlurEvent()
{
$("#second").html("You left the text box");
}
//shows that you entered the text box
function onFocusEvent()
{
$("#second").html("You entered the text box");
}
//also shows that you left the text box
function onMDownEvent()
{
$("#second").html("You left the text box");
}
//shows that you entered the text box
function onMUpEvent()
{
$("#second").html("You entered the text box");
}
//shows when you add text to the text box
function onChangeEvent()
{
$("#third").html("You changed the text box");
}
//resizes the window
function resizedWindow()
{
$("#second").html("Window was resized W: " + $(window).width() + " H: " + $(window).height());
}
//when the cursor hovers over the title the background color
//changes to green
function mouseOver()
{
$(".Thing").css("background-color", "green");
}
//when the mouse is off the title the background color changes tored
function mouseOut()
{
$(".Thing").css("background-color", "red");
}
//shows that you clicked the button twice
function dblClickedMe()
{
$("#second").html("You double clicked this button");
}

function unbindLogo()
{
$('#logo').unbind('mouseover', mouseOverMe).unbind('mouseout', mouseOutMe);
}


