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
const { Game, Map, Cell } = require('../src/demineur.js')

describe('Demineur', function () {
    it('verification taille map', function () {
        const map_x = 5
        const map_y = 4
        const num_mine = 2
        const map = new Map(map_x, map_y, num_mine)
        expect(map.map.length).toBe(map_x)
        expect(map.map[0].length).toBe(map_y)
    })

    // TODO : verification nombres de mines impairs

    it('verification taille max de mine', function () {
        const map_x = 5
        const map_y = 5
        const num_mine = 24
        const map = new Map(map_x, map_y, num_mine)
        let tailles = map.map_x * map.map_y
        expect(map.num_mine).toBeLessThan(tailles)
    })

    it('test d une cellule devant etre une bombe', function () {
        const map_x = 50
        const map_y = 50
        const num_mine = 20
        const game = new Game(map_x, map_y, num_mine)
        for (let i = 0; i < game.map.length; i++) {
            for (let j = 0; j < game.map[i].length; j++) {
                if (game.map[i][j].type === false) {
                    // not mine (type=false)
                    let count_num_mine = 0
                    if (i < map_x - 1) {
                        if (game.map[i + 1][j].type === true) count_num_mine++
                    }
                    if (i > 0) {
                        if (game.map[i - 1][j].type === true) count_num_mine++
                    }
                    if (j < map_y - 1) {
                        if (game.map[i][j + 1].type === true) count_num_mine++
                    }
                    if (j > 0) {
                        if (game.map[i][j - 1].type === true) count_num_mine++
                    }
                    if (i < map_x - 1 && j < map_y - 1) {
                        if (game.map[i + 1][j + 1].type === true)
                            count_num_mine++
                    }
                    if (i > 0 && j > 0) {
                        if (game.map[i - 1][j - 1].type === true)
                            count_num_mine++
                    }
                    if (i < map_x - 1 && j > 0) {
                        if (game.map[i + 1][j - 1].type === true)
                            count_num_mine++
                    }
                    if (i > 0 && j < map_y - 1) {
                        if (game.map[i - 1][j + 1].type === true)
                            count_num_mine++
                    }

                    expect(count_num_mine).toBe(game.map[i][j].value)
                }
            }
        }
    })

   
    it('l ordonnee ne peut etre superieur à 100', function () {
        const map_x = 16
        const map_y = 101
        const num_mine = 15
        const game = new Game(map_x, map_y, num_mine)
        const lengthAttendu = (game.map.map_y = 100)
        expect(lengthAttendu).toBe(100)
    })
   
})
