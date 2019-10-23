import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

export default [{
  ...HomePage,
  path: '/',
  exact: true,
},
{
  ...UsersListPage,
  path: '/users',
},
];

// es6 loadData:loadData

// export default () => {
//     return (
//         <div>
// 			<Route exact path="/" component={Home} />
// 			<Route path="/users" component={UsersList} />
// 		</div>
//     )
// };

//	for react-router-config we need to use objects for ssr!!
