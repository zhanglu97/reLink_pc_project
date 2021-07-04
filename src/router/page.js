import FirstPage from '@/page/mainContent/Firstpage/Index' //信息公告
import Send from '@/page/mainContent/System/Send/Index' //信息发布
import Organization from '@/page/mainContent/System/Organization/Index' //系统管理——组织架构
import User from '@/page/mainContent/System/User/Index' //系统管理——用户管理
import Power from '@/page/mainContent/System/Power/Index' //系统管理——角色权限
import DataCopy from '@/page/mainContent/System/DataCopy/Index' //系统管理——数据备份
import SystemLog from '@/page/mainContent/System/SystemLog/Index' //系统管理——系统日志

// **************登录后访问的路由**********
export default [
    {
        path: 'FirstPage',
        name: 'FirstPage',
        meta: {title: '信息公告'},
        component: FirstPage
    }, {
        path: 'Send',
        name: 'Send',
        meta: {title: '信息发布'},
        component: Send
    },{
        path: 'User',
        name: 'User',
        meta: {title: '用户管理'},
        component: User
    }, {
        path: 'Organization',
        name: 'Organization',
        meta: {title: '组织架构'},
        component: Organization
    }, {
        path: 'Power',
        name: 'Power',
        meta: {title: '角色权限'},
        component: Power
    }, {
        path: 'DataCopy',
        name: 'DataCopy',
        meta: {title: '数据备份'},
        component: DataCopy
    }, {
        path: 'SystemLog',
        name: 'SystemLog',
        meta: {title: '系统日志'},
        component: SystemLog
    }, 
]
