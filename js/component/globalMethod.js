const GlobalMethod = function(resolve, reject) {
    $.get('../../../../components/gloableMethod-component.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    valueglobal:"1",
                    value1:"",
                    value2:"",
                    value3:"",
                    value4:"",
                    value5:"",
                    value6:"",
                    value7:"",
                    value8:"",
                    value9:"",
                    value10:"",
                    eventNameColumn:[
                        {key:"name", title:"名称" , width: 180},
                        {key:"callbackinfo", title:"回调函数",
                            render:(h, params)=> {
                                return h('div',[
                                    h('span',{
                                        domProps:{
                                            innerHTML:params.row.callbackinfo
                                        },
                                        style:{
                                            letterSpacing:"1px",
                                            fontSize:"14px"
                                        }
                                   }),
                                ]) 
                            },
                        },
                        {key:"desc",title:"描述", width: 300}
                    ],
                    eventNameData:[]
                }
            },
            components: { expandRow },
            methods: {
                //获取node的属性详情table列表
                getEventNameFn(){
                    let this_ = this;
                    $.ajax({
                        url:"../../../data/eventName.json",
                        success:function(data){
                            this_.eventNameData = data;
                        },
                        error:function(){
                            console.log(arguments)
                        }
                    });
                },
            },
            created() {
               
            },
            mounted: function() {
                this.getEventNameFn();
            }
        });
    })
}