import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import OfficerSetup from '../views/OfficerSetup.vue'
import ReportingSetup from '../views/ReportingSetup'
import Reports from '../views/Reports'
import Notification from '../views/Notification'
import History from '../views/History'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setup/officer_details',
    name: 'OfficerSetup',
    component: OfficerSetup
  },
  {
    path: '/setup/reporting_unit',
    name: 'reporting_unit',
    component: ReportingSetup
  },
  {
    path: '/reports',
    name: 'reports',
    component: Reports
  },
  {
    path: '/notification',
    name: 'notification',
    component: Notification
  },
  {
    path: '/history',
    name: 'history',
    component: History
  }
]

const router = new VueRouter({
  routes
})

export default router
