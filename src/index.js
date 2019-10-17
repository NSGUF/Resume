import React from 'react';
import Experience from './Experience';
import InfoAndEvalu from './InfoAndEvalu';
import InfoItemPanel from './InfoItemPanel';

var infoItems = [{itemKey: "电话", itemValue: "16620892522"}, {
    itemKey: "EMAIL",
    itemValue: "zhifengfang@foxmail.com"
}, {itemKey: "现居", itemValue: "深圳龙岗"}];
var infoUser = [{itemValue: "方智峰/女/1996"},
    {itemValue: "本科/江西师范大学软件学院移动终端软件开发"},
    {itemValue: "github：https://github.com/NSGUF"},
    {itemValue: " 博 客 园：http://www.cnblogs.com/NSGUF"}];
var infoDetail = [{itemValue: "较强的学习能力，良好的数学功底和算法知识；"},
{itemValue: "有责任心，并且有团队协作精神，良好的编码规范，具备良好的编程能力；"},
{itemValue: "较好的接受能力，能在短期内适应新环境，以及较强的抗压能力；"},
{itemValue: "熟悉Web产品开发技术，如HTML5，CSS3、Javascript、AJAX等；"},
{itemValue: "有微信小程序开发经验；"},
{itemValue: "熟悉Typescript；"},
{itemValue: "熟悉JQuery、React、Vue（全家桶）、Bootstrap、Element UI、Mint UI等框架的使用；"},
{itemValue: "熟悉Sass(Scss)、Less、Stylus等css预处理语言熟悉ES6+语法；"},
{itemValue: "有webpack，gulp等构建打包工具相关的经验；"},
{itemValue: "熟练使用SVN、Git等版本控制工具；"},
{itemValue: "了解Koa框架以及一些常用中间件；"},
{itemValue: "了解常用nginx反向代理配置以及jenkins配置；"},
{itemValue: "熟悉机器学习常用算法，如线性模型、决策树、聚类、支持向量机等；"},
{itemValue: "熟悉Python(Numpy/Scipy/Matplotlib/Pandas/scikit-learn)等；"},
{itemValue: "了解TensorFlow并做过小实验如MNIST；"},
{itemValue: "了解Python爬虫，并可完成基本的数据爬取并有Python开发框架如Flask开发经验； "},
{itemValue: "了解mongodb、SQL Server、MySql数据库；"},
{itemValue: "对安卓（JAVA）开发有相关的经验 ；"},
{itemValue: "对java web（Spring Boot）开发有相关的经验 ； "},
{itemValue: "熟悉Linux 基本操作；"},
{itemValue: "了解C、C++、C#；"},];
var expeItem = [{
    title: "JS小游戏（2015.11-2015.12）",
    descript: "实现几个js小游戏，2048，五子棋，扫雷，贪吃蛇，打地鼠，拼图、等小游戏；",
    control: "es5；"
},{
    title: "润药商城后台（2016.1-2016.6）",
    descript: "润药商城后台药物查询排序上架下架的管理后台，提供给润药的客服人员操作使用；",
    control: "React+ES6+Webpack搭建脚手架，并进行相关的组件（List、浮动导航条等）开发和前后端接口调试工作；"
},{
    title: "薪资明细邮件发放系统（winform，2016.5-2016.7）",
    descript: "分别读取Excel中的发送邮箱信息、接收邮箱信息、薪资明细信息 ，然后将薪资明细信息分别加入HTML的表格标签，使接收者接收到表格形式的信息；再在接收邮箱信息中查找对应的接收人邮箱，发送薪资明细信息。（已申请软件著作权） ",
    control: "React+ES6+Webpack+java；"
},{
    title: "微助力系统（web，2016.10-2016.12）",
    descript: "类似轻松筹的网站；有两个版本，一个是使用java开发的动态网站，另一个使用react重构前端页面；",
    control: "windofm+C#；"
},{
    title: "建投OA（winform，2017.7-2017.8）",
    descript: "主要做四个模块：人事管理，工资管理，信息管理，系统管理；",
    control: "winform+C#+Sql Server；"
},{
    title: "情报信息共享平台（2017.9-2017.10）",
    descript: "使用Bootstrap对界面进行构建和美化，编写ajax对前后端进行交互，并进行前后端接口调试；",
    control: "JQuery+LayUI+BootStrap+Ajax+Java；"
},{
    title: "智慧党建云平台（2017.11-2018.4）",
    descript: "主要负责党务信息管理、掌上学习管理、党务公开管理、互动交流管理等模块的前端；",
    control: "JQuery+LayUI+BootStrap+Ajax；"
},{
    title: "标注工具/OCR工具前端（2018.7-2018.8 ）",
    descript: "前端主要使用了Cropper插件，并使用canvas对图片图片进行处理，如切割、转换图片质量、旋转、缩放等一系列处理；后端使用了Spring boot框架保存标注后的信息以及图片；",
    control: "ES6+Cropper插件+Java+Spring Boot框架；"
},{
    title: "麻雀系统（2018.8-2018.10）",
    descript: "股票策略的实现，使用Spring Boot框架并使用redis做数据持久化；",
    control: "Java+Sprint Boot+Redis；"
},{
    title: "流水分析工具（2018.8-2018.9）",
    descript: "前端的显示和用户端信息的后端；用户传入Excel文件，用户端后端去调用数据分析接口，然后返回数据到用户端后台，最后呈现到前端，并且可以将前端的数据导成pdf；",
    control: "JQuery+BootStrap+Python；<br/>1. 利用html2canvas+jspdf实现HTML页面转化成pdf格式；<br/>2. 利用echarts插件实现折线图、柱状图以及饼图对数据的展示；"
},{
    title: "土石网（2018.11-2018.12）",
    descript: "界面的设计和实现，使用了Vue全家桶+Element Ui。 ",
    control: " 1. Vue实现前端页面构建；<br/>2. Vuex实现不同组件间的状态共享；<br/>3. Vue-router页面路由切换,实现单页的核心；<br/>4. axios基于 Promise 的 HTTP 库，向后端发起请求；5. localStorage本地保存用户信息；<br/>6. Webpack模块打包；<br/>7. SASS(SCSS)进行CSS预处理；"
},{
    title: "安心修官网（2018.12-2019.9）",
    descript: "用户报修手机整个流程和师傅入驻整个流程，以及师傅与用户之间的沟通；分别有首页、在线报修、若干个落地页、在线接单、服务保障、订单管理及消息聊天版块；",
    control: "react+react-router+mobx+typescript+tslint+sass+axios+webpack；<br/>1. 使用webpack打包打包umd组件库；<br/>2. 使用mobx管理状态；<br/>3. 使用React.lazy做路由懒加载，解决首次加载网页首页长时间白屏问题；<br/>4. 封装了navigation、footer、modal、message等常用组件；<br/>5. 使用reconnecting-websocket.js实现自动重连websocket；"
},{
    title: "安心修小程序（2018.12-2019.9）",
    descript: "用户报修手机整个流程和师傅入驻整个流程，以及师傅与用户之间的沟通；分别有用户首页、师傅端首页、报修模板、订单管理、我的及消息聊天版块；",
    control: " 1. 封装了消息弹框、消息提示浮动框、选择弹框、红包等组件；<br/>2. 接入小神推； <br/> 3. 使用gulp处理scss编译成wxss； <br/>4. 看广告可转盘抽奖；"
},{
    title: "安心修h5（2019.4-2019.9）",
    descript: "用户报修手机的整个流程，以及师傅与用户之间的沟通；分别有修手机模块、消息聊天模块、订单模块； ",
    control: "vue-cli3.0基础上的 vue+vue-router+vuex+typescript+stylus+pug+axios+eslint<br/>1. 封装了message、modal、tabbar等常用组件； <br/>2. 利用vue-class-component、vue-property-decorator、vuex-class等插件，使用装饰器来简化书写；<br/>3. 使用pug让代码看起来更加简洁；<br/>4. 使用postcss-px2rem自动将px转成rem；<br/>5. 使用vue-awesome-swiper实现轮播；<br/>6. 使用vue-native-websocket实现聊天；<br/>7. 使用vue-scroller实现下拉刷新；<br/>8. 使用mockjs模拟数据；<br/>9. 使用import实现vue-router按需加载；<br/>10. 使用flex布局；"
},{
    title: "超级售后（2018.12-2019.9）",
    descript: "师傅端抢单以及和用户聊天；分别有抢单页、聊天页、用户列表页、以及订单管理版块；",
    control: "vue-cli2.0基础上的 vue+vue-router+vuex+typescript+stylus+pug+axios+eslint <br/>1. 封装了分页、图片弹框显示等常用组件； <br/>2. vuejs-datepicker实现日期选择； <br/>3. 使用vue-lazyload实现图片的懒加载； <br/>4. 使用vue-awesome-swiper实现轮播； "
},]
;
class App extends React.Component {
    render() {
        return (
            <div>
                <InfoItemPanel items={infoItems}/>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <InfoAndEvalu className="clr1" infoMation="个人信息" items={infoUser}/>
                <InfoAndEvalu className="clr3" infoMation="自我评价" items={infoDetail}/>
                <Experience items={expeItem}/>
            </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));