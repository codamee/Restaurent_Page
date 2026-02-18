import "./contact.css"
import cheff from "../home/u_ecry09x5kb-drawing-10083831.png"
function contact() {
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ""
    let divElem = document.createElement("div")
    divElem.classList.add("contactContainer")
    divElem.innerHTML = /*html*/`
      <div class="form">
      <img src="${cheff}" alt="cheff" />
            <form >
           <span>Contact Us</span>
                <p>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="John"/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Doe"/>
                </p>
                <p>
                    <label for="query">Query</label>
                    <textarea name="query" id="query" placeholder="Enter your query" rows="8"></textarea>
                </p>
                <div>
                    <button type="button">Submit Query</button>
                </div>
            </form>
      </div>
    
    `
    contentDiv.append(divElem)
}
export { contact }