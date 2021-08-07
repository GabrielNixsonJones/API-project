const books = [
  {
    ISBN: "12345Book",
    title: "tesla!!!",
    pubDate: "2021-08-05",
    language: "en",
    numPage: 250,
    author:[1,2],
    publication: [1],
    catogory: ["tech","space","education"]
  },
  {
    ISBN: "11111Book",
    title: "anime!!!",
    pubDate: "2021-07-05",
    language: "jap",
    numPage: 200,
    author:[1],
    publication: [2],
    category: ["comedy","fixion"]
  }
]

const author = [
{
  id: 1,
  name: "Aradhana",
  books: ["12345Book","11111Book"]
},
{
  id: 2,
  name: "Elon",
  books: ["12345Book"]
}
]

const publication = [
  {
    id: 1,
    name: "writex",
    books: ["12345Book"]
  },
  {
    id: 2,
    name: "crunchyroll",
    books: ["11111Book"]
  }
]

module.exports = {books , author , publication};
