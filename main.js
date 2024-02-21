
const GAMEBOARD = {
    gameboard: [0,0,0,0,0,0,0,0,0],
    WinningCombos: [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
    tiles:(sign)=>{
        const square = document.querySelectorAll('.gameboard>div')
            square.forEach((div)=>{
                div.addEventListener('click',()=>{
                    console.log(div.id)
                    div.innerText = sign
                })
            })            
    }

}


function CreatePlayer(player,sign){
    let human = player[0].checked
    let bot = player[1].checked
    console.log(sign)
    let symbol = sign
    
    return{human,bot,symbol,player}

}


const GAME ={
    start:()=>{
        let start = document.querySelector('.start')
        start.addEventListener('click',()=>{
            let p1 = document.querySelectorAll('.p1')
            let p2 = document.querySelectorAll('.p2')

            let player1 = CreatePlayer(p1,'x')
            let player2 = CreatePlayer(p2,'o')

            GAMEBOARD.tiles()
        })

    }
    
}
GAME.start()