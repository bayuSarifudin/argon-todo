import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Tables from '../views/Tables.vue'
import Profile from '../views/Profile.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import CreateTodo from '../views/CreateTodo.vue'
import Detail from '@/views/Detail.vue'
import { d$auth } from '@/store/auth'
const routes = [
	{
		path: '/',
		name: '/',
		redirect: '/dashboard-default'
	},
	{
		path: '/dashboard-default',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/tables',
		name: 'Tables',
		component: Tables,
		meta: { auth: true }
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
		meta: { auth: true }
	},
	{
		path: '/signin',
		name: 'Signin',
		component: Signin
	},
	{
		path: '/signup',
		name: 'Signup',
		component: Signup
	},
	{
		path: '/create',
		name: 'CreateTodo',
		component: CreateTodo
	},
	{
		path: '/tables/:id',
		name: 'Detail',
		component: Detail
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.url),
	routes,
	linkActiveClass: 'active'
})

// navigation guards
router.beforeEach((to, from, next) => {
	// get auth state
	const loggedIn = d$auth().isLoggedIn

	// if target route requires auth & no logged in user
	// redirect to login
	if (to.meta.auth && !loggedIn) {
		next({ name: 'Signin' })
	} else {
		// else then proceeds
		next()
	}
})

export default router
