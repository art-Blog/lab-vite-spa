import {createRouter, createWebHistory} from "vue-router";
export const routes = [
    {name: 'home', path: '/', component: () => import( "@/pages/Home.vue")},
    {name: 'monster', path: '/monster', component: () => import("@/pages/Monster.vue")},
    {
        name: 'teams',
        path: '/teams',
        component: () => import("@/pages/Teams.vue"),
        children: [
            {
                name: 'team-members',
                path: ':teamId',
                component: () => import('@/pages/teams/TeamMembers.vue'),
                props: true,
            },
        ],
    },
    {name: 'about', path: '/about', component: () => import('@/pages/About.vue')},
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes,
});

export default router