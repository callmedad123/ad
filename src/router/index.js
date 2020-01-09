import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)
// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}


const routes = [{
    path: '/', //登录页面
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/todo',
    component: Home,
    children: [{
      path: 'todo', //待办事项
      name: 'todo',
      component: () => import('../pages/Todo.vue')
    }, ]

  },

  /*区域管理 */
  {
    path: '/area',
    name: 'area',
    component: Home,
    meta: {
      title: '区域管理'
    },
    redirect: '/area/areamanage',
    children: [{
        path: 'areamanage', //区域管理
        name: 'areamanage',
        component: () => import('../pages/areaManage/AreaManage.vue'),
        meta: {
          title: '区域管理'
        }
      },
      {
        path: 'machinemanage', //门禁机管理
        name: 'machinemanage',
        component: () => import('../pages/areaManage/MachineManage.vue'),
        meta: {
          title: '门禁机管理'
        }
      },
    ]
  },

  /* 广告投放计划*/
  {
    path: '/adput',
    name: 'adput',
    component: Home,
    meta: {
      title: '广告投放计划'
    },
    redirect: '/adput/putplan',
    children: [{
        path: 'putmanage', //投放管理
        name: 'putmanage',
        component: () => import('../pages/adPut/PutManage.vue'),
        meta: {
          title: '新增投放计划'
        }
      },


      {
        path: 'putplan', //投放计划
        name: 'putplan',
        component: () => import('../pages/adPut/PutPlan.vue'),
        meta: {
          title: '投放计划'
        }
      },
      {
        path: 'putrecord', //投放记录
        name: 'putrecord',
        component: () => import('../pages/adPut/PutRecord.vue'),
        meta: {
          title: '投放记录'
        }
      },
    ]
  },

  /*广告主管理 */
  {
    path: '/adperson',
    name: 'adperson',
    component: Home,
    meta: {
      title: '广告主管理'
    },
    redirect: '/adperson/personintro',
    children: [{
        path: 'personintro', //基本信息
        name: 'personintro',
        component: () => import('../pages/adPerson/PersonIntro.vue'),
        meta: {
          title: '基本信息'
        }
      },

      {
        path: 'newadd', //新增
        name: 'newadd',
        component: () => import('../pages/adPerson/Newadd.vue'),
        meta: {
          title: '新增'
        }
      },
      {
        path: 'recharge', //充值记录
        name: 'recharge',
        component: () => import('../pages/adPerson/Recharge.vue'),
        meta: {
          title: '充值记录'
        }
      },
      {
        path: 'consumption', //消费记录
        name: 'consumption',
        component: () => import('../pages/adPerson/Consumption.vue'),
        meta: {
          title: '消费记录'
        }
      },
    ]
  },

  /*广告管理 */
  {
    path: '/ad',
    name: 'ad',
    component: Home,
    meta: {
      title: '广告管理'
    },
    redirect: '/ad/admanage',
    children: [{
        path: 'adcreate', //广告新增
        name: 'adcreate',
        component: () => import('../pages/adManage/AdCreate.vue'),
        meta: {
          title: '新增'
        }

      },
      {
        path: 'admanage', //广告管理
        name: 'admanage',
        component: () => import('../pages/adManage/AdManage.vue'),
        meta: {
          title: '广告管理'
        }
      },
      {
        path: 'adaudit', //广告审核
        name: 'adaudit',
        component: () => import('../pages/adManage/AdAudit.vue'),
        meta: {
          title: '广告审核'
        }
      },
      {
        path: 'adedit', //广告修改
        name: 'adedit',
        component: () => import('../pages/adManage/AdEdit.vue'),
        meta: {
          title: '修改'
        }
      },
      {
        path: 'adwatch', //查看详情
        name: 'adwatch',
        component: () => import('../pages/adManage/AdWatch.vue'),
        meta: {
          title: '查看详情'
        }
      },
      {
        path: 'operationrecords', //操作记录
        name: 'operationrecords',
        component: () => import('../pages/adManage/OperationRecords.vue'),
        meta: {
          title: '操作记录'
        }
      },
    ]
  },

  /* 业务统计 */
  {
    path: '/business',
    name: 'business',
    component: Home,
    meta: {
      title: '业务统计'
    },
    redirect: '/business/statistical',
    children: [{
        path: 'statistical', //投放统计
        name: 'intromsg',
        component: () => import('../pages/business/Statistical.vue'),
        meta: {
          title: '投放统计'
        }
      },
      {
        path: 'record', //投放记录
        name: 'Record',
        component: () => import('../pages/business/Record.vue'),
        meta: {
          title: '投放记录'
        }
      },
      {
        path: 'dayrecord', //查看详情
        name: 'dayrecord',
        component: () => import('../pages/business/DayRecord.vue'),
        meta: {
          title: '查看详情'
        }
      },
    ]
  },

  /*系统管理 */
  {
    path: '/system',
    name: 'system',
    component: Home,
    meta: {
      title: '系统管理'
    },
    redirect: '/system/usermanage',
    children: [{
        path: 'useradd', //用户新增
        name: 'useradd',
        component: () => import('../pages/system/UserAdd.vue'),
        meta: {
          title: '用户新增'
        }

      },
      {
        path: 'usermanage', //用户管理
        name: 'usermanage',
        component: () => import('../pages/system/UserManage.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'pwdchange', //密码修改
        name: 'pwdchange',
        component: () => import('../pages/system/PwdChange.vue'),
        meta: {
          title: '密码修改'
        }
      },
      {
        path: 'rolemanage', //角色管理
        name: 'rolemanage',
        component: () => import('../pages/system/RoleManage.vue'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'roleadd', //角色新增
        name: 'roleadd',
        component: () => import('../pages/system/RoleAdd.vue'),
        meta: {
          title: '角色新增'
        }
      },
    ]
  },



]

const router = new VueRouter({
  routes
})

export default router