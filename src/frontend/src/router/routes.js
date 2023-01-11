export default [
  {
    path: '/',
    name: 'IndexHome',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/profile/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
];
