const routes = [
    // { path: '/', name:"main",component: Main },
    { path: '/', 
      name:"Main",
      component: Main,
      redirect: {
        name: 'module'
      },
      children:[
        { path: '/module',name:"module",component: Module }
      ]    
    },
    
  ];

//  实例化路由
const router = new VueRouter({
      routes 
 });