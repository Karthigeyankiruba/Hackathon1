async function nation(){
    try{
        let name=document.getElementById("n1").value;
        console.log(name);
        var res=await fetch(`https://api.nationalize.io/?name=${name}`)
        var result=await res.json();
       
        console.log(result.country[0],result.country[1],result.country[2]);
        
    } catch(error){
        console.log(error);
    }
}

var form = document.createElement('form');
form.setAttribute('id','d1');
form.setAttribute('class','w1');
var label=document.createElement("label")
label.innerHTML='Search name:';
var br1 = document.createElement('br');


let input=document.createElement("input");
input.setAttribute('type','text');
input.setAttribute('id','n1');
input.setAttribute('placeholder','Name');

form.append(label,br1,input);
var br3 = document.createElement('br');
// var division=document.createElement('div');
// division.setAttribute('id','dd');

// var table=document.createElement('table');
// table.setAttribute('id','tt');
// table.setAttribute('class','table');

// var thead = document.createElement('thead');
// thead.setAttribute('class','thead-dark');
// var tr = document.createElement('tr');

// thead.append(tr);
// table.append(thead);

// document.body.append(division,table);
document.body.append(form);




