import { createRouter, createWebHistory } from "vue-router";
import TabMain from '@/components/tab/TabMain.vue'
const routes = [
    { path: '/:pathMatch(.*)*', component: TabMain },
    {
        path: '/',
        redirect: 'tabmain'
    },
    {
        path: '/tabmain/',
        redirect:'/tabmain/tab1'
    },
    {
        path: '/tabmain/',
        name: 'tabmain',
        component: TabMain,
        children: [
            {
                path: 'tab1',
                name: 'tab1',
                component: () => import(/*webpackChunkName:"Tab1"*/ '@/components/tab/Tab1.vue')
            },
            {
                path: 'tab2',
                name: 'tab2',
                component: () => import(/*webpackChunkName:"Tab2"*/ '@/components/tab/Tab2.vue')
            },
            {
                path: 'tab3',
                name: 'tab3',
                component: () => import(/*webpackChunkName:"Tab3"*/ '@/components/tab/Tab3.vue')
            },


        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/*webpackChunkName:"Login"*/ '@/components/login/Login.vue')
    },
    {
        path: '/detailpage/:id',
        name: 'detailpage',
        component: () => import(/*webpackChunkName:"DetailPage"*/ '@/components/view/ContentDetails.vue')
    }
]



const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    if (to.name == 'login' && localStorage.getItem('userData')) next({ name: 'tab1' })
    else next()
  })

export default router