var bookmarkCount = 8
const bookmarkBar = document.getElementById("bookmarks")
for (let i = 0; i < bookmarkCount; i++) {
    var current = document.createElement("button")
    bookmarkBar.appendChild(current)
    current.className = "bookmark"
}
bookmarks = []
chrome.bookmarks.getTree().then((allBookmarks) => {
    bookmarks = allBookmarks[0].children[0].children
    console.log(bookmarks)
    for (let i = 0; i < bookmarkCount && i < bookmarks.length; i++) {
        var current = bookmarkBar.children[i]
        current.title = bookmarks[i].title
        current.style.backgroundImage = `url("https://www.google.com/s2/favicons?domain=${bookmarks[i].url}&sz=64")`
        current.onclick = function() {(document.location.href = bookmarks[i].url)}
    }
})