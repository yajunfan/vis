const Example = function(resolve, reject) {
    $.get('./components/example.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    layoutMethod:"hubsize",
                    nodes:data.nodes,
                    edges:data.edges
                }
            },
            components: { expandRow },
            methods: {
                draw() {
                    var container = this.$refs.mynetwork;
                    this.edges.forEach(item=>{
                        if(item.label){
                            item.font={
                                color:"#bbb8b8",
                                size:16
                            }
                        }
                        item.size = 100;
                    })
                    var data = {
                      nodes: this.nodes,
                      edges: this.edges
                    };
              
                    var options = {
                     nodes:{
                         font:{
                             size:14,
                             color:"#bbb8b8"
                         }, 
                         color:{
                             border:"yellow",
                             "highlight":{"border":"green"}
                         },
                         shapeProperties:{
                            useBorderWithImage:true
                         },
                     },
                     
                      layout: {
                        hierarchical: {
                            levelSeparation:200,
                            nodeSpacing:340,
                            sortMethod: this.layoutMethod,
                        //   direction:"LR"
                        }
                      },
                      edges: {
                        arrows: {to : true },
                        font:{
                            color:"yellow",
                            // background:"red",
                            strokeColor:"blue"
                        }
                      },
                      physics:{
                        stabilization:{
                            fit:false
                        }
                      },
                    };
                    var network = new vis.Network(container, data, options);
                    network.setSize("100%","900")
                }
              
            },
            created() {
               
            },
            mounted: function() {
                this.draw();
            }
        });
    })
}