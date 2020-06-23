// 6394741753
var square = document.getElementById('square')

var html = `<div class="square">1</div>`
for(var i =0; i<5 ;i++){
for (let j = 0; j <5 ; j++) {

    var node = document.createElement('button')
    node.textContent = `${i}` + `${j}`
    node.className = 'square btn btn-light p-4'
    node.id = String(`${i}` + `${j}`)
    square.appendChild(node)

}
var temp = document.createElement('br')
square.appendChild(temp)
var temp = document.createElement('br')
square.appendChild(temp)
}

var player_chance = true 

var demo_grid = [];
var index = 0;
for(var i =0;i<5;i++){
    var g = []
    for(var j =0;j<5;j++){
        g.push(0)
    }
    demo_grid.push(g)
}

console.log(demo_grid)

var box = document.querySelectorAll('.square').forEach(item =>{
    item.addEventListener('click',event =>{
     if(player_chance){
    (document.getElementById(`${item.textContent}`).style.backgroundColor ="#f56042")
    player_chance = !player_chance
    let t = item.textContent
    var arr = t.split('')
    console.log(arr)

    demo_grid[arr[0]][arr[1]] = 'A'
    console.log(demo_grid)

     }else{
        (document.getElementById(`${item.textContent}`).style.backgroundColor ="green")
        player_chance = !player_chance
        let t = item.textContent
        var arr = t.split('')
        console.log(arr)
        demo_grid[arr[0]][arr[1]] = 'B'
        console.log(demo_grid)
     }
    })
})

