
function animations(){

    document.getElementById("slide-container").classList.add("slide-animate")
    document.getElementById("glock-container").classList.add("recoil-animate")
    document.getElementById("flash").classList.add("flash-animate")
    setTimeout(() => {
        document.getElementById("casing").classList.add("casing-animate")
    })

    setTimeout(() => {
        document.getElementById("slide-container").classList.remove("slide-animate")
        document.getElementById("glock-container").classList.remove("recoil-animate")
        document.getElementById("flash").classList.remove("flash-animate")
        document.getElementById("casing").classList.remove("casing-animate")
    }, 1100)

}

document.getElementById("fire-btn").addEventListener("click", () => {
    if(!document.getElementById("glock-container").classList.contains("recoil-animate")){
        animations()
    }
})