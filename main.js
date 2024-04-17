
const GAMEBOARD = {
    gameboard: [0,0,0,0,0,0,0,0,0],
    WinningCombos: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    board: document.querySelectorAll('.gameboard>div')

}


const Players= {
    CreatePlayer:(player,sign)=>{
        
        
        return{sign,player}
    },

}


const GAME ={

    player1Turn: true,
    gameOver: false,
    turn: 0,

    start:()=>{
        let start = document.querySelector('.start')
        start.addEventListener('click',()=>{
            GAME.reset()
            let p1 = document.querySelectorAll('.p1')
            let p2 = document.querySelectorAll('.p2')

            let player1 = Players.CreatePlayer(p1,'x')
            let player2 = Players.CreatePlayer(p2,'o')
            Players.p1 = player1
            Players.p2 = player2
            console.log(player1,player2)
            
            
            GAME.play()
        })
    },
    play:()=>{

        GAMEBOARD.board.forEach(div => {
            div.addEventListener('click',()=>{
                if(GAMEBOARD.gameboard[div.id] == 0){

                    if(GAME.player1Turn == true && GAME.gameOver == false){
                        div.innerText= Players.p1.sign
                        GAMEBOARD.gameboard[div.id] = Players.p1.sign
                        GAME.checkWinner()
                        GAME.player1Turn = false
                    }
                    else if(GAME.player1Turn == false && GAME.gameOver == false){
                        div.innerText = Players.p2.sign
                        GAMEBOARD.gameboard[div.id] = Players.p2.sign
                        GAME.checkWinner()
                        GAME.player1Turn = true
                    }
                }
            })
            
        });


    },
    checkWinner:()=>{
        let sign
        
        if(GAME.player1Turn == true){
            sign = Players.p1.sign
        }
        else{
            sign = Players.p2.sign
        }

        winnerDiv = document.querySelector('.winner')


        for(let i = 0;i<GAMEBOARD.WinningCombos.length;i++){
            let combo = GAMEBOARD.WinningCombos[i]
            if(GAMEBOARD.gameboard[combo[0]] == sign &&
                GAMEBOARD.gameboard[combo[1]] == sign &&
                GAMEBOARD.gameboard[combo[2]] == sign){
                    if(sign == 'x'){
                        winnerDiv.innerText = 'Player 1 is the winner'
                        GAME.gameOver = true

                    }
                    else if(sign == 'o'){
                        winnerDiv.innerText = 'Player 2 is the Winner'
                        GAME.gameOver = true

                    }
                    

            }
        }
        GAME.turn++
        if(GAME.turn == 9){
            winnerDiv.innerText = 'Its a Tie'
        }
        
    }
    ,
    reset:()=>{

        GAME.player1Turn = true
        GAME.gameOver = false
        GAME.turn = 0
        GAMEBOARD.gameboard = [0,0,0,0,0,0,0,0,0]

        GAMEBOARD.board.forEach(div=>{
            div.innerText = ''
        })
        document.querySelector('.winner').innerText = ''

    },

}
GAME.start()