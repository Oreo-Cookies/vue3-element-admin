import { createApp } from "vue";
import App from './App.vue'

// 传递给createApp的选项用于配置根组件。
// 当我们挂载时，该组件被用作渲染的起点
const app = createApp(App)

// 一个应用需要被挂载到一个Dom元素中
const vm = app.mount('#app')
// mount 不返回应用的本身，而是返回根组件实例

// 不要再property或者生命周期回调函数中用箭头函数，箭头函数没有this，this会作为变量已知向上级词法作用域查找

// v-if与v-for一起使用时，v-if拥有更高的优先级, v-if 将没有权限访问 v-for 里的变量


// v-for渲染元素列表时,默认使用就地更新策略.
// 就地更新策略 => 如果数据项的顺序被改变,vue将不会移动dom元素来匹配数据项的顺序,而是就地更新每个元素,并且确保他们在每个索引位置正确渲染.
// 就地更新策略只适用于不依赖子组件状态或临时dom状态(表单输入值)的列表渲染输出


// 非prop的attribut => 指传向一个组件,但该组件没有响应prop或emits定义的attribute.可以通过$attr访问
// 当组件返回单个根节点时,非prop的attribute会自动添加到根节点的attribute上
// 如果不希望根组件继承attribute,可以在组件的选择项中设置inheritAttrs: false。
// 通过将 inheritAttrs 选项设置为 false，你可以使用组件的 $attrs property 将 attribute 应用到其它元素上，该 property 包括组件 props 和 emits property 中未包含的所有属性 (例如，class、style、v-on 监听器等)。



