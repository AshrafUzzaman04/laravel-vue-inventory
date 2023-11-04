import login from "./components/admin/auth/login.vue";
import register from "./components/admin/auth/register.vue";
import forget from "./components/admin/auth/forget.vue";

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    {
        path: "/forget-password",
        component: forget,
        name: "forget-password",
    },
];
