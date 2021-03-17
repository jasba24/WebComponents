class myElements extends HTMLElement {
	constructor() {
		super()
	}
	getTemplate() {
		const template = document.createElement("template")
		template.innerHTML = `
			<section>
				<h2>Hola mundo!</h2>
				<div>
					<p>Soy más texto ejemplo</p>
				</div>
			</section>
		`
		return template
	}
	render() {
		this.appendChild(this.getTemplate().content.cloneNode(true))
	}
	connectedCallback() {
		this.render()
	}
}

customElements.define("my-element", myElements)