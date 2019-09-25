const Module = function(resolve, reject) {
    $.get('./components/module-component.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    value:1,
                    nodeData:[],
                    nodeColumn:[
                        {
                            type: 'expand',
                            width: 50,
                            render: (h, params) => {
                                if(params.row.moredetail){
                                    return h('div', [
                                       h('span',{
                                            domProps:{
                                                innerHTML:params.row.moredetail
                                            },
                                            style:{
                                                color:"red",
                                                letterSpacing:"1px",
                                                fontSize:"14px"
                                            }
                                       }),
                                       h(expandRow,{
                                            props:{
                                                data:this.chosenNodeParams
                                            },
                                            style:{
                                                display:params.row.name == 'chosen'?'block':'none'
                                            }
                                        })
                                    ])
                                }
                            }
                        },
                        {key:"name", title:"名称" , width: 180},
                        {key:"type", title:"类型", width: 220},
                        {key:"default",title:"默认值", width: 100},
                        {key:"desc",title:"描述"}
                    ],
                    edgeData:[],
                    edgeColumn:[],
                    layoutData:[],
                    interactionData:[],
                    manipulationData:[],
                    physicsData:[],
                    functionFlag:{
                        nodeflag:false,
                        edgeflag:false,
                        layoutflag:false,
                        interactionflag:false,
                        manipulationflag:false,
                        physicsflag:false
                    },
                    chosenNodeParams:[  //chosen.node为函数的时候data
                      {property:"color",example:"见  node.color.background"},
                      {property:"borderWidth",example:"见  node.borderWidth"} ,
                      {property:"borderColor",example:"见  node.color.border"} ,
                      {property:"size",example:"见  node.size"} ,
                      {property:"borderDashes",example:"见  node.shapeProperties.borderDashes"} ,
                      {property:"borderRadius",example:"见  node.shapeProperties.borderRadius"} ,
                      {property:"shadow",example:"见  node.shadow.enabled"} ,
                      {property:"shadowColor",example:"见  node.shadow.color"} ,
                      {property:"shadowSize",example:"见  node.shadow.size"},  
                      {property:"shadowX",example:"见  node.shadow.x"}  ,
                      {property:"shadowY",example:"见  node.shadow.y"}  
                    ],
                   
                    chosenLabelParams:[  //chosen.node为函数的时候data
                        {property:"color",example:"见  node.font.color"},
                        {property:"size",example:"见  node.font.size"} ,
                        {property:"face",example:"见  node.shapeProperties.borderDashes"} ,
                        {property:"mod",example:"字体修饰符('bold', 'italic'等等)"} ,
                        {property:"vadjust",example:"见  node.font.vadjust"} ,
                        {property:"strokeWidth",example:"见  node.font.strokeWidth"} ,
                        {property:"strokeColor",example:"见  node.font.strokeColor"} 
                    ],
                }
            },
            components: { expandRow },
            methods: {
                //获取node的属性详情table列表
                getNodeDetailFn(){
                    let this_ = this;
                    if(!this_.functionFlag.nodeflag){
                        $.ajax({
                            url:"../../../data/node.json",
                            success:function(data){
                                this_.nodeData = data;
                                this_.functionFlag.nodeflag = true;
                            },
                            error:function(){
                                console.log(arguments)
                            }
                        });
                    };
                },
                // 获取edge的属性详情table列表
                getEdgeDetailFn(){
                    let this_ = this;
                    if(!this_.functionFlag.edgeflag){
                        $.ajax({
                            url:"../../../data/edge.json",
                            success:function(data){
                                this_.edgeData = data;
                                this_.functionFlag.edgeflag = true;
                            },
                            error:function(){
                                console.log(arguments)
                            }
                        });
                    };
                },
                //获取layout的属性详情table列表
                getLayoutFn(){
                    let this_ = this;
                    if(!this_.functionFlag.layoutflag){
                        $.ajax({
                            url:"../../../data/layout.json",
                            success:function(data){
                                this_.layoutData = data;
                                this_.functionFlag.layoutflag = true;
                            },
                            error:function(){
                                console.log(arguments)
                            }
                        });
                    }
                },
                //获取interaction 的属性详情table列表
                getInteractionFn(){
                    let this_ = this;
                    if(!this_.functionFlag.layoutflag){
                        $.ajax({
                            url:"../../../data/interaction.json",
                            success:function(data){
                                this_.interactionData = data;
                                this_.functionFlag.interactionflag = true;
                            },
                            error:function(){
                                console.log(arguments)
                            }
                        });
                    }
                },
                //获取Manipulation的属性详情table列表
                getManipulationFn(){
                    let this_ = this;
                    if(!this_.functionFlag.manipulationflag){
                        $.ajax({
                            url:"../../../data/manipulation.json",
                            success:function(data){
                                this_.manipulationData = data;
                                this_.functionFlag.manipulationflag = true;
                            },
                            error:function(){
                                console.log(arguments)
                            }
                        });
                    }
                    
                },
                //获取physics的属性详情table列表
                getPhysicsFn(){
                    let this_ = this;
                    if(!this_.functionFlag.physicsflag){
                        $.ajax({
                            url:"../../../data/dataphysics.json",
                            success:function(data){
                                this_.physicsData = data;
                                this_.functionFlag.physicsflag = true;
                            },
                            error:function(){
                                console.log(arguments)
                            }
                        });
                    }
                    
                }
            },
            created() {
               
            },
            mounted: function() {
             
            }
        });
    })
}