const Dataset = function(resolve, reject) {
    $.get('./components/dataset.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    column:[ 
                        {key:"name", title:"名称" , width: 180},
                        {key:"type", title:"属性类型" , width: 180},
                        {key:"default", title:"默认值" , width: 100},
                        {key:"desc", title:"描述",render: (h, params) => {
                            console.log(params)
                            return h('div', {
                                domProps:{
                                    innerHTML:params.row.desc
                                }
                                
                            });
                        }},
                    ],
                    conData:[
                        {
                            name:"fielsLd",
                            type:"String",
                            default:'"id"',
                            desc:`包含项目id的字段的名称。当从使用特定字段来标识项的服务器获取数据时，可以使用选项fieldId在数据集中指定该字段名。
                                    例如，CouchDB使用字段“_id”来标识文档`
                        },
                        {
                            name:"type",
                            type:"Object.<String, String>",
                            default:'"none"',
                            desc:`之后会被移除`
                        },
                        {
                            name:"queue",
                            type:"Object | boolean",
                            default:'"none"',
                            desc:`队列数据更改('add'， 'update'， 'remove')并立即刷新。可以通过调用 <b> DataSet.flush()</b>手动刷新队列，也可以在配置的 delay或max 之后刷新。
                                    当queue为true时，将使用默认选项创建一个队列。选项可以通过提供一个对象来指定:<br>
                                    <b>delay: number</b><br>
                                    在此延迟(以毫秒为单位)达到不活动状态后，队列将自动刷新。默认值是null。<br>
                                    <b>max: number</b><br>
                                    当队列超过给定的最大条目数时，队列将自动刷新。默认值为无穷大。`
                        }

                    ],
                    mColumn:[
                        {key:"method", title:"方法名称" , width: 180},
                        {key:"rtype", title:"返回类型" , width: 100},
                        {key:"desc", title:"描述" , render: (h, params) => {
                            return h('div', {
                                domProps:{
                                    innerHTML:params.row.desc
                                }
                                
                            });
                        }},
                        {key:"ex", title:"使用示例" ,  render: (h, params) => {
                            return h('div', {
                                domProps:{
                                    innerHTML:params.row.ex
                                }
                                
                            });
                        }},
                    ],
                    mData:[
                        {
                            method:"add(data [, senderId])",
                            rtype:"Id[]",
                            desc:`包含项目id的字段的名称。当从使用特定字段来标识项的服务器获取数据时，可以使用选项fieldId在数据集中指定该字段名。
                                    例如，CouchDB使用字段“_id”来标识文档`,
                            ex:`let nodes = new vis.DataSet(nodesArray); <br>
                                nodes.add(nodesArray) OR nodes.add(newObj);<br>
                                nodesArray 包含所有节点的一个数组;eg.[{id:1, label:"测试",value:24}]; <br> 
                                newObj,某一个节点的数据;eg.{id:2, label:"测试2",value:24}`
                        },
                        {
                            method:"clear([senderId])",
                            rtype:"Id[]",
                            desc:`清除DataSet中的所有数据。该函数返回一个包含被删除项id的数组。`,
                            ex:`let nodes = new vis.DataSet(nodesArray); <br>
                                nodes.clear()(清除所有) <br>
                                nodes.clear([nodeid])(清除具体某个);`
                        },
                        {
                            method:"distinct(field)",
                            rtype:"Array",
                            desc:`查找指定字段的所有不同值。返回一个包含所有不同值的无序数组。如果数据项不包含指定的字段，则忽略。`,
                            ex:`let nodes = new vis.DataSet(nodesArray); <br>
                                nodes.distinct(key)(key字段名)`
                        },
                        {
                            method:"flush()",
                            rtype:"none",
                            desc:`更新节点排布;仅当数据集配置了option时可用，请参阅 <span class="cred">Construction</span>。`,
                            ex:`DataSet.flush()`
                        },
                        {
                            method:"forEach(callback [, options])",
                            rtype:"none",
                            desc:`对数据集中的每个项执行回调函数。options 在 <span class="cred">Data Selection</span> 部分中进行了说明。`,
                            ex:`DataSet.forEach(callback [, options])`
                        },
                        {
                            method:"get([options] [, data]);get(id [,options] [, data]);get(ids [, options] [, data])",
                            rtype:"Object | Array",
                            desc:`从数据集中获取单个项、多个项或所有项。用法示例可以在<span class="cred">Getting Data</span>中找到。options 在 <span class="cred">Data Selection</span> 部分中进行了说明。
                                    当请求单个id且未找到时，返回null。当请求多个ID但未找到时，将返回一个包含空值的数组。`,
                            ex:`DataSet.get([id] [, options])`
                        },
                        {
                            method:"getDataSet()",
                            rtype:"DataSet",
                            desc:`获取数据集本身。对于DataView，此函数不返回DataView所连接的数据集。`,
                            ex:``
                        },
                        {
                            method:"getIds([options])",
                            rtype:"Id[]",
                            desc:`获取所有项或已筛选项集的ID。options 在 <span class="cred">Data Selection</span> 部分中进行了说明，但选项 fields 和type 在getid中不适用。`,
                            ex:`DataSet.getIds([options]);`
                        },
                        {
                            method:"map(callback [, options])",
                            rtype:"Array",
                            desc:`映射数据集中的每个项。options 在 <span class="cred">Data Selection</span> 部分中进行了说明`,
                            ex:`DataSet.map(callback [, options]);`
                        },
                        {
                            method:"max(field)",
                            rtype:"Object | null",
                            desc:`查找指定字段具有最大数值的项。如果找不到项，或者找不到数值项，则返回null。`,
                            ex:``
                        },
                        {
                            method:"min(field)",
                            rtype:"Object | null",
                            desc:`查找具有指定字段的最小数值的项。如果找不到项，或者找不到数值项，则返回null。`,
                            ex:``
                        },
                        {
                            method:"off(event, callback)",
                            rtype:"none",
                            desc:`取消订阅事件，删除事件侦听器。请参阅<span class="cred">Subscriptions</span> 部分。`,
                            ex:`DataSet.off(event, callback)`
                        },
                        {
                            method:"on(event, callback)",
                            rtype:"none",
                            desc:`订阅事件，添加事件侦听器.请参阅<span class="cred">Subscriptions</span> 部分。`,
                            ex:`DataSet.on(event, callback)`
                        },
                        {
                            method:"remove(id [, senderId]);remove(ids [, senderId])",
                            rtype:"Id[]",
                            desc:`按id或项目本身删除一个或多个项目。返回包含已删除项的ID的数组。请参阅<span class="cred">Data Manipulation</span> 部分。`,
                            ex:`let nodes = new vis.DataSet(nodesArray); <br>
                                nodes.remove([nodeid])(移除具体某个);`
                        },
                        {
                            method:"update(data [, senderId])",
                            rtype:"Id[]",
                            desc:`更新一个或多个现有项。data 可以是单个项，也可以是包含项的数组。当项目不存在时，将创建它。返回包含已删除项的ID的数组。
                                    请参见<span class="cred">Data Manipulation</span> 一节。`,
                            ex:`let nodes = new vis.DataSet(nodesArray); <br>
                                nodes.update({id: 2, text: 'item 2 (updated)'})`
                        },
                        {
                            method:"remove(id [, senderId]);remove(ids [, senderId])	",
                            rtype:"Id[]",
                            desc:`更新一个或多个现有项。data 可以是单个项，也可以是包含项的数组。当项目不存在时，将创建它。返回包含已删除项的ID的数组。
                                请参见<span class="cred">Data Manipulation</span> 一节。`,
                            ex:`let nodes = new vis.DataSet(nodesArray); <br>
                                nodes.updateOnly({ id: 1, text: "item 1 (updated)" });`
                        },
                    ],
                    cbColumn:[
                        {key:"parameter", title:"参数" , width: 100},
                        {key:"type", title:"类型" , width: 200},
                        {key:"desc", title:"描述" , render: (h, params) => {
                            return h('div', {
                                domProps:{
                                    innerHTML:params.row.desc
                                }
                                
                            });
                        }}
                    ],
                    cbData:[
                        {
                            parameter:"event",
                            type:"String",
                            desc:`所有可用的event: <span class="cred">add, update, or remove</span>`
                        },
                        {
                            parameter:"properties",
                            type:"Object | null",
                            desc:`提供有关事件的详细信息的可选属性。在add、update和remove事件中，properties始终是一个包含属性项的对象，
                                该属性项包含一个带有 <span class="cred">受影响项的id的数组</span>。<br>
                                update和remove事件有一个额外的字段oldData，其中包含更新或删除项目之前数据集中项目的原始数据。<br>
                                update事件还包含一个包含更改的字段数据：正在更新的项的属性。`
                        },
                        {
                            parameter:"senderId",
                            type:"String | Number",
                            desc:`senderId，可以由触发事件的应用程序代码提供。如果未提供senderId，则参数将为null。如执行update，那么传入要更新的nodeid`
                        },
                    ],
                    dsColumn:[
                        {key:"name", title:"名称" , width: 100},
                        {key:"type", title:"类型" , width: 200},
                        {key:"required", title:"是否必须" , width: 200},
                        {key:"desc", title:"描述" , render: (h, params) => {
                            return h('div', {
                                domProps:{
                                    innerHTML:params.row.desc
                                }
                                
                            });
                        }}
                    ],
                    dsData:[
                        {
                            name:"fields",
                            type:"String[ ] | Object.<String, String>",
                            required:"no",
                            desc:`一个具有字段名的数组，或一个具有当前字段名和新字段名的对象，该字段将作为返回。
                                默认情况下，将发出项的所有属性。定义fields时，只有在fields中指定名称的属性才会包含在返回的项中。`
                        },
                        {
                            name:"type",
                            type:"Object.<String, String>",
                            required:"no",
                            desc:`包含字段名作为键，数据类型作为值的对象。默认情况下，项的属性类型保持不变。指定字段类型时，项中的此字段将转换为指定类型。
                                例如，可以将包含日期的ISO字符串转换为JavaScript日期对象，或者将字符串转换为数字，反之亦然。
                                可用的数据类型列在<a href="https://visjs.github.io/vis-data/data/dataset.html#Data_Types">Data Types.</a>部分中。`
                        },
                        {
                            name:"filter",
                            type:"Function",
                            required:"no",
                            desc:`通过提供筛选函数，可以根据特定属性筛选项。为数据集中的每个项执行一个filter函数，并以该项作为参数进行调用。函数必须返回布尔值。
                                将发出filter函数返回true的所有项。请参阅<a href="https://visjs.github.io/vis-data/data/dataset.html#Data_Filtering">Data Filtering.</a>。`
                        },
                        {
                            name:"order",
                            type:"String | Function",
                            required:"no",
                            desc:`按字段名或自定义排序函数对项目排序。`
                        },
                        {
                            name:"returnType",
                            type:"String",
                            required:"no",
                            desc:`确定get函数的输出类型。允许的值为“Array”|“Object”。默认的returnType是数组。对象类型将返回一个以ID作为键的JSON对象。`
                        },
                    ]
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