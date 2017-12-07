
const demo1 = resolve => require(['../page/demo1.vue'], resolve);
const demo2 = resolve => require(['../page/demo2.vue'], resolve);


export default{
    routes:[
        {path:'/demo1', component:demo1},
        {path:'/demo2', component:demo2},
        {path:'*', redirect:'/demo1'}
    ]
}
