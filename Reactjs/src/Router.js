import React from 'react';
import Home from './ComponentHome/Home/Home';
import Menu from './ComponentHome/Menu/Menu';
import About from './ComponentHome/About/About';
import Contact from './ComponentHome/Contact/Contact';
import ProductDetail from './ComponentHome/Detail/ProductDetail';
import EditOrder from './Component_Admin/EditOrder';
import Left from './Component_Admin/Left';
import Right from './Component_Admin/Right';
import App from './Component_Admin/Right';
import Order from './ComponentHome/order/order';
import Profilee from './ComponentHome/Profile/Profilee';
import EditProfile from './ComponentHome/Profile/EditProfile';
import Sign_in from './Sign/Login';
import Search from './ComponentHome/Detail/Search';
import Facebook from './Sign/Facebook';
import Register from './Sign/Register';
const routes = [{
    path: '/',
    exact: true,
    main: () => <Home />
},
{
    path: '/1',
    exact: true,
    main: ({ history }) => <Menu history={history} />
},
{
    path: '/2',
    exact: true,
    main: ({ history }) => <About history={history} />
},
{
    path: '/3',
    exact: true,
    main: ({ history }) => <Contact history={history} />
},
{
    path: '/:id/4',
    exact: true,
    main: ({ match, history }) => <ProductDetail match={match} history={history} />
},
{
    path: '/admin',
    exact: true,
    main: ({ match, history }) => <Left match={match} history={history} />
},
{
    path: '/6',
    exact: true,
    main: ({ history }) => <Right history={history} />
},
{
    path: '/7',
    exact: true,
    main: ({ history }) => <Right history={history} />
},
{
    path: '/:id/8',
    exact: true,
    main: ({ match, history }) => <EditOrder match={match} history={history} />
},
{
    path: '/9',
    exact: true,
    main: ({ history }) => <EditOrder history={history} />
},
{
    path: '/:id/order',
    exact: true,
    main: ({ match, history }) => <Order match={match} history={history} />
},
{
    path: '/10',
    exact: true,
    main: ({ history }) => <Profilee history={history} />
},
{
    path: '/:id/10',
    exact: true,
    main: ({ match,  history }) => <EditProfile match={match} history={history} />
},
/// Login 
{
    path: '/11',
    exact: true,
    main: ({ match,  history }) => <Sign_in match={match} history={history} />
   
},
{
    path: '/:name/search',
    exact: true,
    main: ({ match, history }) => <Search  match={match} history={history} />
},
{
    path: '/home/facebook',
    exact: true,
    main: ({ history }) => <Facebook history={history} />
},

{
    path: '/signup',
    exact: true,
    main: ({ history }) => <Register history={history} />
}
];
export default routes;