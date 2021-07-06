import FirstPage from '@/page/mainContent/Firstpage/Index' //通知公告
//**************系统管理**************
import Send from '@/page/mainContent/System/Send/Index' //信息发布
import BasicData from '@/page/mainContent/System/BasicData/Index' //系统管理——基础数据
import Organization from '@/page/mainContent/System/Organization/Index' //系统管理——组织架构
import User from '@/page/mainContent/System/User/Index' //系统管理——用户管理
import Power from '@/page/mainContent/System/Power/Index' //系统管理——角色权限
import DataCopy from '@/page/mainContent/System/DataCopy/Index' //系统管理——数据备份
import SystemLog from '@/page/mainContent/System/SystemLog/Index' //系统管理——系统日志
//**************客户总览**************
import CustomerOverview from '@/page/mainContent/CustomerOverview/Index' //客户总览
//**************负荷指数**************
import LoadIndex from '@/page/mainContent/LoadIndex/Index' //负荷指数
//**************云服务**************
import CloudService from '@/page/mainContent/CloudService/Index' //云服务
//**************报警记录**************
import AlarmRecord from '@/page/mainContent/AlarmRecord/Index' //报警记录
//**************备件管理**************
import SparePartManage from '@/page/mainContent/SparePartManage/Index' //备件管理
//**************注册授权**************
import RegisterImpower from '@/page/mainContent/RegisterImpower/Index' //注册授权

// **************登录后访问的路由**********
export default [
    {
        path: 'FirstPage',
        name: 'FirstPage',
        meta: {title: '通知公告'},
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
    }, {
        path: 'CustomerOverview',
        name: 'CustomerOverview',
        meta: {title: '客户总览'},
        component: CustomerOverview
    }, {
        path: 'LoadIndex',
        name: 'LoadIndex',
        meta: {title: '负荷指数'},
        component: LoadIndex
    }, {
        path: 'CloudService',
        name: 'CloudService',
        meta: {title: '云服务'},
        component: CloudService
    }, {
        path: 'AlarmRecord',
        name: 'AlarmRecord',
        meta: {title: '报警记录'},
        component: AlarmRecord
    }, {
        path: 'SparePartManage',
        name: 'SparePartManage',
        meta: {title: '备件管理'},
        component: SparePartManage
    }, {
        path: 'RegisterImpower',
        name: 'RegisterImpower',
        meta: {title: '注册授权'},
        component: RegisterImpower
    }, {
        path: 'BasicData',
        name: 'BasicData',
        meta: {title: '基础数据'},
        component: BasicData
    },
]
