
const GAMEBOARD = {
    gameboard: [0,0,0,0,0,0,0,0,0],
    WinningCombos: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],

}


const Players= {
    CreatePlayer:(player,sign)=>{
        let human = player[0].checked
        let bot = player[1].checked
        
        return{human,bot,sign,player}
    },

}


const GAME ={
    start:()=>{
        let start = document.querySelector('.start')
        start.addEventListener('click',()=>{
            let p1 = document.querySelectorAll('.p1')
            let p2 = document.querySelectorAll('.p2')

            let player1 = Players.CreatePlayer(p1,'x')
            let player2 = Players.CreatePlayer(p2,'o')
            Players.p1 = player1
            Players.p2 = player2
            
            
            GAME.play()
        })
    },
    play:()=>{
        let turn = 0
        board = document.querySelectorAll('.gameboard>div')
        board.forEach(div => {
            div.addEventListener('click',()=>{
                if(GAMEBOARD.gameboard[div.id] == 0){
                    if(turn%2 == 0){
                        div.innerText= Players.p1.sign
                        GAMEBOARD.gameboard[div.id] = Players.p1.sign
                        GAME.checkWinner(Players.p1.sign)
                        ++turn
                    }
                    else{
                        div.innerText = Players.p2.sign
                        GAMEBOARD.gameboard[div.id] = Players.p2.sign
                        GAME.checkWinner(Players.p2.sign)
                        ++turn
                    }
                }
            })
            
        });

    },
    checkWinner:(sign)=>{
        for(let i = 0;i<GAMEBOARD.WinningCombos.length;i++){
            let combo = GAMEBOARD.WinningCombos[i]
            if(GAMEBOARD.gameboard[combo[0]] == sign &&
                GAMEBOARD.gameboard[combo[1]] == sign &&
                GAMEBOARD.gameboard[combo[2]] == sign){
                    console.log('winner')

            }
        }
    }
}
GAME.start()