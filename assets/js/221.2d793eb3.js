(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{609:function(t,s,a){"use strict";a.r(s);var v=a(54),r=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"局部互动模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部互动模型"}},[t._v("#")]),t._v(" 局部互动模型")]),t._v(" "),a("h2",{attrs:{id:"局部多数模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部多数模型"}},[t._v("#")]),t._v(" 局部多数模型")]),t._v(" "),a("p",[t._v("局部多数模型假设元胞是排列在棋盘上的，每个元胞处于两种状态中的一种，开或关。初始状态时，我们随机的给元胞分配状态，此后，元胞的状态取决于它邻居的状态。邻居可以通过多种方式加已定义。下图二维方格上的每个单元都处于开或关两种状态之一，每个单元有8个邻居，在每个周期中，随机选择一个元胞，当且仅当其中它的5个或更多邻居处于另一个状态时，这个元胞才会改变自己的状态。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.bmp.ovh/imgs/2022/07/11/1161dd70635b8f54.png",alt:""}})]),t._v(" "),a("p",[t._v("局部多数模型中的局部互动包括正反馈：元胞要与其他元胞的状态相匹配。改变一个元胞的状态最多只会导致最终配置出现很小的变化，最终的模式取决于元胞被激活的顺序，因此，这个模型也表现出了路径依赖。局部多数模型最初是为了刻画一类物理系统，在这类物理系统中，每个元胞的状态都代表一个原子的自旋态，它就像一个具有正或负电荷的磁体，每一个磁体都位于一个局部磁场中，物理力量会驱使这个磁体与它的邻居自旋相匹配。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.bmp.ovh/imgs/2022/07/11/1999981c7004e3c8.png",alt:""}})]),t._v(" "),a("p",[t._v("假设每一个元胞都代表一个人的行动，这里的行动可以是任何行为惯例，任何人都想选择一个与邻居相匹配的行动。在局部多数模型的物理解释中，斑块状均衡模式对应受挫状态。许多元胞在开的状态下有一些邻居，在关的状态下也有一些邻居。如果我们通过社会视角解释模型，就可以把这种受挫状态理解为次优均衡。由于这种互动只作用于局部，因此出现了次优均衡，如果元胞是根据全局多数原则来匹配，那么很快所有元胞都会处于相同的状态。")]),t._v(" "),a("p",[t._v("在局部互动模型中，均衡形成的斑块大小增加得比邻域的大小更快，如果我们使邻域的格子数量增加到原来的两倍，那么斑块会变得比原来两倍还大。因此，这个模型表明，当技术和城市化使人与人之间的联系更加紧密后，协调的力量可以产生更大的同质行为和信念。")]),t._v(" "),a("p",[t._v("如果我们将整个配置变成一个狭长的矩形，那么模型一般来说会产生水平和垂直的条纹，下图斑马状的条纹是一个均衡，因为每个处于开关状态的元胞都有5个处于开关状态的邻居。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.bmp.ovh/imgs/2022/07/12/f8b10a293544de88.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"生命游戏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命游戏"}},[t._v("#")]),t._v(" 生命游戏")]),t._v(" "),a("p",[t._v("生命模型与局部多数模型的关键区别在于，元胞的更新规则有两个阈值，并且所有元胞都同步更新自己的状态。在生命游戏中，方格上每个元胞都是活或者死的，每个元胞的邻居由网格上的8个相邻元胞组成，元胞根据规则同步更新自己的状态。规则分别是，对于一个死的元胞，当恰好有三个活的邻居时，这个死的元胞就会变活，对于一个活的元胞，当活的邻居小于两个或当有三个以上的活邻居死去时，这个活元胞就会死去。")]),t._v(" "),a("p",[t._v("如果我们从排在同一条水平线上的三个或的元胞开始讨论，每个元胞对应到小于两个活邻居时，我们会得到排在同一条直线上的三个元胞，中间的活元胞有两个活邻居，所以它还活着，两端活元胞只有一个活的邻居所以它们都要死亡。最后，中间的元胞上方和下方都会变活，因为这两个元胞分别各有三个活着的邻居。根据这个规则，模型会在水平线和垂直线之间不断交替闪烁。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.bmp.ovh/imgs/2022/07/12/bbec010fbfbbe93b.png",alt:""}})]),t._v(" "),a("p",[t._v("如果增加元胞的数量，还可以形成各种不同的结构模式：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.bmp.ovh/imgs/2022/07/12/f7c8e887e163c65f.png",alt:""}})]),t._v(" "),a("p",[t._v("生命游戏可以产生随机性，只有几个少数的基本定律，就可以产生高度复杂的特征，甚至产生智能。它可以从微观的规则中涌现出动态的宏观层面结构，这能够极大的加深我们对世界的理解。")])])}),[],!1,null,null,null);s.default=r.exports}}]);