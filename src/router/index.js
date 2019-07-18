import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    alwaysShow: true,
    meta: {
      title: '我的桌面',
      icon: 'dashboard'
    },
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '我的桌面' }
    }]
  },
  {
    path: '/UserManage',
    component: Layout,
    redirect: '/UserManage',
    alwaysShow: true,
    meta: {
      title: '用户管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'UserManage',
      name: 'UserManage',
      component: () => import('@/views/UserManage/index'),
      meta: { title: '授权用户管理' }
    }]
  },
  {
    path: '/DataStatistics',
    component: Layout,
    redirect: '/DataStatistics/ArticleStatistics',
    alwaysShow: true,
    meta: {
      title: '数据统计',
      icon: 'dashboard'
    },
    children: [{
      path: 'ArticleStatistics',
      name: 'ArticleStatistics',
      component: () => import('@/views/DataStatistics/ArticleStatistics'),
      meta: { title: '文章数据统计' }
    }, {
      path: 'VideoStatistics',
      name: 'VideoStatistics',
      component: () => import('@/views/DataStatistics/VideoStatistics'),
      meta: { title: '视频数据统计' }
    }, {
      path: 'ColumnsStatistics',
      name: 'ColumnsStatistics',
      component: () => import('@/views/DataStatistics/ColumnsStatistics'),
      meta: { title: '栏目数据统计' }
    }, {
      path: 'SearchStatistics',
      name: 'SearchStatistics',
      component: () => import('@/views/DataStatistics/SearchStatistics'),
      meta: { title: '搜索数据统计' }
    }, {
      path: 'DislikeStatistics',
      name: 'DislikeStatistics',
      component: () => import('@/views/DataStatistics/DislikeStatistics'),
      meta: { title: '不感兴趣数据统计' }
    }, {
      path: 'BannerStatistics',
      name: 'BannerStatistics',
      component: () => import('@/views/DataStatistics/BannerStatistics'),
      meta: { title: '轮播图数据统计' }
    }]
  },
  {
    path: '/AdvertiseManagement',
    component: Layout,
    redirect: '/AdvertiseManagement/AdvertisePosition',
    alwaysShow: true,
    meta: {
      title: '广告管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'AdvertisePosition',
      name: 'AdvertisePosition',
      component: () => import('@/views/AdvertiseManagement/AdvertisePosition'),
      meta: { title: '广告位置' }
    }, {
      path: 'PictureAdvertise',
      name: 'PictureAdvertise',
      component: () => import('@/views/AdvertiseManagement/PictureAdvertise'),
      meta: { title: '图片广告' }
    }, {
      path: 'VideoAdvertise',
      name: 'VideoAdvertise',
      component: () => import('@/views/AdvertiseManagement/VideoAdvertise'),
      meta: { title: '视频广告' }
    }, {
      path: 'AdvertiseStatistics',
      name: 'AdvertiseStatistics',
      component: () => import('@/views/AdvertiseManagement/AdvertiseStatistics'),
      meta: { title: '广告数据统计' }
    }]
  },
  {
    path: '/BannerManagement',
    component: Layout,
    redirect: '/BannerManagement/BannerShow',
    alwaysShow: true,
    meta: {
      title: '轮播图管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'BannerShow',
      name: 'BannerShow',
      component: () => import('@/views/BannerManagement/BannerShow'),
      meta: { title: '轮播图展示' }
    }, {
      path: 'BannerSort',
      name: 'BannerSort',
      component: () => import('@/views/BannerManagement/BannerSort'),
      meta: { title: '轮播图分类' }
    }]
  },
  {
    path: '/CommodityManagement',
    component: Layout,
    redirect: '/CommodityManagement/CommodityShow',
    alwaysShow: true,
    meta: {
      title: '商品管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'CommodityShow',
      name: 'CommodityShow',
      component: () => import('@/views/CommodityManagement/CommodityShow'),
      meta: { title: '商品展示' }
    }, {
      path: 'CommoditySort',
      name: 'CommoditySort',
      component: () => import('@/views/CommodityManagement/CommoditySort'),
      meta: { title: '商品类别' }
    }]
  },
  {
    path: '/VideoManagement',
    component: Layout,
    redirect: '/VideoManagement/VideoShow',
    alwaysShow: true,
    meta: {
      title: '视频管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'VideoShow',
      name: 'VideoShow',
      component: () => import('@/views/VideoManagement/VideoShow'),
      meta: { title: '视频展示' }
    }, {
      path: 'VideoSort',
      name: 'VideoSort',
      component: () => import('@/views/VideoManagement/VideoSort'),
      meta: { title: '视频分类' }
    }]
  },
  {
    path: '/ArticleManagement',
    component: Layout,
    redirect: '/ArticleManagement/ArticleSort',
    alwaysShow: true,
    meta: {
      title: '文章管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'ArticleSort',
      name: 'ArticleSort',
      component: () => import('@/views/ArticleManagement/ArticleSort'),
      meta: { title: '文章分类' }
    }, {
      path: 'ArticleList',
      name: 'ArticleList',
      component: () => import('@/views/ArticleManagement/ArticleList'),
      meta: { title: '文章列表' }
    }]
  },
  {
    path: '/ColumnsManegement',
    component: Layout,
    redirect: '/ColumnsManegement/ColumnsList',
    alwaysShow: true,
    meta: {
      title: '栏目管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'ColumnsList',
      name: 'ColumnsList',
      component: () => import('@/views/ColumnsManegement/ColumnsList'),
      meta: { title: '栏目列表' }
    }]
  },
  {
    path: '/AdminManagement',
    component: Layout,
    redirect: '/AdminManagement/RoleManagement',
    alwaysShow: true,
    meta: {
      title: '管理员管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'RoleManagement',
      name: 'RoleManagement',
      component: () => import('@/views/AdminManagement/RoleManagement'),
      meta: { title: '角色管理' }
    }, {
      path: 'MenuManagement',
      name: 'MenuManagement',
      component: () => import('@/views/AdminManagement/MenuManagement'),
      meta: { title: '菜单管理' }
    }, {
      path: 'AdminList',
      name: 'AdminList',
      component: () => import('@/views/AdminManagement/AdminList'),
      meta: { title: '管理员列表' }
    }]
  },
  {
    path: '/SystemManagement',
    component: Layout,
    redirect: '/SystemManagement/SystemLog',
    alwaysShow: true,
    meta: {
      title: '系统管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'SystemLog',
      name: 'SystemLog',
      component: () => import('@/views/SystemManagement/SystemLog'),
      meta: { title: '系统日志' }
    }]
  },
  {
    path: '/AuthorManagement',
    component: Layout,
    redirect: '/AuthorManagement/AuthorList',
    alwaysShow: true,
    meta: {
      title: '作者管理',
      icon: 'dashboard'
    },
    children: [{
      path: 'AuthorList',
      name: 'AuthorList',
      component: () => import('@/views/AuthorManagement/AuthorList'),
      meta: { title: '作者列表' }
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
