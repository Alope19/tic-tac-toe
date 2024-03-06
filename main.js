
const GAMEBOARD = {
    gameboard: [0,0,0,0,0,0,0,0,0],
    WinningCombos: [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
    checkValid:(div)=>{
        //TODO check if space is available in gameboard

    }
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
                if(GAMEBOARD.checkValid(div)){
                    if(turn%2 == 0){
                        div.innerText= Players.p1.sign
                    }
                    else{
                        div.innerText = Players.p2.sign
                        ++turn
                    }
                }
            })
            
        });

    }
}
GAME.start()