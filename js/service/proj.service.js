'use strict'

var gProjs = [
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "Building mine sweeper game",
        desc: makeLorem(),
        url: "portfolio/minesweeper",
        publishedAt: 1669489200000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "touch nums",
        name: "Touch Nums",
        title: "Building touch Nums game",
        desc: makeLorem(),
        url: "portfolio/touch-nums",
        publishedAt: 1668711600000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "guess me",
        name: "Guess me",
        title: "Building Guess me",
        desc: makeLorem(),
        url: "portfolio/guess-me",
        publishedAt: 1670180400000,
        labels: [""],
    },

    {
        id: "mister balls",
        name: "Mister balls",
        title: "Building Todos app",
        desc: makeLorem(),
        url: "portfolio/mister-balls",
        publishedAt: 1669834800000,
        labels: ["App"],
    },
    // {
    //     id: "books Shop",
    //     name: "Books Shop",
    //     title: "Building Books Shop app",
    //     desc: makeLorem(),
    //     url: "portfolio/book-Shop",
    //     publishedAt: 1669921200000,
    //     labels: ["Matrixes", "keyboard events"],
    // },
    {
        id: "pacman",
        name: "Pacman",
        title: "Building Pacman game",
        desc: makeLorem(),
        url: "portfolio/pacman",
        publishedAt: 1669057200000,
        labels: ["Matrixes", "keyboard events"],
    },


]



function getProjects() {
    return gProjs
}

function getProjById(projId) {
    const proj = gProjs.find(proj => projId === proj.id)
    return proj
}


function makeLorem(wordCount = 50) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}


