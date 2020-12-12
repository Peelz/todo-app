import Login from "../containers/Login";
import Todo from "../containers/Todo";

const routes = [
  {
    path: "/",
    component: Todo,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/todo",
    component: Todo,
  },
];

export default routes;
