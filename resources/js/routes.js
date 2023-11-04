import login from "./components/admin/login.vue";
import register from "./components/admin/register.vue";

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register },
];
