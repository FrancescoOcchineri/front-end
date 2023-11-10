function tabCrea () {
    let tabella = document.querySelector('#tabella')
    for (let i = 1; i <= 76; i++) {
    let cellatab = document.createElement("div");
        cellatab.innerText = i
        cellatab.className = 'celleTab'
        tabella.appendChild(cellatab)
    }
}
tabCrea()

function estrainumero() {
    let button = document.querySelector("button")
    button.addEventListener("click", () =>{
        let num = document.querySelectorAll("#tabella div")
        let numRand = Math.ceil(Math.random() * 76)
        num.forEach(cella  => {
          num[numRand-1].style.backgroundColor = "blueviolet";
        })
})
}
estrainumero()  






