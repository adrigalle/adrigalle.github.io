// Create a class for the element
class Project extends HTMLElement {
    constructor() {
        super();
    } // this is boiler plate that is required to create this bish
    // extending the amount of tags browser will recognize <>

    connectedCallback() { 
        // this makes it run anytime an element is added to the DOM
        // these const get the attributes through json?
        // this typep of thing helps works all over the place since its native to react 
        const name    = this.getAttribute('name');
        const image = this.getAttribute('image');
        const playURL   = this.getAttribute('playURL');
        const repoURL = this.getAttribute('repoURL');
        const description = this.getAttribute('description');

        // this sets the inner HTML to create template literal using backticks, using the syntax
        this.innerHTML = `
            <div class="cards">
                <img src="${image}" alt="...">
                <h3 class="projects">${name}</h3>
                <p class="projects">${description}</p>
                <div class="links">
                    <a href="${playURL}" class="btn btn-primary">Play</a>
                    <a href="${repoURL}" class="btn btn-primary">Repo</a>
                </div>
            </div>
        `;  
    }
}

// Define the new element, custom element, class
customElements.define('all-project', Project);
//