const routes = [
    // { path: '/', name:"main",component: Main },
    { path: '/', 
      name:"Main",
      component: Main,
      redirect: {
        name: 'home'
      },
      children:[
        { path: '/home',name:"home",component: Home},
        { path: '/module',name:"module",component: Module },
        { path: '/method',name:"method",component: GlobalMethod },
        { path: '/eventlist',name:"eventlist",component: EventList },
        { path: '/dataset',name:"dataset",component: Dataset },
        { path: '/example',name:"example",component: Example }
      ]    
    },
    
  ];

//  实例化路由
const router = new VueRouter({
      routes 
 });