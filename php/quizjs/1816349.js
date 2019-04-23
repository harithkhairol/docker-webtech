$.get("https://adisazizan.xyz/tutorial/api/travel.php", function(data, status){
        

    // alert("Data: " + data + "\nStatus: " + status+ data[0].place);

        console.log(data);

        document.getElementsByClassName('loader')[0].style.display = 'none';

var image = document.getElementById("dessert-img");
image.innerHTML ="<img src='"+data[0].picture+"'></img>"


var parent = document.getElementById("title");
h2 = parent.getElementsByTagName("h2");
h2[0].innerHTML = data[0].place;

var parent = document.getElementById("desc");
h2 = parent.getElementsByTagName("p");
h2[0].innerHTML = data[0].details;


for (var i = 0; i < 3; i++) {
    var ul = document.getElementById("lists");
    var li = document.createElement('li');
    li.appendChild(document.createElement("li"));
    li.innerHTML ="<button style='color:white; background-color:black; padding:5px; border:5px; ' onclick='myFunction("+i+")''>"+ data[i].place +"</button>";
    ul.appendChild(li);

    

}

function myFunction(i){

    return i;
    
}

var image = document.getElementById("dessert-img");
image.innerHTML ="<img src='"+data[0].picture+"'></img>"


var parent = document.getElementById("title");
h2 = parent.getElementsByTagName("h2");
h2[0].innerHTML = data[0].place;

var parent = document.getElementById("desc");
h2 = parent.getElementsByTagName("p");
h2[0].innerHTML = data[0].details;



        }).val();