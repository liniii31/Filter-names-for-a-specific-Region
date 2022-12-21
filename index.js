import JSONDATA from './names.json' assert { type: "json" };

let filter = document.getElementById('filter');
let namesDiv = document.getElementById('names-div');
let names = JSONDATA.names;
filter.addEventListener('click',function(){
    let region = document.getElementById('region').value ;
    let gender = document.getElementById('gender').value.toLowerCase();
    if(region==="" || gender===""){
        alert("All fields are required");
    }else if(gender!=="male" && gender!=="female"){
        alert("Wrong spelling for gender");
    }
    else{
        let flag=true;
        for(let i=0;i<names.length;i++){  
            namesDiv.innerHTML="";         
            if(names[i].region===region){
                console.log("indside region.........",names[i][gender])
                for(let j=0;j<names[i][gender].length;j++){ 
                    console.log("yay!!")                   
                    let ele = document.createElement('div');
                    ele.classList.add('name-span');
                    ele.textContent = names[i][gender][j];
                    namesDiv.appendChild(ele);
                }
                flag=false;
                break;
            }            
        }
        if(flag){
            let ele = document.createElement('div');
            ele.classList.add('name-span');
            ele.textContent = "Names for region "+region+" does not exists in our database...";
            namesDiv.appendChild(ele);  
        }
    }    
})