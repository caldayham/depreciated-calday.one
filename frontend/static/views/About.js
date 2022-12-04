import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('about | calday.one');
    }

    async getHtml() {
        return `
        <h3>About Cal Day</h3>
        <br/>
        <br/>
        <p>epic</p>
        `;
    }
}