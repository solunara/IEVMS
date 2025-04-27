import md5 from 'md5'
// 模拟用户数据
export const operatorData = [
    {id: 1, account: '李四', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
    {id: 2, account: '王五', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
    {id: 3, account: '赵六', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
    {id: 4, account: '杨七', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
    {id: 5, account: '赵八', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
    {id: 6, account: '周九', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
    {id: 7, account: '陈十', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
    {id: 8, account: '孙十一', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
    {id: 7, account: '张十三', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
    {id: 8, account: '刘十四', password: md5('123456'), createTime: '2024-06-16T19:20:30.000Z'},
]

// 模拟动态生成的用户菜单和权限数据
export let operatorPermissionData =  [
    // user 1
    [
        {id: 1, menu_name: '首页', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/index', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null, userPermission: null},
        {id: 2, menu_name: '车辆列表', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/vehicle', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '新增车辆', value: 'add'}, {label: '编辑', value: 'edit'}, {label: '删除', value: 'delete'}], userPermission: ['新增车辆', '编辑']},
        {id: 3, menu_name: '车辆电量监控', father_id: 0, menu_type: 1, menu_level: 2, menu_url: '/monitor', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 4, menu_name: '车辆充电', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/charge', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 5, menu_name: '车辆维保', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/maintenance', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 6, menu_name: '工单管理', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/order', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '处理工单', value: 'dealorder'}], userPermission: ['处理工单']},
        {id: 7, menu_name: '地图分布', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/maplocation', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 8, menu_name: '统计分析', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/census', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
    ],
    // user 2
    [
        {id: 1, menu_name: '首页', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/index', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null, userPermission: null},
        {id: 2, menu_name: '车辆列表', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/vehicle', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '新增车辆', value: 'add'}, {label: '编辑', value: 'edit'}, {label: '删除', value: 'delete'}], userPermission: ['新增车辆', '删除']},
        {id: 3, menu_name: '车辆电量监控', father_id: 0, menu_type: 1, menu_level: 2, menu_url: '/monitor', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 4, menu_name: '车辆充电', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/charge', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 5, menu_name: '车辆维保', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/maintenance', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 6, menu_name: '工单管理', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/order', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '处理工单', value: 'dealorder'}], userPermission: null},
        {id: 7, menu_name: '地图分布', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/maplocation', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 8, menu_name: '统计分析', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/census', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
    ],
    // user 3
    [
        {id: 1, menu_name: '首页', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/index', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null, userPermission: null},
        {id: 2, menu_name: '车辆列表', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/vehicle', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '新增车辆', value: 'add'}, {label: '编辑', value: 'edit'}, {label: '删除', value: 'delete'}], userPermission: ['删除', '编辑']},
        {id: 3, menu_name: '车辆电量监控', father_id: 0, menu_type: 1, menu_level: 2, menu_url: '/monitor', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 4, menu_name: '车辆充电', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/charge', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 5, menu_name: '车辆维保', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/maintenance', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 6, menu_name: '工单管理', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/order', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '处理工单', value: 'dealorder'}], userPermission: ['处理工单']},
        {id: 7, menu_name: '地图分布', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/maplocation', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 8, menu_name: '统计分析', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/census', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
    ],
    // user 4
    [
        {id: 1, menu_name: '首页', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/index', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null, userPermission: null},
        {id: 2, menu_name: '车辆列表', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/vehicle', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '新增车辆', value: 'add'}, {label: '编辑', value: 'edit'}, {label: '删除', value: 'delete'}], userPermission: ['新增车辆']},
        {id: 3, menu_name: '车辆电量监控', father_id: 0, menu_type: 1, menu_level: 2, menu_url: '/monitor', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 4, menu_name: '车辆充电', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/charge', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 5, menu_name: '车辆维保', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/maintenance', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 6, menu_name: '工单管理', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/order', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '处理工单', value: 'dealorder'}], userPermission: ['处理工单']},
        {id: 7, menu_name: '地图分布', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/maplocation', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 8, menu_name: '统计分析', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/census', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
    ],
    // user 5
    [
        {id: 1, menu_name: '首页', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/index', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null, userPermission: null},
        {id: 2, menu_name: '车辆列表', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/vehicle', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '新增车辆', value: 'add'}, {label: '编辑', value: 'edit'}, {label: '删除', value: 'delete'}], userPermission: ['编辑']},
        {id: 3, menu_name: '车辆电量监控', father_id: 0, menu_type: 1, menu_level: 2, menu_url: '/monitor', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 4, menu_name: '车辆充电', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/charge', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 5, menu_name: '车辆维保', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/maintenance', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 6, menu_name: '工单管理', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/order', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '处理工单', value: 'dealorder'}], userPermission: ['处理工单']},
        {id: 7, menu_name: '地图分布', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/maplocation', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 8, menu_name: '统计分析', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/census', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
    ],
    // user 6
    [
        {id: 1, menu_name: '首页', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/index', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null, userPermission: null},
        {id: 2, menu_name: '车辆列表', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/vehicle', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '新增车辆', value: 'add'}, {label: '编辑', value: 'edit'}, {label: '删除', value: 'delete'}], userPermission: ['删除']},
        {id: 3, menu_name: '车辆电量监控', father_id: 0, menu_type: 1, menu_level: 2, menu_url: '/monitor', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 4, menu_name: '车辆充电', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/charge', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 5, menu_name: '车辆维保', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/maintenance', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 6, menu_name: '工单管理', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/order', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '处理工单', value: 'dealorder'}], userPermission: ['处理工单']},
        {id: 7, menu_name: '地图分布', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/maplocation', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 8, menu_name: '统计分析', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/census', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
    ],
    // user 7
    [
        {id: 1, menu_name: '首页', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/index', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null, userPermission: null},
        {id: 2, menu_name: '车辆列表', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/vehicle', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '新增车辆', value: 'add'}, {label: '编辑', value: 'edit'}, {label: '删除', value: 'delete'}], userPermission: ['新增车辆']},
        {id: 3, menu_name: '车辆电量监控', father_id: 0, menu_type: 1, menu_level: 2, menu_url: '/monitor', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 4, menu_name: '车辆充电', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/charge', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 5, menu_name: '车辆维保', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/maintenance', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 6, menu_name: '工单管理', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/order', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '处理工单', value: 'dealorder'}], userPermission: ['处理工单']},
        {id: 7, menu_name: '地图分布', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/maplocation', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 8, menu_name: '统计分析', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/census', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
    ],
    // user 8
    [
        {id: 1, menu_name: '首页', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/index', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null, userPermission: null},
        {id: 2, menu_name: '车辆列表', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/vehicle', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '新增车辆', value: 'add'}, {label: '编辑', value: 'edit'}, {label: '删除', value: 'delete'}], userPermission: ['新增车辆']},
        {id: 3, menu_name: '车辆电量监控', father_id: 0, menu_type: 1, menu_level: 2, menu_url: '/monitor', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 4, menu_name: '车辆充电', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/charge', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 5, menu_name: '车辆维保', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/maintenance', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 6, menu_name: '工单管理', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/order', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '处理工单', value: 'dealorder'}], userPermission: ['处理工单']},
        {id: 7, menu_name: '地图分布', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/maplocation', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
        {id: 8, menu_name: '统计分析', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/census', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
    ],
]