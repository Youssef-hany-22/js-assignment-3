var nameWeb = document.getElementById("name");
var url = document.getElementById("url");
var container=[];


if (localStorage.getItem("WebSides")!=null){
 container=JSON.parse(localStorage.getItem("WebSides"))
 console.log(container);
 display()
}
else{
    container=[];
}


function addWebsite(){
   
if(validationName()&&validationUrl()){
    webSites={
        Name:nameWeb.value,
        url:url.value
    }
container.push(webSites)
localStorage.setItem("WebSides", JSON.stringify(container))
console.log(container);
clear()
display()
}
else{
    alert("the name must start with: uppercase  and the url must be start with: www. and end with: .com")
}


}
function clear(){
    nameWeb.value=""
    url.value=""

}
function display(){
var cartoona=""

for(var i=0 ; i<container.length;i++){
cartoona+=` 
 <tr>
<td>${i+1}</td>
<td>${container[i].Name}</td>
<td><a href="https://${container[i].url}" target="_blank" ><button class="btn btn-success ">visit</button></a></td>
<td><button class="btn btn-danger" onclick="deleteWebSite(${i})">delete</button></td>
</tr>






`



}


document.getElementById("tr").innerHTML=cartoona;

}
function deleteWebSite(index){

container.splice(index , 1)
localStorage.setItem("WebSides", JSON.stringify(container))
display()
}

function validationName(){


    var x=/^[A-Z]/;
   return x.test(nameWeb.value);
}

function validationUrl(){


    var x=/^www.\w{3,}.com$/;
   return x.test(url.value);
}
