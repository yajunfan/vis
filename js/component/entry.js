
const Main = function(resolve, reject) {
    $.get('./vis/components/entry.html').then(function(res) { 
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    nav_name:"home",//点击的模块的名字
                    isCollapsed: false, // 左边模块的菜单的收缩控制  entry.js
                    navlists: [ //导航列表
                        {
                            id: 'home',
                            name: "首页",
                            icon: "ivu-icon ivu-icon-ios-home-outline"
                        },
                        {
                            id: 'module',
                            name: "配置module",
                            icon: "ivu-icon ivu-icon-ios-list"
                        },
                        {
                            id: 'method',
                            name: "全局方法",
                            icon: "ivu-icon ivu-icon-ios-laptop"
                        },
                        {
                            id: 'Event',
                            name: "network事件",
                            icon: "ivu-icon ivu-icon-ios-ionitron"
                        }
                    ]
                }
            },
            computed: {
                rotateIcon() {
                    return [
                        'menu-icon', this.isCollapsed ? 'rotate-icon' : ''
                    ];
                },
                menuitemClasses() {
                    return [
                        'menu-item', this.isCollapsed ? 'collapsed-menu' : ''
                    ]
                }
            },
           
            methods: { // 注意此时在methods 里面 function 不可简写 ，必须写成一下形式
                transferRoute: function() {
                                  
                },
                collapsedSider() {
                    this.$refs.side1.toggleCollapse();
                },
                //切换导航
                selectMenu: function(params,showbaseflag,state) {
                    let this_ = this;
                    this.$router.push({
                        name: params
                    });
                    
                    
                },
                
            },
            created() {
               
            },
            mounted: function() {
                
            }
        });
    })
}