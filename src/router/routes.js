import Vue from 'vue'

import AdminDashboard from '../pages/AdminDashboard'
import Profile from '../pages/Profile'
import Main from "../layout/Main";

Vue.config.productionTip = false;

const routes = [
        {
            path: "/",
            component: Main,
            redirect: "/dashboard",
            children: [
                {
                    path: '/dashboard',
                    name: 'Admin dashboard',
                    component: AdminDashboard
                },
                {
                    path: '/profile',
                    name: 'Profile',
                    component: Profile
                },
            ]
        },
        {
            path: "*", redirect:
                "/dashboard",
        }
    ]
;

export default routes;
