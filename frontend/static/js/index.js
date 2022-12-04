import Home from "../views/Home.js";
import About from "../views/About.js";
import Contact from "../views/Contact.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/404', view: () => console.log('viewing 404')},
        { path: '/', view: Home},
        { path: '/home', view: Home},
        { path: '/about', view: About},
        { path: '/thoughts', view: () => console.log('viewing thoughts')},
        { path: '/projects', view: () => console.log('viewing projects')},
        { path: '/lessons', view: () => console.log('viewing lessons')},
        { path: '/calendar', view: () => console.log('viewing calendar')},
        { path: '/git', view: () => console.log('viewing git')},
        { path: '/contact', view: Contact},
        { path: '/login', view: () => console.log('viewing login')},
    ];

    // test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: false
        };
    }

    console.log(match.route);
    const view = new match.route.view();

    document.querySelector('#content').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    
    router();
});