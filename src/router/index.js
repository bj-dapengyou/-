import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import mainpage from '../views/mainpage'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('../views/Home'),
      children: [
        {
          path: '/', name:"mainpage", component: () => import('../views/mainpage'),
        },

        {
          path: '/mainpage', component: () => import('../views/mainpage'),
          children:[
            
            {
              path: '/mainpage/homepage', name:"homepage", component: () => import('../views/homepage'),
            },
            {
              path: '/mainpage/myspace', name:"myspace", component: () => import('../views/myspace'),
            },
            {
              path: '/mainpage/Commons', name:"Commons", component: () => import('../views/Commons'),
            },
            {
              path: '/mainpage/Collection', name:"Collection", component: () => import('../views/Collection'),
            },
            {
              path: '/mainpage/recycle', name:"recycle", component: () => import('../views/recycle'),
            },
          ]
        },
        {
          path: '/about',name:'about', component: () => import('../views/About'),
        },
        {
          path: '/maillist',name:'maillist', component: () => import('../views/maillist'),
        },
      ]
  },
  // {
  //   path:"/",
  //   name:"about",
  //   component:() => import('../views/about'),
  // }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

});

export default router;
