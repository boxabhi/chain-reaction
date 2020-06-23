
var square = document.getElementById('square')

var html = `<div class="square">1</div>`
for(var i =0; i<5 ;i++){
for (let j = 0; j <5 ; j++) {

    var node = document.createElement('button')
    node.textContent = `${i}` + `${j}`
    node.className = 'square btn btn-primary'
    square.appendChild(node)

}
var temp = document.createElement('br')
square.appendChild(temp)
var temp = document.createElement('br')
square.appendChild(temp)
}

var box = document.querySelectorAll('.square').forEach(item =>{
    item.addEventListener('click',event =>{
        console.log(item.textContent)
    })
})

