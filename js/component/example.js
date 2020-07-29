console.log(data)
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
                    this.nodes.forEach(item=>{
                        item.size = 100;
                    })
                    var data = {
                      nodes: this.nodes,
                      edges: this.edges
                    };
              
                    var options = {
                     nodes:{
                         font:{
                             size:40
                         }
                     },
                      layout: {
                        hierarchical: {
                            levelSeparation:800,
                            nodeSpacing:340,
                          sortMethod: this.layoutMethod,
                        //   direction:"LR"
                        }
                      },
                      edges: {
                        arrows: {to : true }
                      },
                      physics:false,
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