import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

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
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
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
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '我的桌面', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/UserManage',
    component: Layout,
    redirect: '/UserManage',
    alwaysShow: true,
    meta: {
      title: '用户管理',
      icon: 'user'
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
      icon: 'data'
    },
    children: [{
      path: 'ArticleStatistics',
      name: 'ArticleStatistics',
      component: () => import('@/views/DataStatistics/ArticleStatistics'),
      meta: { title: '文章数据统计' }
    },
    //   {
    //   path: 'VideoStatistics',
    //   name: 'VideoStatistics',
    //   component: () => import('@/views/DataStatistics/VideoStatistics'),
    //   meta: { title: '视频数据统计' }
    // },
     {
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
      component: () => import('@/views/DataStatistics/NoInterestStatistics'),
      meta: { title: '不感兴趣数据统计' }
    }, {
      path: 'BannerStatistics',
      name: 'BannerStatistics',
      component: () => import('@/views/DataStatistics/BannerStatistics'),
      meta: { title: '轮播图数据统计' }
    }, {
      path: 'UserKeepStatistics',
      name: 'UserKeepStatistics',
      component: () => import('@/views/DataStatistics/UserKeepStatistics'),
      meta: { title: '用户留存统计' }
    }, {
      path: 'NewUserStatistics',
      name: 'NewUserStatistics',
      component: () => import('@/views/DataStatistics/NewUserStatistics'),
      meta: { title: '用户新增统计' }
    }, {
      path: 'SlideStatistics',
      name: 'SlideStatistics',
      component: () => import('@/views/DataStatistics/SlideStatistics'),
      meta: { title: '推荐页滑动统计' }
    }, {
      path: 'ContentShowStatistics',
      name: 'ContentShowStatistics',
      component: () => import('@/views/DataStatistics/ContentShowStatistics'),
      meta: { title: '文章视频展示统计' }
    }, {
      path: 'ContentClickStatistics',
      name: 'ContentClickStatistics',
      component: () => import('@/views/DataStatistics/ContentClickStatistics'),
      meta: { title: '详情推荐点击统计' }
    }, {
      path: 'UserCentreStatistics',
      name: 'UserCentreStatistics',
      component: () => import('@/views/DataStatistics/UserCentreStatistics'),
      meta: { title: '个人中心统计' }
    }, {
      path: 'AuthorStatistics',
      name: 'AuthorStatistics',
      component: () => import('@/views/DataStatistics/AuthorStatistics'),
      meta: { title: '作者数据统计' }
    }

    ]
  },
  {
    path: '/AdvertiseManagement',
    component: Layout,
    redirect: '/AdvertiseManagement/AdvertisePosition',
    alwaysShow: true,
    meta: {
      title: '广告管理',
      icon: 'ad'
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
      icon: 'banner'
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
      icon: 'goods'
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
      icon: 'video'
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
      icon: 'article'
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
      icon: 'column'
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
      icon: 'admin'
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
      icon: 'system'
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
      icon: 'author'
    },
    children: [{
      path: 'AuthorList',
      name: 'AuthorList',
      component: () => import('@/views/AuthorManagement/AuthorList'),
      meta: { title: '作者列表' }
    }]
  },
  {
    path: '/AddArticle',
    component: Layout,
    redirect: '/AddArticle/AddArticle',
    hidden: true,
    children: [{
      path: 'AddArticle',
      name: 'AddArticle',
      component: () => import('@/views/AddArticle/AddArticle'),
      meta: { title: '新增文章' }
    }]
  },
  {
    path: '/AddVideo',
    component: Layout,
    redirect: '/AddVideo/AddVideo',
    hidden: true,
    children: [{
      path: 'AddVideo',
      name: 'AddVideo',
      component: () => import('@/views/AddVideo/AddVideo'),
      meta: { title: '新增视频' }
    }]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人信息', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/AddArticle',
  //   component: Layout,
  //   redirect: '/AddArticle/AddArticle',
  //   hidden: true,
  //   children: [{
  //     path: 'AddArticle',
  //     name: 'AddArticle',
  //     component: () => import('@/views/AddArticle/AddArticle'),
  //     meta: { title: '新增文章' }
  //   }]
  // },
  // {
  //   path: '/AddVideo',
  //   component: Layout,
  //   redirect: '/AddVideo/AddVideo',
  //   hidden: true,
  //   children: [{
  //     path: 'AddVideo',
  //     name: 'AddVideo',
  //     component: () => import('@/views/AddVideo/AddVideo'),
  //     meta: { title: '新增视频' }
  //   }]
  // },

  /** when your routing map is too long, you can split it into small modules **/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,
  // {
  //   path: '/AddArticle',
  //   component: Layout,
  //   redirect: '/AddArticle/AddArticle',
  //   hidden: true,
  //   children: [{
  //     path: 'AddArticle',
  //     name: 'AddArticle',
  //     component: () => import('@/views/AddArticle/AddArticle'),
  //     meta: { title: '新增文章' }
  //   }]
  // },
  // {
  //   path: '/AddVideo',
  //   component: Layout,
  //   redirect: '/AddVideo/AddVideo',
  //   hidden: true,
  //   children: [{
  //     path: 'AddVideo',
  //     name: 'AddVideo',
  //     component: () => import('@/views/AddVideo/AddVideo'),
  //     meta: { title: '新增视频' }
  //   }]
  // },

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
