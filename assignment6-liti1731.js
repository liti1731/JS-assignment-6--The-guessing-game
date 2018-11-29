var number=document.getElementById("number").value;

var score=document.getElementById("score");
var guess=document.getElementById("guess");
var theForm=document.getElementById("form");
var boxUl=document.getElementById("boxUl");

var time=10;
var allNumber=0;
var tempLi;
var randomNumber;


theForm.addEventListener("oninput",drawMyNumber);
theForm.addEventListener("submit", action);

function drawMyNumber(event){
	event.preventDefault();//stop submit
    boxUl.innerHTML="";
	for (var i = 0; i <document.getElementById("number").value; i++) {
		tempLi=document.createElement("li");
        tempLi.setAttribute("id","item"+i);
        boxUl.appendChild(tempLi);
        tempLi.style.cssText="float:left;margin:10px 10px 10px 0px;list-style:none;border:solid;width:40px;height:40px;border-radius:30px;border-color:grey;";
        boxUl.style.overflow="hidden";
	}  
}//draw circle for input number


function action(event){
    event.preventDefault();
    if (time>1) {
	    time=time-1;
	    guess.innerText=time;//guess 
        randomNumber=Math.floor(Math.random()*10)+1;//randomNumber
        boxUl.innerHTML=""; 
        for (var i = 0; i <randomNumber; i++) {
			tempLi=document.createElement("li");
	        tempLi.setAttribute("id","item"+i);
	        boxUl.appendChild(tempLi);
	        tempLi.style.cssText="float:left;margin:10px 10px 10px 0px;list-style:none;width:40px;height:40px;border-radius:30px;background-color:orange;";
	        boxUl.style.overflow="hidden";
	    }//draw random circles
        if (document.getElementById("number").value<=randomNumber) {
	        allNumber=Number(document.getElementById("number").value)+allNumber;
	   	    score.innerHTML=allNumber;//score
	        for (var i = 0; i < document.getElementById("number").value; i++) {
	       	    var getTerm=document.getElementById("item"+i);
	       	    getTerm.setAttribute("class","green");//draw green
	        }
	    }else if(document.getElementById("number").value>randomNumber){
            boxUl.innerHTML="";
            for (var i = 0; i <document.getElementById("number").value; i++) {
	           	tempLi=document.createElement("li");
	           	tempLi.setAttribute("id","item"+i);
	            boxUl.appendChild(tempLi);
	            tempLi.style.cssText="float:left;margin:10px 10px 10px 0px;list-style:none;width:40px;height:40px;border-radius:30px;border:solid;border-color:red;";
	            boxUl.style.overflow="hidden";
            }
            for (var i = 0; i < randomNumber; i++) {
           	    var getTerm=document.getElementById("item"+i);
	       	    getTerm.setAttribute("class","redBackground");
            }
     
           

	    }
    }else{
    	time=0;
	    guess.innerText=time;
	    guess.style.color="red";
    }
}     
   
