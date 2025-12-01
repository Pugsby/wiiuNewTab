const clock = document.getElementById("time")
function updateTime() {
    var time = new Date()
    var ampm = "A"
    if (time.getHours() > 12) {
        ampm = "P"
    }
    clock.innerText = (time.getHours() % 12 || 12).toString() + ":" + time.getMinutes().toString().padStart(2, '0') + " " + ampm + "M"
    setTimeout(updateTime, 100)
}
updateTime()