const routes = [
    // { path: '/', name:"main",component: Main },
    { path: '/', 
      name:"Main",
      component: Main,
      redirect: {
        name: 'network'
      },
      children:[
        { path: '/network',name:"network",component: Network }
      ]    
    },
    
  ];

//  实例化路由
const router = new VueRouter({
      routes 
 });