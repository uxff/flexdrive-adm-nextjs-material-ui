import About from '../pages/about';
import Index from '../pages/index';
import Intro from '../pages/intro';

const routes = [
    {
        path: '/about',
        component: About,
    },
    {
        path: '/',
        component: Index,
    },
    {
        path: '/intro',
        component: Intro,
    },
];

export default routes;