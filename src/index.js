import React from 'react';
import Experience from './Experience';
import InfoAndEvalu from './InfoAndEvalu';
import InfoItemPanel from './InfoItemPanel';

var infoItems = [{itemKey: "电话", itemValue: "17770426925"}, {
    itemKey: "EMAIL",
    itemValue: "1968083780@qq.com"
}, {itemKey: "现居", itemValue: "江西师范大学"}];
var infoUser = [{itemValue: "方智峰/女/1996"},
    {itemValue: "本科大三/江西师范大学软件学院移动终端软件开发"},
    {itemValue: "github:https://github.com/NSGUF"}];
var infoDetail = [{itemValue: "较强的学习能力，良好的数学功底和算法知识；"},
    {itemValue: "有责任心，并且有团队协作精神，良好的编码规范，具备一定的策划能力；"},
    {itemValue: "熟悉Web产品开发技术，如HTML，CSS、Javascript、JSON、AJAX等;"},
    {itemValue: "熟悉主流框架jQuery、React等框架的使用"},
    {itemValue: "熟悉ES6+语法，了解Typescript"},
    {itemValue: "有Gulp 、Webpack等构建打包工具相关的经验"},
    {itemValue: "熟练使用SVN、Git等版本控制工具"},
    {itemValue: "对基本的SQL语句的编写有相关的经验"},
    {itemValue: "对安卓（JAVA）开发有相关的经验"},
    {itemValue: "较好的接受能力，能在短期内适应新环境，以及较强的抗压能力。"}];
var expeItem = [{
    title: "微助力系统（apk，2016.10-2016.12）https://github.com/NSGUF/MicroPowerApp",
    descript: "所有用户都可以查看，搜索，评论，帮助别人发起的审核通过的助力，且能更改自己的个人设置，" +
    "但是只有志愿者或者后台才可以发起，删除助力。所有用户都能发起，搜索，查看，评论求助捐赠和我要捐赠，" +
    "并且可去帮助和评论。但是能其他用户能看到的，必须是后台审核通过了的。普通用户可申请成为志愿者，但要提交个人详细信息。",
    control: "负责主页现实的界面和搜索界面的设计，编写后台连接sql server实现对助力，捐赠的管理如添加、更改、删除以及对个人设置的增、删、改、查； "
}
,
{
    title:"微助力系统（web，2016.10-2016.12）https://github.com/NSGUF/MicroPowerWeb",
        descript
:
    "所有用户都可以查看，搜索，评论，帮助别人发起的审核通过的助力，且能更改自己的个人设置，" +
    "但是只有志愿者或者后台才可以发起，删除助力。所有用户都能发起，搜索，查看，评论求助捐赠和我要捐赠，" +
    "并且可去帮助和评论。但是能其他用户能看到的，必须是后台审核通过了的。普通用户可申请成为志愿者，但要提交个人详细信息。",
        control
:
    "负责主页现实的界面和搜索界面的设计，编写后台连接sql server实现对助力，捐赠的管理如添加、更改、删除以及对个人设置的增、删、改、查； "
}
,
{
    title:"薪资明细邮件发放系统（winform，2016.5-2016.7）",
        descript
:
    "分别读取Excel中的发送邮箱信息、接收邮箱信息、薪资明细信息 ，然后将薪资明细信息分别加入 HTML的表格标签，" +
    "使接收者接收到表格形式的信息；再在接收邮箱信息中查找对应的接收人邮箱，发送薪资明细信息。",
        control
:
    "一个发送者一次性发送多条信息给每条信息对应的接受者。（正在申请软件著作权）"
},
        {
            title:"JS小游戏（2015.11-2015.12）https://nsguf.github.io/JSGame/",
            descript
                :
            "实现几个js小游戏，2048,五子棋，扫雷，贪吃蛇，打地鼠，拼图、等小游戏。",
            control
                :
                "游戏算法，界面"
        }
]
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