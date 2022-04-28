//class de casse si la case est une bombe alors le type sera égal a true
class Cell {
    constructor(x, y, type) {
        this.x = x
        this.y = y
        this.type = type
        this.value = 0
    }

    ChangeValue() {
        this.value += 1
    }
}

// classe de la map qui enregistre chaque case dans une matrisse
class Map {
    map_x = 0
    map_y = 0
    map = []
    num_mine = 0

    constructor(map_x, map_y, num_mine) {
        this.map_x = map_x
        this.map_y = map_y
        this.num_mine = num_mine
        this.GenerateMap(this.map_x, this.map_y, this.num_mine)
        this.GenerateMineOnACell(num_mine)
        this.GenerateCell()
    }

    GenerateMap(map_x, map_y) {
        const map = []
        if (map_x > 100) {
            map_x = 100
        }
        for (let i = 0; i < map_x; i++) {
            map[i] = []
            for (let j = 0; j < map_y; j++) {
                map[i][j] = new Cell(i, j, false)
            }
        }
        this.map = map
    }

    GenerateMineOnACell(num_mine) {
        //generation des mines
        for (let i = 0; i < num_mine; i++) {
            this.Mineverification()
        }
    }

    Mineverification() {
        let x = Math.floor(Math.random() * this.map_x)
        let y = Math.floor(Math.random() * this.map_y)
        if (this.map[x][y].type == false) {
            this.map[x][y].type = true
        } else {
            this.Mineverification()
        }
    }

    GenerateCell() {
        //generation des cellules
        //generation des nombres autour des mines
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j].type == false) {
                    // attribution a la cell d une value condittionnée par les cellules bombes adjacentes
                    //i-1
                    if (i > 0) {
                        if (this.map[i - 1][j].type == true) {
                            this.map[i][j].ChangeValue()
                        }
                    }
                    //i+1
                    if (i < this.map_x - 1) {
                        if (this.map[i + 1][j].type == true)
                            this.map[i][j].ChangeValue()
                    }
                    //j-1
                    if (j > 0) {
                        if (this.map[i][j - 1].type == true)
                            this.map[i][j].ChangeValue()
                    }
                    //j+1
                    if (j < this.map_y - 1) {
                        if (this.map[i][j + 1].type == true)
                            this.map[i][j].ChangeValue()
                    }
                    //i-1,j-1
                    if (i > 0 && j > 0) {
                        if (this.map[i - 1][j - 1].type == true)
                            this.map[i][j].ChangeValue()
                    }
                    //i-1,j+1
                    if (i > 0 && j < this.map_y - 1) {
                        if (this.map[i - 1][j + 1].type == true)
                            this.map[i][j].ChangeValue()
                    }
                    //i+1,j-1
                    if (i < this.map_x - 1 && j > 0) {
                        if (this.map[i + 1][j - 1].type == true)
                            this.map[i][j].ChangeValue()
                    }
                    //i+1,j+1
                    if (i < this.map_x - 1 && j < this.map_y - 1) {
                        if (this.map[i + 1][j + 1].type == true)
                            this.map[i][j].ChangeValue()
                    }
                }
            }
        }
    }
}

class Game {
    constructor(map_x, map_y, num_mine) {
        this.GenerateMap(map_x, map_y, num_mine)
    }

    GenerateMap(map_x, map_y, num_mine) {
        //demande des parametres (plus tard)
        /*
        const prompt = require("prompt-sync")();
        while(map_x > 100 || map_y > 100){
            map_x = prompt("Entrez la taille de la map en x");
            map_y = prompt("Entrez la taille de la map en y");
        }

        while(map_x*map_y < num_mine){
            num_mine = prompt("Entrez le nombre de mines");
        }
*/
        //generation de la map
        const { map } = new Map(map_x, map_y, num_mine)
        this.map = map

        console.log('field #1')
        for (let i = 0; i < this.map.length; i++) {
            let line = ''
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j].type == true) {
                    line += '*'
                } else {
                    line += '.'
                }
            }
            console.log(line)
        }
        console.log('field #2')
        for (let i = 0; i < this.map.length; i++) {
            let line = ''
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j].type == true) {
                    line += '*'
                } else {
                    line += this.map[i][j].value
                }
            }
            console.log(line)
        }
    }
}

new Game(5, 5, 6)

module.exports = {
    Game,
    Map,
    Cell,
}
