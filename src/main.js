import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ArticlesPage from './pages/ArticlesPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'about',
  },
  {
    path: '/articles/:id(\\d+)',
    component: ArticlesPage,
    name: 'articles',
    props: true,
  },
  {
    path: '/:url(.+)?',
    component: NotFoundPage,
    name: 'not-found',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
