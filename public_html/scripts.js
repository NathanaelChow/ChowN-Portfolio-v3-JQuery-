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
                $('#addAPara').bind('click', addAPara);
                $('#removeAPara').bind('click', removeAPara);
                
                $('#show').css('visibility', 'hidden');
                $('#hide').bind('click', hideThePage);
                $('#show').bind('visibility', showThePage);


});


function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);

}

function replaceWHtml(){
    $('#Thing2').html('<h4>Thing 2</h4>');
}


function addAPara(){
    $('#randPara').append('<p>Another paragraph</p>');
}

function removeAPara(){
    $('#randPara p:last').remove();
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
$("#second").html("You double clicked this button");
}

function unbindLogo()
{
$('#logo').unbind('mouseover', mouseOverMe).unbind('mouseout', mouseOutMe);
}


