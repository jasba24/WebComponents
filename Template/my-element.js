const template = document.createElement("div")
template.innerHTML = `
	<style>
		.texto {
			color: red;
		}
		p {
			color: blue;
		}
	</style>
	<p class="texto">Hola Mundo 2!!</p>
	<p>Texto ejemplo para la clase</p>
`

class myElements extends HTMLElement {
	constructor() {
		super()

		this.p = document.createElement("p")
	}
	connectedCallback() {
		this.p.textContent = "Hola mundo!!"
		this.appendChild(this.p)
		this.appendChild(template)
	}
}

customElements.define("my-element", myElements)