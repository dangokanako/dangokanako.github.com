const Chapter00Story = {};

function Init_Chapter00() {
    const C0P0 = `C0P0`;

    Chapter00Story[C0P0] = [
        [0, '【亚特姆】', '『这里，这里，看这里！按鼠标左键操作。』', 'atom1.png', 'runa1.png'],
        [0, '【亚特姆】', '『好的，游戏最开始先要说一下，很多时候这个对话框的剧情点击结束才能继续游戏的』', 'atom1.png', 'runa1.png'],
        [1, '【露娜】', '『亚特姆？你在跟谁说话啊？快点出发了』'],
        [0, '【亚特姆】', '『由于没有文本回顾功能，所以要注意看这个对话框』'],
        [0, '【亚特姆】', '『嗯……接下来就是新手教程环节』'],
        [1, '【露娜】', '『喂——喂——（挥手）』'],
        [0, '【亚特姆】', '『首先讲解一下屏幕右边的装备栏和道具栏。主要靠拖动来装备与脱下装备。消耗道具则靠右键使用。』'],
        [0, '【亚特姆】', '『装备栏从左到右分别是武器、防具、首饰、首饰2』'],
        [1, '【露娜】', '『首饰2这个命名好随意……』'],
        [0, '【亚特姆】', '『之后是地图移动。喔，露娜，你来得正好』'],
        [1, '【露娜】', '『不……我一直在这里的啊……』'],
        [0, '【亚特姆】', '『你一定正好忘记了如何在这个世界走路。接下来我们一起复习如何像正常人类一样走路。'],
        [1, '【露娜】', '『##（恼）那种事情忘不掉的吧！！』'],
        [0, '【亚特姆】', '『我们在地图上直接点击想要去的地方就可以了。如果是可以移动的地方，鼠标会从小箭头变成小手』'],
        [0, '【亚特姆】', '『其实也有不变成小手的情况存在呢…』'],
        [1, '【露娜】', '『这种设定有点烦呢…』'],
        [0, '【亚特姆】', '『之后地图左上角的话，可以移动到上一级地图，也就是世界地图和城镇地图的关系。怎么样，露娜你已经学会怎么走路了吗？』'],
        [1, '【露娜】', '『#####（怒）你知道吗，这个游戏还有音效的』'],
        [1, '【露娜】', '『火—箭—飞—拳—！』'],
        function () {
            playAudio("Damage1.m4a");
        },
        [0, '【亚特姆】', '『哎哟…疼疼疼…』'],
        [0, '', '……', 'null', 'null'],
        [0, '', '…………', 'null', 'null'],
        [0, '', '………………', 'null', 'null'],
        [0, '【亚特姆】', '『唔…总之接下来我们要去一趟武器店，取一下我之前委托维护的武器。』', 'atom1.png', 'runa1.png'],
        [0, '【亚特姆】', '『嗯……还要回家看看，去杂货店看看，去公会看看……嗯，总之新手村能去的地方先去触发一遍剧情吧』'],
        [1, '【露娜】', '『话说回来，你这个新手村的地图不是夜○城的地图吗？！』'],
        [1, '【露娜】', '『你要拿着那把攻击力加六的铁剑在这个地方混吗？！』'],
        [0, '【亚特姆】', '『嘛…以后应该会换掉的，换成那种中世纪剑与魔法，公主和勇者的地图』'],
        [0, '【亚特姆】', '『不过夜○城的设定挺酷炫的，要不就这样吧…』'],
        [1, '【露娜】', '『感觉前途渺茫啊……』'],
        [0, '【亚特姆】', '『哦对了，因为在测试，所以目前只有武器店的剧情做了。因为地图有拉扯偏移，所以大概在LITTLE CHINA那个单词下面一点的位置』'],
        [1, '【露娜】', '『感觉前途越来越黯淡了……』'],
    ];

    const C0P1 = `C0P1`;
    Chapter00Story[C0P1] = [
        function () {
            playAudio("Open2.m4a");
        },
        [0, '', '露娜和亚特姆走进了武器店',],
        [0, '【亚特姆】', '『老板在吗？』', 'atom1.png', ''],
        [1, '【荷取】', '『唔，来了来了』', 'atom1.png', 'nitori.png'],
        [0, '【露娜】', '『喂！这武器店的老板还有背景是不是不太对劲啊！（小声）』', 'runa1.png', 'atom1.png',],
        [1, '【亚特姆】', '『嘛……主要是暂时手头上也没什么其他素材……』（小声）'],
        [0, '【露娜】', '『这样真的好吗……』（小声）'],
        [1, '【亚特姆】', '『反正也不是商业化游戏…』（小声）'],
        [1, '【亚特姆】', '『以后头像和昵称直接一键替换就好了…』（小声）'],
        [0, '【露娜】', '『行吧…』（小声）'],
        [0, '【亚特姆】', '『老板，我上次那把剑怎么样了』', 'atom1.png', 'nitori.png'],
        [1, '【荷取】', '『嗯，已经充能到最低限度了，你看一下』'],
        [0, '【亚特姆】', '『嗯~闪耀着力量的感觉…真不错啊』'],
        [0, '', '亚特姆刚要伸手去拿，荷取把剑收了回去',],
        [0, '【亚特姆】', '『嗯？』'],
        [1, '【荷取】', '『喂，亚特姆，这一次剑的维护费已经不能再拖了』'],
        [0, '【亚特姆】', '『这……最近手头……』'],
        [1, '【荷取】', '『按理说最近南北战争，虽然世道越来越乱了，但是你们佣兵的日子应该更滋润一点啊』'],
        [0, '【亚特姆】', '『嗯…是啊，我也这么觉得的…（目移）』'],
        [1, '【露娜】', '『看我干嘛，魔法师队友的雇佣费也是必要的支出』', 'atom1.png', 'runa1.png'],
        [1, '【露娜】', '『而且我看了你家的账单，我觉得主要是因为这个家伙过于游手好闲好吃懒做了』',],
        [1, '【露娜】', '『一个周居然只做三件打史莱姆的任务』',],
        [0, '【亚特姆】', '『不要说得那么直白嘛…』'],
        [1, '【荷取】', '『反正你今天必须把账单清了！』', 'atom1.png', 'nitori.png'],
        [1, '【荷取】', '『私自给你这把军用的武器维护，风险已经够大了』', 'atom1.png', 'nitori.png'],
        [1, '【荷取】', '『不然以后你自个儿保养武器吧！』'],
        [0, '【亚特姆】', '『唉……好好好……』'],
        function () {
            playAudio("Coin.m4a");
            Money -= 500;
            Stat_Init();
            createItem_Temp();
        },
        [1, '【荷取】', '『嗯嗯，这还差不多』'],
        [1, '【露娜】', '『喂，金钱变成负数了，不要紧吗？！』', 'atom1.png', 'runa1.png',],
        [0, '【亚特姆】', '『小问题，最多是商店买不了东西……』'],
        [0, '【亚特姆】', '『之后去公会找个委托做一下吧……』'],
        [1, '【露娜】', '『嗯…』'],
        [0, '', '正在亚特姆拿着他的剑爱不释手的时候，店外传来了嘈杂的声音', 'null', 'null'],
        [0, '【？？？】', '『就是这家店了吗』'],
        [0, '【？？？】', '『没错，上面的给的地址就是这里了』'],
        [0, '【？？？】', '『虽然不知道什么怨什么仇，开始动手吧』'],
        [1, '【露娜】', '『亚特姆！快把武器装备上！』', 'atom1.png', 'runa1.png',],
        [0, '', '露娜似乎感觉到了危险的气息，马上拿起了法杖，做好了战斗准备'],
        [1, '【露娜】', '『如果进了战斗的话，就不能更换装备了！』', 'atom1.png', 'runa1.png',],
        [0, '【亚特姆】', '『嗯！』'],
        function () {
            playAudio("Sword5.m4a");
        },
        [0, '', '亚特姆刚拔出剑，武器店的门口就闯入两个男人'],
        function () {
            playAudio("Break.m4a");
        },
        [0, '【混混A】', '『……』', 'evil1.png', 'evil2.png',],
        [1, '【混混B】', '『……』', 'evil1.png', 'evil2.png',],
        [1, '【混混B】', '『老大，我感觉我们来的好像不是时候』', 'evil1.png', 'evil2.png',],
        [1, '【混混B】', '『先不说那个在摆弄奇怪机械的老板』', 'evil1.png', 'evil2.png',],
        [1, '【混混B】', '『面前这两个顾客好像都不是什么善茬啊』', 'evil1.png', 'evil2.png',],
        [0, '【亚特姆】', '『是啊，他们两个一看画风就非常廉价』', 'atom1.png', 'runa1.png',],
        [1, '【露娜】', '『这下要成为热心市民了呢』', 'atom1.png', 'runa1.png',],
        [0, '【混混A】', '『嗯……不过我们做这行的，收了钱就得干活……』', 'evil1.png', 'null',],
        [0, '【混混A】', '『嗯？人呢？』', 'evil1.png', 'null',],
        [1, '【露娜】', '『你的同伴刚才说完话就跑掉了喔』', 'atom1.png', 'runa1.png',],
        [0, '【混混A】', '『欸？！』', 'evil1.png', 'null',],
        [1, '【露娜】', '『上吧！』', 'atom1.png', 'runa1.png',],

        function () {
            playAudio("Flash2.m4a");
            Init_Battle();
        },

        [1, '【露娜】', '『亚特姆，不要忘了游戏战斗机制！』', 'atom1.png', 'runa1.png',],
        [1, '【露娜】', '『在右侧，我们的HP、攻防、能量作为一个整体使用』'],
        [1, '【露娜】', '『屏幕中间则是我们每个人持有的技能』'],
        [1, '【露娜】', '『主动技能都是未激活的状态，鼠标左键可以投入锑能以激活，右键减少投入锑能』'],
        [1, '【露娜】', '『在技能上投入超过一定锑能，技能则会升变。威力、效果都会获得巨大提升』'],
        [1, '【露娜】', '『此外，还有增加防御力的技能，在恰当的时候向防御技能投入点数吧』'],
        [1, '【露娜】', '『点击下方的回合结束，则会开始结算本回合激活的技能』'],
        [1, '【露娜】', '『我们上吧！』'],
        [0, '【亚特姆】', '『嗯！』'],
    ];

    const C0P2 = `C0P2`;
    Chapter00Story[C0P2] = [
        [1, '【荷取】', '『嗯…可能是最近生意太红火了，其他店主眼红的原因吧…』', 'runa1.png', 'nitori.png'],
        [0, '【露娜】', '『再怎么说也不至于这样吧』', 'runa1.png', 'nitori.png'],
        [0, '【露娜】', '『说起来你摆弄的那个是什么』', 'runa1.png', 'nitori.png'],
        [1, '【荷取】', '『自动转轮机枪塔』', 'runa1.png', 'nitori.png'],
        [0, '【露娜】', '『听起来就好危险的感觉…那种东西能合法存在的吗…』', 'runa1.png', 'nitori.png'],
        [1, '【荷取】', '『反正这城市都乱成这样了，我稍微搞点自卫武器也不成什么大问题吧』', 'runa1.png', 'nitori.png'],
        [0, '', '露娜转头看了看在翻尸体的亚特姆', 'runa1.png', 'null'],
        [0, '【露娜】', '『亚特姆，有翻到什么好东西吗』', 'runa1.png', 'atom1.png'],
        [1, '【亚特姆】', '『嗯嗯，翻到了一个钱袋子，似乎是他们来砸店的委托金』', 'runa1.png', 'atom1.png'],
        function () {
            playAudio("Coin.m4a");
            Money += 50;
            Stat_Init();
        },
        [0, '【露娜】', '『好吧……经济赤字稍微缓解了一点点』', 'runa1.png', 'atom1.png'],
        [1, '【亚特姆】', '『还有附上的委托信』', 'runa1.png', 'atom1.png'],
        [0, '【露娜】', '『好像没什么重要信息…』', 'runa1.png', 'atom1.png'],
        [0, '【露娜】', '『之后我们去哪里？』', 'runa1.png', 'atom1.png'],
        [1, '【亚特姆】', '『刚才打算去公会的吧，接个委托，就该到迷宫探索教学篇了』', 'runa1.png', 'atom1.png'],
        [0, '【露娜】', '『嗯…好吧』', 'runa1.png', 'atom1.png'],
        [0, '', '亚特姆和露娜收拾好了物品，准备离开', 'null', 'null'],
        [0, '【露娜】', '『老板你也要多保重』', 'runa1.png', 'nitori.png'],
        [1, '【荷取】', '『嗯嗯，再见』', 'runa1.png', 'nitori.png'],
        [1, '【荷取】', '『哦对了，等一下』', 'runa1.png', 'nitori.png'],
        [0, '【露娜】', '『什么事？』', 'runa1.png', 'nitori.png'],
        [1, '【荷取】', '『后面没有了』', 'runa1.png', 'nitori.png'],
        [0, '【露娜】', '『什么后面没有了？』', 'runa1.png', 'nitori.png'],
        [1, '【荷取】', '『游戏啊，游戏内容，后面没有了』', 'runa1.png', 'nitori.png'],
        [0, '【露娜】', '『欸？！就做了这么一点的吗？！！！！』', 'runa1.png', 'nitori.png'],

    ]
}



























