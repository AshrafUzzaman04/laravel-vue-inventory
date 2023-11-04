import "./bootstrap";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// routes.js import
import { routes } from "./routes.js";

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp({});
app.use(router);
app.mount("#app");
