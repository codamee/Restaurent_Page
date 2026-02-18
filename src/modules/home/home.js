import "./home.css"
import bus from "./naobim-stalls-3452163.png"

function home() {
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ""
    let divElem = document.createElement("div")
    divElem.classList.add("homeContainer")
    divElem.innerHTML = /* html */
        `
    <div class="homeinfo">
        <div className="info">
            <h1>Mini Restaurent - Hearth & Harvest & Home</h1>
            <span>A Modern Take on Home</span>
            <p>Honest ingredients. Time-honored recipes. Modern presentation. We’ve reimagined the homely kitchen for the urban palate, bringing you the freshest local flavors in a space that feels like your own dining room."</p>
            <button>Order Now 😋</button>
        </div>
        <img src=${bus} alt="Not loading" />
    </div>
    `
    contentDiv.append(divElem)
    // return divElem
}
export { home }