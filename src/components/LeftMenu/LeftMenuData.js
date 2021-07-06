//左侧菜单数据
export default [
    {
        name: 'FirstPage',//路由name
        title: '通知公告',
        icon: 'iconziyuan8',
    }, {
        name: 'CustomerOverview',//路由name
        title: '客户总览',
        icon: 'iconkehu',
    }, {
        name: 'LoadIndex',//路由name
        title: '负荷指数',
        icon: 'iconshishifuhe',
    }, {
        name: 'CloudService',//路由name
        title: '云服务',
        icon: 'iconyun',
    }, {
        name: 'AlarmRecord',//路由name
        title: '报警记录',
        icon: 'iconalert',
    }, {
        name: 'SparePartManage',//路由name
        title: '备件管理',
        icon: 'iconbeijian',
    }, {
        name: 'RegisterImpower',//路由name
        title: '注册授权',
        icon: 'iconquanxian',
    }, {
        title: '系统设置',
        icon: 'iconxitongguanli',
        children: [ //子菜单
//          {
//              name: 'Send',//路由name
//              title: '信息发布',
//          },  
            {
                name: 'BasicData',//路由name
                title: '基础数据',
            }, {
                name: 'Organization',//路由name
                title: '组织架构',
            }, {
                name: 'Power',//路由name
                title: '角色权限',
            }, {
                name: 'User',//路由name
                title: '用户管理',
            }, {
                name: 'DataCopy',//路由name
                title: '数据备份',
            }, {
                name: 'SystemLog',//路由name
                title: '系统日志',
            }
        ]
    },
]
