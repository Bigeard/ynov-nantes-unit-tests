//création de la partie

/*
  Constructeur ?
. Zone non explorer
* zone miner
Nombres mines : 2 en dur.
ex:
*...
....
.*..
....

1, 2, 3... Nombre de mine au alentour

ex:
*100
2210
1*10
1110

Crée un terrain de jeu (tester le tableau,bonne taille etc...)
Avec X mine à ajouter (Tester su il y a bien X mine)
Calculer le terrain de jeu (Tester le nombre de matrice)
Afficher le nombre de mines adjacentes
|0|1|x|
|1|2|2|
|1|x|1|
Trouver une mine et et ajouté plus 1 dans son rayon de une case.(tester l'ajout)
Tester à la fin si pour chaque case il y a bien le bon nombre de mine au alontour
*/

/*
Zone alontour de la mine
[ // x, y
    [(-1,-1), (0, -1), (1, -1)],
    [(-1,0), (0, 0), (1, 0)],
    [(-1,1), (0, 1), (1, 1)],
]
*/

/* 1 matrice 

    [[....*.]
     [......]
     [.*....]
     [......]
     [....*.]
    ]
 */

/*
- Function:
StartGame() (verification des parametres, verification posibilté)

- Object:
Game()
    GenerateMap(map_x: int, map_y: int, num_mine: int)
    
Map(map_x: int, map_y: int, num_mine: int)
    map_x: int
    map_y: int
    num_mine: int

    GenerateMine(Map, num_mine: int)
    GenerateCell(Map)(generation des nombres autour des mines)

Cell(x: int, y: int, type: bool)
    x: int
    y: int
    type: bool
    value : int

    ChangeValue(value: int)
*/
const {Game, Map, Cell} = require("../src/demineur.js");

describe("Demineur", function() {
    it("verification taille map", function() {
        // Given
        const map_x = 5;
        const map_y = 5;
        const num_mine = 2;
        const map = new Map(map_x,map_y,num_mine);
        // When
        map.GenerateMap(map_x, map_y, num_mine);
        // Then
        expect(map.map.length).toBe(map_x);
        expect(map.map[0].length).toBe(map_y);
    });

    /*it("verification nombre de mines abscisse pair", function() {
        
        // sachant que sur 4*4 il y a 2 mines
        // nbombre de mines = abscisse /2 :
        // nb de mines doit etre pair ;
        // Given 
        const map_x = 4;
        const map_y = 35;

        //const map = new Map(map_x, map_y);
        

        // When
        const myGame = new Game(map_x, map_y);
        console.log(myGame);
        // Then
        const nombredeMinesEnDur = 2;
        expect(myGame.map.num_mine).toBe(nombredeMinesEnDur);

        
        
   
   
    });*/

    //TODO : verification nombres de mines impairs 

    it("verification taille max de mine",function(){
        // Given
        const map_x = 5;
        const map_y = 5;
        const num_mine = 24;
        const game = new Game(map_x,map_y,num_mine);
        
        tailles = map_x*map_y;
        expect(game.map.num_mine).toBeLessThan(tailles);
    });

    it("verification bon calcul des case", function(){
        // Given
        const map_x = 50;
        const map_y = 50;
        const num_mine = 20;
        const game = new Game(map_x, map_y, num_mine);
        // When and Then
        for (let i = 0; i < game.map.length; i++) {
            for (let j = 0; j < game.map[i].length; j++) {
                if (game.map[i][j].type === false) { // not mine (type=false)
                    let count_num_mine = 0;
                    if (game.map[i+1][j].type === true) count_num_mine++;
                    if (game.map[i-1][j].type === true) count_num_mine++;
                    if (game.map[i][j+1].type === true) count_num_mine++;
                    if (game.map[i][j-1].type === true) count_num_mine++;
                    if (game.map[i+1][j+1].type === true) count_num_mine++;
                    if (game.map[i-1][j-1].type === true) count_num_mine++;
                    if (game.map[i+1][j-1].type === true) count_num_mine++;
                    if (game.map[i-1][j+1].type === true) count_num_mine++;
    
                    expect(count_num_mine).toBe(game.map[i][j].value);
                }
            }
        }
    });

    it("Tester si la cell est une bombe (si value true)", function() {
        // Given
        const map_x = 5;
        const map_y = 5;
        const num_mine = 0;
        const game = new Game(map_x, map_y, num_mine);
        game.map[0][0].type=true;
        //game.new Cell(i, j, false);

        expect(game.map[0][0].type).toBe(true);
        

        // When
        for (let i = 0; i < game.map.length; i++) {
            for (let j = 0; j < game.map[i].length; j++) {
                if (game.map[i][j].type === false) {
                    expect(game.map[i][j].value).toBe(false);
                    if (game.map[i][j].value === true) {
                        expect(game.map[i][j].type).toBe(true);
                    }
                }
            }
        }

     
    })

    it("l ordonnee ne peut etre superieur à 100" , function(){
        //Given 
        const map_x = 16 ;
        const map_y = 101;
        const num_mine = 15 ;
        //When
        const game = new Game(map_x, map_y, num_mine);
        //THen
        const lengthAttendu = game.map.map_y = 100 ;
        expect(lengthAttendu).toBe(100);

        
        
    });
    /*//test last to practice
    // given 
    // 3 bombes sur 3 lignes de 3
    it("get value of a cell" , function(){
        const map_y = 3;
        const num_mine = 3;
        const map_x = 3;
        const myGame = new Game(map_x , map_y , num_mine);
        

    });*/
    
    it("verifier présence de mines par lignes seulement une et nombres de mines posées ok" , function(){
        
        //Given matrice de 3 sur 3 et 3 bombes 
        const map_y = 3;
        const num_mine = 3;
        const map_x = 3;
        

        // When
        const myGame = new Game(map_x , map_y , num_mine);

        //then 
        presenceMineSur3Lignes = [false , false , false] ;
        maMap = myGame.map;
        for (let i = 0 ; i < map[i].length ; i ++){
            for(let j = 0 ; j < map[i][j].length ; j ++){
                    if(map[i][j] == true){
                        presenceMineSur3Lignes[i] = true ;
                    }
            }
        }
        for (let k = 0 ; k < presenceMineSur3Lignes.length ; k ++){

        }


    });
     



});
