import { createRouter, createWebHistory } from "vue-router";
import Diet from "@/views/Diet.vue";
import Form from "@/views/Form.vue";

const routes = [
    {
        name: 'Form',
        path: "/",
        component: Form,
    },
    {
        name: 'Diet',
        path: "/diet",
        component: Diet,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router