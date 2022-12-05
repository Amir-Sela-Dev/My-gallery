'use strict'

var gProjs = [
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "Building mine sweeper game",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1669489200,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "touch Nums",
        name: "Touch Nums",
        title: "Building touch Nums game",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1668711600,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: " pacman",
        name: "Pacman",
        title: "Building Pacman game",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1669057200,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: " todos",
        name: " Todos",
        title: "Building Todos app",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1669834800,
        labels: ["App"],
    },
    {
        id: "books Shop",
        name: "Books Shop",
        title: "Building Books Shop app",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1669921200,
        labels: ["Matrixes", "keyboard events"],
    },

]



function getProj() {
    return gProjs
}

function getProjById(projId) {
    const proj = gProjs.find(proj => projId === proj.id)
    return proj
}

