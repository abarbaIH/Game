// game.init()

window.onload = () => {
    document.getElementById('button-start').onclick = () => {
        document.getElementById("div-sup") && deleteDiv()
        startGame();

    };

    function deleteDiv() {
        let divSup = document.getElementById("div-sup")
        let padre = divSup.parentNode
        padre.removeChild(divSup)

    }
    function startGame() {
        game.init()
    }
};