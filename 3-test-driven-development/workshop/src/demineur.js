
//class de casse si la case est une bombe alors le type sera égal a true 
class Cell {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.value = 0;
    }

    ChangeValue() {
        this.value += 1;


    }
}





// classe de la map qui enregistre chaque case dans une matrisse
class Map {
    map_x = 0
    map_y = 0
    map = []
    num_mine = 0

    constructor(map_x, map_y,num_mine) {
        this.map_x = map_x;
        this.map_y = map_y;
        this.num_mine = num_mine;
        
        this.GenerateMap(this.map_x, this.map_y, this.num_mine);
       
        this.GenerateMine(this.map,num_mine);
        this.GenerateCell(this.map);
    }

    GenerateMap(map_x, map_y) {
        const map = [];
        if(map_x > 100){
            map_x = 100;
        }
        for (let i = 0; i < map_x; i++) {
            map[i] = [];
            for (let j = 0; j < map_y; j++) {
                map[i][j] = new Cell(i, j, false);

            }
        }
        this.map = map;
    }


    GenerateMineOnACell(Map,num_mine) {
        //generation des mines
        for(let i=0; i<num_mine; i++){
            this.Mineverification(Map);
        }
        
    }

    Mineverification(Map){
        let x = Math.floor(Math.random() * Map.map_x);
        let y = Math.floor(Math.random() * Map.map_y);
        if(Map[x][y].type == false){
            Map[x][y].type = true;
            }
        else{ this.Mineverification(Map);}
        }

        
        
    

    GenerateCell(Map) {
        //generation des cellules
        //generation des nombres autour des mines
        for (let i = 0; i < Map.length; i++) {
            for (let j = 0; j < Map[i].length; j++) {
                if (Map[i][j].type == false) {
                   
                    // attribution a la cell d une value condittionnée par les cellules bombes adjacentes
                    if(Map[i+1][j].type==true){ Map[i][j].ChangeValue();}
                    if(Map[i-1][j].type==true){ Map[i][j].ChangeValue();}
                    if(Map[i][j+1].type==true){ Map[i][j].ChangeValue();}
                    if(Map[i][j-1].type==true){ Map[i][j].ChangeValue();}
                    if(Map[i+1][j+1].type==true){ Map[i][j].ChangeValue();}
                    if(Map[i-1][j-1].type==true){ Map[i][j].ChangeValue();}
                    if(Map[i+1][j-1].type==true){ Map[i][j].ChangeValue();}
                    if(Map[i-1][j+1].type==true){ Map[i][j].ChangeValue();}
                    
                } 

            }}
    }
}

class Game {
    
    constructor(map_x, map_y, num_mine) {
        this.GenerateMap(map_x, map_y,num_mine);
    }

    GenerateMap(map_x, map_y,num_mine) {
        //demande des parametres (plus tard)
       
        const prompt = require("prompt-sync")();
        while(map_x > 100 || map_y > 100){
            map_x = prompt("Entrez la taille de la map en x");
            map_y = prompt("Entrez la taille de la map en y");
        }

        while(map_x*map_y < num_mine){
            num_mine = prompt("Entrez le nombre de mines");
        }

        //generation de la map
        this.map = new Map(map_x, map_y,num_mine);

        console.log("field #1");
        for (let i = 0; i < Map.length; i++) {
            for (let j = 0; j < Map[i].length; j++) {
                if(Map[i][j].type==true){console.log("*");}
                else{console.log(".");}
            
            }console.log("/n")
        }
    }
}

module.exports = {
    Game,
    Map,
    Cell
}


