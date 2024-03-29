import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "@/views/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: LandingPage,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
