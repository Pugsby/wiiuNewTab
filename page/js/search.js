const searchBar = document.getElementById("search").children[0]
var searchEngine = {
    "name": "Google",
    "url": "https://www.google.com/search?q="
}
searchBar.addEventListener('keydown', (event) => {
    if (event.key === "Enter") 
        {
            console.log(searchBar.value)
            document.location.href = searchEngine.url + searchBar.value
        }
})