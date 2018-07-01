window.onload=function(){
    var userChoice;
    var compChoice;
    var userWins;
    var div;
    var button= document.querySelector("button");
    var choice= document.querySelector("#choice");
    var select= document.querySelector("select");
    var main= document.querySelector("#main");
    
    button.addEventListener("click",buttonEvent);
    var divs= document.querySelectorAll(".div");
    for(var i=0;i<divs.length;i++){
    divs[i].addEventListener("click",userTurn);
    }
    
    function userTurn(){
        if(this.textContent==""){
            //this.style.background="#D6EAF8";
            this.textContent=userChoice;
            this.removeEventListener("click",userTurn);
        }
        var checkTriplet= findTriplet();
        if(checkTriplet){
            userWins=true;
            winner();
        }
        else{
            var emptyBlocks= [];
            for(i=0;i<divs.length;i++){
            if(divs[i].textContent==""){
                emptyBlocks.push(divs[i]);
            }
            }
            if(emptyBlocks.length>0){
                setTimeout(compTurn,500);
            }
            else{
                applyDraw();
            }
        
        }
    }
    function compTurn(){
        findDruplets();
        var checkTriplet= findTriplet();
        if(checkTriplet){
            userWins=false;
            winner();
        }
    }
    function findDruplets(){
        var horDivs=[];
        var verDivs=[];
        var digDivs=[];
        var k=0;
        var flag=0;
        for(var i=0;i<3;i++){
            horDivs[i]=[];
            for(var j=0;j<3;j++){
                horDivs[i].push(divs[k]);
                k++;
            }
        }
        k=0;
        for(i=0;i<3;i++){
            verDivs[i]=[];
            var c=k;
            for(j=0;j<3;j++){
                verDivs[i].push(divs[c]);
                c=c+3;
            }
            k++;
        }
        k=0;
        digDivs[0]=[];
        for(j=0;j<3;j++){
            digDivs[0].push(divs[k]);
            k+=4;
        }
        k=2;
        digDivs[1]=[];
        for(j=0;j<3;j++){
            digDivs[1].push(divs[k]);
            k+=2;
        }
        
        for(i=0;i<horDivs.length;i++){
            if(horDivs[i][0].textContent==horDivs[i][1].textContent && horDivs[i][0].textContent==compChoice && flag==0){
                if(horDivs[i][2].textContent==""){
                    //horDivs[i][2].style.background="#D6EAF8";
                    horDivs[i][2].textContent=compChoice;
                    horDivs[i][2].removeEventListener('click',userTurn);
                    flag=1;
                }
                
            }
            if(horDivs[i][0].textContent==horDivs[i][2].textContent && horDivs[i][0].textContent==compChoice && flag==0){
                if(horDivs[i][1].textContent==""){
                    //horDivs[i][1].style.background="#D6EAF8";
                    horDivs[i][1].textContent=compChoice;
                    horDivs[i][1].removeEventListener('click',userTurn);
                    flag=1;
                }
            }
            if(horDivs[i][1].textContent==horDivs[i][2].textContent && horDivs[i][1].textContent==compChoice && flag==0){
                if(horDivs[i][0].textContent==""){
                    //horDivs[i][0].style.background="#D6EAF8";
                    horDivs[i][0].textContent=compChoice;
                    horDivs[i][0].removeEventListener('click',userTurn);
                    flag=1;
                }
            }
        }
        if(flag==1){
            return;
        }
        for(i=0;i<verDivs.length;i++){
            if(verDivs[i][0].textContent==verDivs[i][1].textContent && verDivs[i][0].textContent==compChoice && flag==0){
                if(verDivs[i][2].textContent==""){
                    //verDivs[i][2].style.background="#D6EAF8";
                    verDivs[i][2].textContent=compChoice;
                    verDivs[i][2].removeEventListener("click",userTurn);
                    flag=1;
                }
                
            }
            if(verDivs[i][0].textContent==verDivs[i][2].textContent && verDivs[i][0].textContent==compChoice && flag==0){
                if(verDivs[i][1].textContent==""){
                    //verDivs[i][1].style.background="#D6EAF8";
                    verDivs[i][1].textContent=compChoice;
                    verDivs[i][1].removeEventListener("click",userTurn);
                    flag=1;
                }
            }
            if(verDivs[i][1].textContent==verDivs[i][2].textContent && verDivs[i][1].textContent==compChoice && flag==0){
                if(verDivs[i][0].textContent==""){
                    //verDivs[i][0].style.background="#D6EAF8";
                    verDivs[i][0].textContent=compChoice;
                    verDivs[i][0].removeEventListener("click",userTurn);
                    flag=1;
                }
            }
        }
        if(flag==1){
            return;
        }
        for(i=0;i<digDivs.length;i++){
            if(digDivs[i][0].textContent==digDivs[i][1].textContent && digDivs[i][0].textContent==compChoice && flag==0){
                if(digDivs[i][2].textContent==""){
                    //digDivs[i][2].style.background="#D6EAF8";
                    digDivs[i][2].textContent=compChoice;
                    digDivs[i][2].removeEventListener("click",userTurn);
                    flag=1;
                }
                
            }
            if(digDivs[i][0].textContent==digDivs[i][2].textContent && digDivs[i][0].textContent==compChoice && flag==0){
                if(digDivs[i][1].textContent==""){
                    //digDivs[i][1].style.background="#D6EAF8";
                    digDivs[i][1].textContent=compChoice;
                    digDivs[i][1].removeEventListener("click",userTurn);
                    flag=1;
                }
            }
            if(digDivs[i][1].textContent==digDivs[i][2].textContent && digDivs[i][1].textContent==compChoice && flag==0){
                if(digDivs[i][0].textContent==""){
                    //digDivs[i][0].style.background="#D6EAF8";
                    digDivs[i][0].textContent=compChoice;
                    digDivs[i][0].removeEventListener("click",userTurn);
                    flag=1;
                }
            }
        }
        if(flag==1){
            return;
        }
        
        for(i=0;i<horDivs.length;i++){
            if(horDivs[i][0].textContent==horDivs[i][1].textContent && horDivs[i][0].textContent==userChoice && flag==0){
                if(horDivs[i][2].textContent==""){
                    //horDivs[i][2].style.background="#D6EAF8";
                    horDivs[i][2].textContent=compChoice;
                    horDivs[i][2].removeEventListener('click',userTurn);
                    flag=1;
                }
                
            }
            if(horDivs[i][0].textContent==horDivs[i][2].textContent && horDivs[i][0].textContent==userChoice && flag==0){
                if(horDivs[i][1].textContent==""){
                    //horDivs[i][1].style.background="#D6EAF8";
                    horDivs[i][1].textContent=compChoice;
                    horDivs[i][1].removeEventListener('click',userTurn);
                    flag=1;
                }
            }
            if(horDivs[i][1].textContent==horDivs[i][2].textContent && horDivs[i][1].textContent==userChoice && flag==0){
                if(horDivs[i][0].textContent==""){
                    //horDivs[i][0].style.background="#D6EAF8";
                    horDivs[i][0].textContent=compChoice;
                    horDivs[i][0].removeEventListener('click',userTurn);
                    flag=1;
                }
            }
        }
        if(flag==1){
            return;
        }
        for(i=0;i<verDivs.length;i++){
            if(verDivs[i][0].textContent==verDivs[i][1].textContent && verDivs[i][0].textContent==userChoice && flag==0){
                if(verDivs[i][2].textContent==""){
                    //verDivs[i][2].style.background="#D6EAF8";
                    verDivs[i][2].textContent=compChoice;
                    verDivs[i][2].removeEventListener("click",userTurn);
                    flag=1;
                }
                
            }
            if(verDivs[i][0].textContent==verDivs[i][2].textContent && verDivs[i][0].textContent==userChoice && flag==0){
                if(verDivs[i][1].textContent==""){
                    //verDivs[i][1].style.background="#D6EAF8";
                    verDivs[i][1].textContent=compChoice;
                    verDivs[i][1].removeEventListener("click",userTurn);
                    flag=1;
                }
            }
            if(verDivs[i][1].textContent==verDivs[i][2].textContent && verDivs[i][1].textContent==userChoice && flag==0){
                if(verDivs[i][0].textContent==""){
                    //verDivs[i][0].style.background="#D6EAF8";
                    verDivs[i][0].textContent=compChoice;
                    verDivs[i][0].removeEventListener("click",userTurn);
                    flag=1;
                }
            }
        }
        if(flag==1){
            return;
        }
        for(i=0;i<digDivs.length;i++){
            if(digDivs[i][0].textContent==digDivs[i][1].textContent && digDivs[i][0].textContent==userChoice && flag==0){
                if(digDivs[i][2].textContent==""){
                    //digDivs[i][2].style.background="#D6EAF8";
                    digDivs[i][2].textContent=compChoice;
                    digDivs[i][2].removeEventListener("click",userTurn);
                    flag=1;
                }
                
            }
            if(digDivs[i][0].textContent==digDivs[i][2].textContent && digDivs[i][0].textContent==userChoice && flag==0){
                if(digDivs[i][1].textContent==""){
                    //digDivs[i][1].style.background="#D6EAF8";
                    digDivs[i][1].textContent=compChoice;
                    digDivs[i][1].removeEventListener("click",userTurn);
                    flag=1;
                }
            }
            if(digDivs[i][1].textContent==digDivs[i][2].textContent && digDivs[i][1].textContent==userChoice && flag==0){
                if(digDivs[i][0].textContent==""){
                    //digDivs[i][0].style.background="#D6EAF8";
                    digDivs[i][0].textContent=compChoice;
                    digDivs[i][0].removeEventListener("click",userTurn);
                    flag=1;
                }
            }
        }
        if(flag==1){
            //return;
        }
        else{
            var emptyBlocks= [];
            for(i=0;i<divs.length;i++){
            if(divs[i].textContent==""){
                emptyBlocks.push(divs[i]);
            }
            }
            if(emptyBlocks.length>0){
                var rand= Math.floor((emptyBlocks.length-1)*Math.random());
                emptyBlocks[rand].textContent=compChoice;
                emptyBlocks[rand].removeEventListener("click",userTurn);
            }
            else{
                applyDraw();
            }
        
        }
        var draw= detectDraw();
        if(draw){
            applyDraw();
        }
    }   
    function findTriplet(){
        var div1= divs[0].textContent;
        var div2= divs[1].textContent;
        var div3= divs[2].textContent;
        var div4= divs[3].textContent;
        var div5= divs[4].textContent;
        var div6= divs[5].textContent;
        var div7= divs[6].textContent;
        var div8= divs[7].textContent;
        var div9= divs[8].textContent;
        
        if(div1==div2 && div2==div3 && div1!=""){
            drawLine(10,51,296,51);
            return true;
        }
        else if(div4==div5 && div5==div6 && div4!=""){
            drawLine(10,153,296,153);
            return true;
        }
        else if(div7==div8 && div8==div9 && div7!=""){
            drawLine(10,255,296,255);
            return true;
        }
        else if(div1==div4 && div4==div7 && div1!=""){
            drawLine(51,10,51,296);
            return true;
        }
        else if(div2==div5 && div5==div8 && div2!=""){
            drawLine(153,10,153,296);
            return true;
        }
        else if(div3==div6 && div6==div9 && div3!=""){
            drawLine(255,10,255,296);
            return true;
        }
        else if(div1==div5 && div5==div9 && div1!=""){
            drawLine(10,10,296,296);
            return true;
        }
        else if(div3==div5 && div5==div7 && div3!=""){
            drawLine(10,296,296,10);
            return true;
        }
        else{
            return false;
        }
    }
    function winner(){
        var canvas= document.createElement("canvas");
        canvas.style.position="absolute";
        canvas.style.top="40%";
        canvas.style.left="35%";
        canvas.height=60;
        canvas.width=306;
        canvas.style.background="transparent";
        var ctx= canvas.getContext("2d");
        ctx.font="45px Ariel";
        ctx.fillStyle="#5B2C6F";
        document.body.appendChild(canvas);
        if(userWins){
            ctx.fillText("You Win!!",55,40);
        }
        else if(!userWins){
            ctx.fillText("Computer Wins!",5,40);
        }
        gameOver();
        var reset= document.createElement("button");
        reset.textContent="Reset Game";
        reset.style.background="yellow";
        reset.style.position="absolute";
        reset.style.top="70%";
        reset.style.left="45%";
        reset.addEventListener("click",resetGame);
        document.body.appendChild(reset);
    }
    function gameOver(){
        for(i=0;i<divs.length;i++){
            divs[i].removeEventListener("click",userTurn);
            divs[i].style.transition="opacity 0.2s linear";
            divs[i].style.opacity="0.2";
        }
    }
    function resetGame(){
        document.location.reload();
    }
    function drawLine(startX,startY,endX,endY){
        var line= document.createElement("canvas");
        line.height=306;
        line.width=306;
        line.style.position="absolute";
        line.style.top="18%";
        line.style.left="35%";
        line.style.background="transparent";
        line.style.opacity=0.4;
        line.style.transition="opacity 0.2s linear";
        var ctxt= line.getContext("2d");
        ctxt.beginPath();
        ctxt.moveTo(startX,startY);
        ctxt.lineTo(endX,endY);
        ctxt.lineWidth=10;
        ctxt.strokeStyle="#ff0000";
        ctxt.lineCap="round";
        ctxt.stroke();
        document.body.appendChild(line);
    }
    function displayChoices(){
        var disChoice= document.createElement("canvas");
        disChoice.height=40;
        disChoice.width=306;
        disChoice.style.position='absolute';
        disChoice.style.top="100px";
        disChoice.style.left="35%";
        disChoice.style.background="transparent";
        var ctcx= disChoice.getContext("2d");
        ctcx.font="10px Ariel";
        ctcx.fillStyle="#5B2C6F";
        ctcx.fillText("YOU: "+userChoice,10,10);
        ctcx.fillText("COMPUTER: "+compChoice,220,10);
        document.body.appendChild(disChoice);
    }
    function detectDraw(){
        var emptyBlocks= [];
            for(i=0;i<divs.length;i++){
            if(divs[i].textContent==""){
                emptyBlocks.push(divs[i]);
            }
            }
            if(emptyBlocks.length>0){
                return false;
            }
            else{
                return true;
            }
    }
    function applyDraw(){
        for(var i=0;i<divs.length;i++){
            divs[i].style.transition="opacity 0.2s linear";
            divs[i].style.opacity="0.2";
        }
        
        var canvas= document.createElement("canvas");
        canvas.style.position="absolute";
        canvas.style.top="40%";
        canvas.style.left="35%";
        canvas.height=60;
        canvas.width=306;
        canvas.style.background="transparent";
        var ctx= canvas.getContext("2d");
        ctx.font="45px Ariel";
        ctx.fillStyle="#5B2C6F";
        document.body.appendChild(canvas);
        ctx.fillText("Match Draw",45,40);
        
        gameOver();
        var reset= document.createElement("button");
        reset.textContent="Reset Game";
        reset.style.background="yellow";
        reset.style.position="absolute";
        reset.style.top="70%";
        reset.style.left="45%";
        reset.addEventListener("click",resetGame);
        document.body.appendChild(reset);
    }
    
    function turnChoice(){
        div= document.createElement("div");
        div.setAttribute("id","whoseTurn");
        var label= document.createElement("label");
        label.textContent="Whom do you want to start?";
        var select= document.createElement("select");
        select.setAttribute("id","CU");
        var option1= document.createElement("option");
        option1.setAttribute('value','C');
        option1.textContent="Computer";
        var option2= document.createElement("option");
        option2.setAttribute("value","U");
        option2.textContent="You";
        var button= document.createElement("button");
        button.setAttribute("type","submit");
        button.textContent="Let's Begin!";
        button.style.background="#E74C3C";
        button.style.color="white";
        button.addEventListener("click",turnSubmit);
        
        div.appendChild(label);
        select.appendChild(option1);
        select.appendChild(option2);
        div.appendChild(select);
        div.appendChild(button);
        document.body.appendChild(div);
        
    }
    function turnSubmit(){
        var select= document.querySelector("#CU");
        var turn= select.value;
        if (turn=="C") {
            setTimeout(compTurn,500);
        }
        div.innerHTML="";
    }
    
    function buttonEvent(){
        userChoice= select.value;
        if(userChoice=="X"){
            compChoice="O";
        }
        else{
            compChoice="X";
        }
        choice.innerHTML="";
        displayChoices();
        turnChoice();
    }
}