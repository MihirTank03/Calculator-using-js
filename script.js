let btnDisplay=document.getElementById("display");
let b = document.querySelectorAll(".btn");
let arr=[];
let result=0;

// event listner for every node
b.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        
        
        
        arr.push(btn.innerText);
        btnDisplay.value=arr.join("");
        
        arr.forEach((n)=>{
            
            if(n == "C"){
                arr=[];
                btnDisplay.value="Cleared";
            }else if(n == "="){
                
                arr.pop("=");
                result=eval(arr.join(""));
                //console.log(result);
                btnDisplay.value=result;
                arr=[];
                
            }
           
        });      
    });
});

