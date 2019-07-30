const Network = function(resolve, reject) {
    $.get('../../../../components/network.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    value:1,
                    nodeData:[],
                    nodeColumn:[],
                    edgeData:[],
                    edgeColumn:[],
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
                    chosenNodeColumn:[
                        {key:"property", title:"属性" },
                        {key:"example", title:"参考"}
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
            methods: { 
            },
            created() {
               
            },
            mounted: function() {
                
            }
        });
    })
}