// jq
$(document).ready(function(){
    // alert("hello world");
    // show alert 
    // $('#sho').click(function(){
    //     alert("Welcome");
    // })
    $('#sho').on('click',function(){
        alert("jkdfsghsdjf")
    })
})

//js
// text change
function textChange(){
    
    document.getElementById('t_c').innerHTML = "hello";
}
// show date 
function showDate(){

    document.getElementById('s_d').innerHTML = Date();
}
// bulb on off
function bulbon(){
    document.getElementById('bulb').src='img/on.gif';
}
function bulboff(){
    document.getElementById('bulb').src='img/off.gif'
}
// color change
function colorChange(){
    document.getElementById('c_c').style.color='red'
}

// show/hide
function textShow(){
    document.getElementById('text').style.display='block'
}
function textHide(){
    document.getElementById('text').style.display='none'    
}




