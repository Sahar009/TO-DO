var dateFromHtml = document.getElementById('date');
 var itemArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


//tenary operator
//  var x = 5
//  x >= 5 ? console.log('x is greater than 0r =  5') : console.log('x< than 5')

//  if(x>=5){
//     console.log('x is greater than 0r =  5')
//  }else{
//     console.log('x< than 5')
//  }
 
///functio7n to create items
function createItem(item){
itemArray.push(item.value)
localStorage.setItem('items', JSON.stringify(itemArray))
location.reload()
}

//function for key press
function keypress(e){
    if(e.key ==="Enter"){
        const item = document.getElementById('item')
        // console.log(item.value);
    
        //create item function should run
        createItem(item)
    }
    }
document.getElementById('item').addEventListener("keypress",keypress)


//function to click enter

document.getElementById('enter').addEventListener('click',function (){
    const item = document.getElementById('item')
    createItem(item)
})




// console.log(itemArray);





//function to display date
function displayDate(){
    var date = new Date();
date = date.toString().split(" ")
dateFromHtml.innerHTML = `${date[1]  }  ${date[2]} ${date[3]}`
}
displayDate()

