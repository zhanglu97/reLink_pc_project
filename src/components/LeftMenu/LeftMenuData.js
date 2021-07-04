//左侧菜单数据
export default [
    {
        name: 'FirstPage',//路由name
        title: '信息公告',
        icon: 'el-icon-s-comment',
        imgSrc: require('../../assets/img/icon1.png'),
    }, {
        title: '系统设置',
        imgSrc: require('../../assets/img/icon5.png'),
        children: [ //子菜单
//          {
//              name: 'Send',//路由name
//              title: '信息发布',
//          }, 
            {
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
