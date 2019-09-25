const Home = function(resolve, reject) {
    $.get('./components/home.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    value:1
                }
            },
            components: { expandRow },
            methods: {
                
            },
            created() {
               
            },
            mounted: function() {
             
            }
        });
    })
}