import renderRoutes from '../routes'
import FriendListComponent from "./FriendListComponent";

export const defaultRoute = {
    exact: false,
    auth: true,
    path: "/",
    component: ({ routes }) => {
      return <>{renderRoutes(routes)}</>
    },
    routes: [
      {
        exact: true,
        // We can invoke a utility function to check the permission
        auth: true,
        path: "/",
        component: FriendListComponent
        // component: React.lazy(() => import('./FriendListComponent'))
      }
    ]
  };

  export default defaultRoute;
  
  