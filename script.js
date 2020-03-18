close_index=0;
check_index=0;
star_index=0;
function AddTodo(){
    var li=document.createElement('li');
    var theInputValue=document.getElementById("the-input").value;
    var textNode=document.createTextNode(theInputValue);

    li.appendChild(textNode);

    if(theInputValue===''){
        alert("Empty");
    }else{
        document.getElementById("the-ul").appendChild(li);
    }

    document.getElementById("the-input").value="";

    Closelist(li);
    completelist(li);
    starlist(li);
}

//Close
function Closelist(li) {
    var close_tag = document.createElement("i");
    close_tag.className = "fas fa-trash-alt";
    close_tag.id="close"+close_index;
    li.appendChild(close_tag);

    var closeButton=document.getElementById("close");
    for(i=0;i<=close_index;i++) {
        $('#close'+i).click(function () {
            var theDiv = this.parentElement;
            theDiv.style.display = "none";
        });
    }

    close_index++;
}

//click
function completelist(li){
    var complete_tag=document.createElement("i");
    complete_tag.className = "fas fa-check";
    complete_tag.id="complete"+check_index;
    li.appendChild(complete_tag);


}

//star
function starlist(li){
    var star_tag=document.createElement("i");
    star_tag.className = "fas fa-star";
    star_tag.id="star"+star_index;
    li.appendChild(star_tag);
}



/*
var ulList=document.querySelector('ul');
ulList.addEventListener('click',function(event) {
    if(event.target.tagName==="LI"){
        event.target.classList.toggle('checked');
    }
},false);*/