import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:'Home'
    }
  },
  {
    path: "/Film-Reviews",
    name: "Blogs",
    component: Blog,
    meta:{
      title:'Reviews'
    }
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta:{
      title:'Login'
    }
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta:{
      title:'Register'
    }
  },
  {
    path: "/Forgot-Password ",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta:{
      title:'Forgot Password'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) =>{
  document.title = `${to.meta.title} | BFR`;
  next()
})

export default router;
