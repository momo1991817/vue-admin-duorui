import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (to.path === '/login') {
    // if is logged in, redirect to the home page
    next()
    NProgress.done()
  } else {
    // determine whether the user has obtained his permission roles through getInfo
    next()
    // generate accessible routes map based on roles
    const accessRoutes = await store.dispatch('permission/generateRoutes', 'admin')

    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // hack method to ensure that addRoutes is complete
    // set the replace: true, so the navigation will not leave a history record
    next({ ...to, replace: true })
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
