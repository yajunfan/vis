const expandRow = function(resolve, reject) {
    $.get('./vis/components/table-expand.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            props: {
                data: Object
            },
            data(){
                return{
                    chosenNodeColumn:[
                        {key:"property", title:"属性" },
                        {key:"example", title:"参考"}
                    ]
                }
            }
           
        });
    })
}