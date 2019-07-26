const Network = function(resolve, reject) {
    $.get('../../../html/network.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    value:1,
                }
            },
            methods: { 
            },
            created() {
               
            },
            mounted: function() {
                
            }
        });
    })
}