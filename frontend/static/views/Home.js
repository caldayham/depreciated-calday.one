import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('home | calday.one');
    }

    async getHtml() {
        return `
        <p>
        People who are effective and interested, affect and advance. Be antifragile.
    </p>
    <br />
    <p>
        Hello, welcome to my public web ui. I am <a href="/about">Cal Day</a>, a 21 year old male from Canada
        and the USA. I enjoy effective problem finding and solving (aka solution derivation), solution simplification, and systematization - 
        currently within the domains of manufacturing, software, business, finance, and health. I'm an optimist,
        especially towards radical self-growth. I also enjoy sharing time with family and friends, spirited debate and riffing, and the occasional trip.
    </p>
    <br />
    <p>
        My goal character traits:
        <br />
        interested, active, effective, prolific, antifragile, integrous, optimistic, autonomous, logical,
        radically volatile.
    </p>
    <br />
    <div class="image-deck">
        <img src="./visual-media/baby-chick.jpg" alt="baby-chick">
        <img src="./visual-media/cal-felix.jpg" alt="cal-felix">
        <img src="./visual-media/cal-fynn.jpg" alt="cal-fynn">
        <img src="./visual-media/cal-rattlesnake-cooper.jpg" alt="cal-rattlesnake-cooper">
        <img src="./visual-media/mum-dad-cal.jpg" alt="mum-dad-cal">
        <img src="./visual-media/dad-cal.jpg" alt="dad-cal">
        <img src="./visual-media/fam-at-beach.jpg" alt="fam-at-beach">
    </div>
</div>
        `;
    }
}