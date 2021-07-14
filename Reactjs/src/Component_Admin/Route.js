import React from 'react';
import EditOrder from './EditOrder';
//import Left from './Left';
import Right from '././Right';
// import Right1 from './Right1';
import User from './User/User';
import EditUser from './User/EditUser';
import ShowProduct from './Product/ShowProduct';
import EditProduct from './Product/EditProduct';
import Add from './Product/Add';
import AddUser from './User/AddUser';

const routes = [
    {
        path: '/admin',
        exact: true,
        main: ({ history }) => <Right history={history} />
    },
    // order
    {
        path: '/admin/order',
        exact: true,
        main: ({ history }) => <Right history={history} />
    },
    {
        path: '/admin/order/add',
        exact: true,
        main: ({ history }) => <Right history={history} />
    },
    {
        path: '/admin/order/:id/edit',
        exact: true,
        main: ({ match, history }) => <EditOrder match={match} history={history} />
    },
    //end order
    // user 
    {
        path: '/admin/user',
        exact: true,
        main:({ history }) => <User history={history} />
    },
    {
        path: '/admin/user/add',
        exact: true,
        main:  ({ history }) => <AddUser history={history} />
    },
    {
        path: '/admin/user/:id/edit',
        exact: true,
        main: ({ match, history }) => <EditUser match={match} history={history} />
    },
    // end user
    // product
    {
        path: '/admin/product',
        exact: true,
        main:  ({ history }) => <ShowProduct history={history} />
    },
    {
        path: '/admin/product/add',
        exact: true,
        main:  ({ history }) => <Add history={history} />
    },
    {
        path: '/admin/product/:id/edit',
        exact: true,
        main: ({ match, history }) => <EditProduct match={match} history={history} />
    },
    //end product
    {
        path: '/admin/:id/edit',
        exact: true,
        main: ({ match, history }) => <EditOrder match={match} history={history} />
    }, {
        path: '/admin/editadmin',
        exact: true,
        main: () => <EditOrder />
    }

    // {
    //     path: '/admin/product/:id/edit',
    //     exact: true,
    //     main: ({ match, history }) => <EditProduct match={match} history={history} />
    // }

    

];

export default routes;