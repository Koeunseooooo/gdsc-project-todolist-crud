const quotes = [
    {
        quote: "quotes1",
        author: "author1",
    },
    {
        quote: "quotes2",
        author: "author2",
    },
    {
        quote: "quotes3",
        author: "author3",
    },
    {
        quote: "quotes4",
        author: "author4",
    },
    {
        quote: "quotes5",
        author: "author5",
    },
    {
        quote: "quotes6",
        author: "author6",
    },
    {
        quote: "quotes7",
        author: "author7",
    },
    {
        quote: "quotes8",
        author: "author8",
    },
    {
        quote: "quotes9",
        author: "author9",
    },
    {
        quote: "quotes10",
        author: "author10",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
