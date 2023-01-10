export default [
  {
    path: '/1',
    name: 'IndexHome',
    component: () => import('../views/Index.vue'),
    meta: { layout: 'AppLayoutMain' }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    meta: { layout: 'AppLayoutDefault' }
  },
  {
    path: '/profile/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue'),
    meta: { layout: 'AppLayoutDefault' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { layout: 'AppLayoutDefault' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { layout: 'AppLayoutDefault' }
  }
];
