

const puzzles = {
        centerThree:{
            grid:[[2,0],[2,2],[2,4]],
            difficulty:'easy',
            name:'Center Three'
        },
        fourCorners:{
            grid:[[0,0],[0,4],[4,0],[4,4]],
            difficulty:'easy',
            name:'Four Corners'

        },
        arrows:{
            grid:[[0,1],[1,0],[1,1],[2,2],[3,3],[3,4],[4,3]],
            difficulty:'easy',
            name:'Arrows'
        },
        lastThree:{
            grid:[[4,2],[4,3],[4,4]],
            difficulty:'challenging',
            name:'Last Three'
        },
        bottomFeeder:{
            grid:[[4,1],[4,3]],
            difficulty:'difficult',
            name:'Bottom Feeders'
        },
        centerCross:{
            grid:[[2,0],[2,1],[2,2],[2,3],[2,4],[0,2],[1,2],[3,2],[4,2]],
            difficulty:'difficult',
            name:'Center Cross'
            
        }
}

export default puzzles;