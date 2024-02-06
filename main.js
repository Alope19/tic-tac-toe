
const GAMEBOARD = {
    gameboard: [0,0,0,0,0,0,0,0,0],
    WinningCombos: [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
    tiles:()=>{
        const square = document.querySelectorAll('.gameboard>div')
            square.forEach((div)=>{
                div.addEventListener('click',()=>{
                    console.log(div.id)
                })
            })            
    }
    
}


const PLAYERS ={
    //
}


const BUTTONS={

}


const GAME ={

    start:()=>{
        let start = document.querySelector('.start')
        start.addEventListener('click',()=>{
            GAMEBOARD.tiles()
        })

    }
    

}
GAME.start()
