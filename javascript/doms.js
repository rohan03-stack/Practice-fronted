// const h1_data = document.getElementById('headId');
// console.log(h1_data);
// console.log(h1_data.textContent);
// console.log(h1_data.innerText);

// const h1_class = document.getElementsByClassName('headClass')[0].textContent;
// console.log(h1_class);
// console.log(h1_class);

// const tag_Data = document.getElementsByTagName('h2')[0]
// console.log(tag_Data.innerText);

// function addData(){
//     const input_data = document.getElementsByName('email')[0].value
//     alert(input_data);
// }

// ...........................add Text..........................................
// const h1_data = document.getElementById('headId').innerHTML = "Rohan is good boy"

// document.getElementsByClassName('headClass')[0].innerHTML = "hello world"

// document.getElementsByTagName('h2')[0].innerHTML = "hello bitch"




// .............................events............................................................................
function clickEvent() {
    alert("click event is occur......")
}

function dblClickEvent(){
    alert("double click event is occur")
}

function submitEvent(){
    const name = document.getElementsByName('name')[0].value;
    alert(name)
}




// ................addEventListener......................................................................

const form = document.getElementById('form').addEventListener('submit' , submitEvent);




