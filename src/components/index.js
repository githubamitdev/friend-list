import friends from "./friends";
import NotFound from '../utils/errors/NotFound';

const routes = [
    friends,
  {
    path: "/404",
    component: NotFound
  }
];

export default routes;

