module.exports = {
  base: "/MadBOK/",
  title: "MadBOK",
  description: "MadBOK for hanchenhao",
  head: [
    ["link", {
      rel: "shortcut icon",
      href: "./favicon.ico"
    }],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "./favicon.ico"
      }
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.json"
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "./logo152.png"
      }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "./logo144.png"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#000000"
      }
    ]
  ],
  plugins: [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: true
    }
  ],
  themeConfig: {
    // logo: ".vuepress/logo.png",

    sidebar: [{
        title: "敏捷管理", // 必要的
        path: "/Agile/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ["/Agile/前言", "前言"],
          ["/Agile/00-Scrum和Agile的历史", "Scrum和Agile的历史"],
          ["/Agile/01-起步", "起步"],
          ["/Agile/02-态度和能力", "态度和能力"],
          ["/Agile/03-规划和保护", "规划和保护"],
          ["/Agile/04-需求的细化", "需求的细化"],
          ["/Agile/05-估算", "估算"],
          ["/Agile/06-质量", "质量"],
          ["/Agile/07-监控和指标", "监控和指标"],
          ["/Agile/自组织团队", "自组织团队"],
          ["/Agile/scrum的回顾会", "Scrum的回顾会"],
          ["/Agile/极限编程和看板", "极限编程和看板"],
          ["/Agile/辅助决策-Cynefin模型", "辅助决策-Cynefin模型"],
          ["/Agile/萨提亚变革模型", "萨提亚变革模型"],
          ["/Agile/Kotter领导变革八步法", "Kotter领导变革八步法"]
        ]
      },
      {
        title: "看板系统", // 必要的
        path: "/Kanban/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/Kanban/前言", "前言"] ,
          ["/Kanban/看板原则", "看板原则"] ,
          ["/Kanban/工作可视化", "工作可视化"] ,
          ["/Kanban/限制在制品", "限制在制品"] ,
          ["/Kanban/管理流动", "管理流动"] ,
          ["/Kanban/估算技术", "估算技术"] ,
          ["/Kanban/看板游戏", "看板游戏"] 
          // ["/Insights/如何刻意练习", "如何刻意练习"],
          // ["/Insights/如何在竞争中突围", "如何在竞争中突围"]
        ]
      },
      // {
      //   title: "引导技巧", // 必要的
      //   path: "/Facilitation/前言", // 可选的, 应该是一个绝对路径
      //   collapsable: true, // 可选的, 默认值是 true,
      //   sidebarDepth: 2, // 可选的, 默认值是 1,
      //   children: [
      //     ["/Facilitation/前言", "前言"] ,
      //     ["/Facilitation/理解专业引导技巧", "理解专业引导技巧"] ,
      //     ["/Facilitation/初探专业引导技术", "初探专业引导技术"] 
      //   ]
      // },
      {
        title: "系统思考", // 必要的
        path: "/ThinkingInSystem/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/ThinkingInSystem/前言", "前言"] ,
          ["/ThinkingInSystem/系统基础概念", "系统基础概念"] ,
          ["/ThinkingInSystem/系统范例", "系统结构范例"] ,
          ["/ThinkingInSystem/系统的特性", "系统的特性"] ,
          ["/ThinkingInSystem/系统的障碍", "系统的障碍"] ,
          ["/ThinkingInSystem/系统的陷阱与对策", "系统的陷阱与对策"] ,
          ["/ThinkingInSystem/系统的杠杆点", "系统的杠杆点"] ,
          ["/ThinkingInSystem/系统生存法则", "系统生存法则"] 
          // ["/Insights/如何刻意练习", "如何刻意练习"],
          // ["/Insights/如何在竞争中突围", "如何在竞争中突围"]
        ]
      },
      {
        title: "模型思维", // 必要的
        path: "/TheModelThinker/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/TheModelThinker/前言", "前言"] ,
          ["/TheModelThinker/正态分布", "正态分布"] ,
          ["/TheModelThinker/幂律分布", "幂律分布"] ,
          ["/TheModelThinker/线性模型", "线性模型"] ,
          ["/TheModelThinker/非线性模型", "非线性模型"] ,
          ["/TheModelThinker/博弈模型", "博弈模型"] ,
          ["/TheModelThinker/网络模型", "网络模型"] ,
          ["/TheModelThinker/广播模型", "广播、扩散、传染模型"] ,
          ["/TheModelThinker/熵", "熵"] ,
          ["/TheModelThinker/随机模型", "随机模型"] ,
          ["/TheModelThinker/路径依赖模型", "路径依赖模型"] ,
          ["/TheModelThinker/局部互动模型", "局部互动模型"] ,
          ["/TheModelThinker/李雅普诺夫函数", "李雅普诺夫函数"] ,
          ["/TheModelThinker/马尔可夫模型", "马尔可夫模型"] ,
          ["/TheModelThinker/系统动力学模型", "系统动力学模型"] ,
          ["/TheModelThinker/基于阈值的模型", "基于阈值的模型"] ,
          ["/TheModelThinker/竞争模型", "竞争模型"] ,
          ["/TheModelThinker/博弈论模型", "博弈论模型"] ,
          ["/TheModelThinker/合作模型", "合作模型"] ,
          ["/TheModelThinker/集体行动问题", "集体行动问题"] ,
          ["/TheModelThinker/机制设计", "机制设计"] ,
          ["/TheModelThinker/信号模型", "信号模型"] ,
          ["/TheModelThinker/学习模型", "学习模型"] ,
          ["/TheModelThinker/崎岖景观模型", "崎岖景观模型"] 
          // ["/Insights/如何刻意练习", "如何刻意练习"],
          // ["/Insights/如何在竞争中突围", "如何在竞争中突围"]
        ]
      },
      {
        title: "中台设计方法", // 必要的
        path: "/MiddleOffice/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/MiddleOffice/前言", "中台"],
          ["/MiddleOffice/01-有什么中台", "中台的类型"],
          ["/MiddleOffice/02-为什么要建中台", "中台的建设理由"],
          ["/MiddleOffice/03-中台是什么", "中台的定义"],
          ["/MiddleOffice/04-中台建设的愿景是什么", "中台的愿景"],
          ["/MiddleOffice/05-中台的用户和客户是谁", "中台的客户"],
          ["/MiddleOffice/06-中台建设方法论", "中台的方法论"]
        ]
      },
      {
        title: "领域驱动设计", // 必要的
        path: "/DomainDrivenDesign/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/DomainDrivenDesign/前言", "前言"],
          ["/DomainDrivenDesign/00-什么是领域驱动设计", "什么是DDD"],
          ["/DomainDrivenDesign/01-为什么要选择DDD", "为什么要选择DDD"],
          ["/DomainDrivenDesign/02-建立领域通用语言", "建立领域通用语言"],
          ["/DomainDrivenDesign/04-限界上下文", "限界上下文"],
          ["/DomainDrivenDesign/05-实体和值对象", "实体和值对象"],
          ["/DomainDrivenDesign/06-聚合和聚合根", "聚合和聚合根"],
          ["/DomainDrivenDesign/07-领域事件", "领域事件"],
          ["/DomainDrivenDesign/08-DDD分层架构", "DDD分层架构"],
          ["/DomainDrivenDesign/09-架构模型", "架构模型"],
          ["/DomainDrivenDesign/10-DDD实践", "DDD实践"],
          ["/DomainDrivenDesign/11-领域建模与事件风暴", "领域建模与事件风暴"],
          ["/DomainDrivenDesign/12-代码模型", "代码模型"],
          ["/DomainDrivenDesign/13-边界", "边界"]
        ]
      },
      {
        title: "数据产品理论", // 必要的
        path: "/DataProductTheory/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/DataProductTheory/前言", "前言"],        
          ["/DataProductTheory/数据作为产品", "数据作为产品"],
          ["/DataProductTheory/数据加工", "数据加工"],
          ["/DataProductTheory/数据的隐私和安全", "数据的隐私和安全"],
          ["/DataProductTheory/数据的价值感知", "数据的价值感知"],
          ["/DataProductTheory/数据产品化要点", "数据产品化要点"],
          ["/DataProductTheory/数据分析基础", "数据分析基础"]
        ]
      },
      {
        title: "数据管理 ", // 必要的
        path: "/DataManagement/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          // ["/DataManagement/数据经济时代的传统企业数据治理", "数据经济时代的传统企业数据治理"],        
          ["/DataManagement/前言", "前言"],        
          ["/DataManagement/基本概念及数据管理原则", "基本概念及数据管理原则"] ,
          ["/DataManagement/数据管理的挑战", "数据管理的挑战"] ,
          ["/DataManagement/数据管理战略组成", "数据管理战略组成"] ,
          ["/DataManagement/数据伦理", "数据伦理"]   ,
          ["/DataManagement/数据架构", "数据架构"]   ,
          ["/DataManagement/数据建模和设计", "数据建模和设计"]   ,
          ["/DataManagement/数据存储和操作", "数据存储和操作"]   ,
          ["/DataManagement/数据安全", "数据安全"]   ,
          ["/DataManagement/数据集成和互操作", "数据集成和互操作"]   ,
          ["/DataManagement/文件和内容管理", "文件和内容管理"]   ,
          ["/DataManagement/参考数据和主数据", "参考数据和主数据"]   ,
          ["/DataManagement/数据仓库和商务智能", "数据仓库和商务智能"]   ,
          ["/DataManagement/元数据管理", "元数据管理"]   ,
          ["/DataManagement/数据管理成熟度评估", "数据管理成熟度评估"]   ,
          ["/DataManagement/度量指标", "度量指标"] 
        ]
      },
      {
        title: "解决方案架构", // 必要的
        path: "/SolutionArchitecture/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/SolutionArchitecture/前言", "前言"],
          ["/SolutionArchitecture/解决方案架构的含义", "解决方案架构的含义"],
          ["/SolutionArchitecture/解决方案架构的属性", "解决方案架构的属性"],
          ["/SolutionArchitecture/解决方案架构的设计原则", "解决方案架构的设计原则"],
          ["/SolutionArchitecture/云迁移和混合云架构设计", "云迁移和混合云架构设计"],
          ["/SolutionArchitecture/解决方案架构设计模式", "解决方案架构的设计模式"],
          ["/SolutionArchitecture/解决方案架构性能设计", "解决方案架构的性能设计"],
          ["/SolutionArchitecture/解决方案架构安全设计", "解决方案架构的安全设计"],
          ["/SolutionArchitecture/解决方案架构可靠性设计", "解决方案架构的可靠性设计"],
          ["/SolutionArchitecture/解决方案架构运维设计", "解决方案架构的运维设计"],
          ["/SolutionArchitecture/解决方案架构成本设计", "解决方案架构的成本设计"],
          ["/SolutionArchitecture/DevOps", "解决方案架构的DevOps"],
          ["/SolutionArchitecture/数据工程和机器学习", "数据工程和机器学习"],
          ["/SolutionArchitecture/遗留系统的架构改造", "遗留系统的架构改造"],
          ["/SolutionArchitecture/解决方案架构的文档", "解决方案架构的文档"]
        ]
      },
      {
        title: "沟通技巧", // 必要的
        path: "/Communicate/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/Communicate/前言", "如何听懂一句话的真实意图并进行高效回应？"] ,
          ["/Communicate/如何有针对性的进行沟通反馈？", "如何有针对性的进行沟通反馈？"] ,
          ["/Communicate/如何让沟通更具开放性？", "如何让沟通更具开放性？"] ,
          ["/Communicate/如何在沟通中达成目标并导向行动？", "如何在沟通中达成目标并导向行动？"] ,
          ["/Communicate/如何赞美一个人？", "如何赞美一个人？"] ,
          ["/Communicate/如何说服一个人", "如何说服一个人？"] ,
          ["/Communicate/如何辅导一个人", "如何辅导一个人？"] ,
          ["/Communicate/如何批评一个人", "如何批评一个人？"] ,
          ["/Communicate/如何进行道歉", "如何进行道歉？"] ,
          ["/Communicate/如何调解矛盾", "如何调解矛盾？"] ,
          ["/Communicate/如何通过求助发起协作", "如何通过求助发起协作？"] 
        ]
      },
      {
        title: "供应链管理", // 必要的
        path: "/SupplyChainManagement/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/SupplyChainManagement/前言", "前言"] ,
          ["/SupplyChainManagement/供应链常见的问题", "供应链常见的问题"] ,
          ["/SupplyChainManagement/控制供应链复杂度", "控制供应链复杂度"] ,
          ["/SupplyChainManagement/减缓供应链波动", "减缓供应链波动"] ,
          ["/SupplyChainManagement/专注供应链库存", "专注供应链库存"] ,
          ["/SupplyChainManagement/降低供应链成本", "降低供应链成本"] ,
          ["/SupplyChainManagement/供应商的选择与管理", "供应商的选择与管理"] ,
          ["/SupplyChainManagement/采购管理", "采购管理"] 
        ]
      },
      {
        title: "企业文化落地", // 必要的
        path: "/CorporateCulture/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/CorporateCulture/前言", "前言"],
          ["/CorporateCulture/企业文化建设规划", "企业文化建设规划"],
          ["/CorporateCulture/文化理念的萃取和共识", "文化理念的萃取和共识"],
          ["/CorporateCulture/制度与文化融合", "制度与文化融合"],
          ["/CorporateCulture/员工行为的强化", "员工行为的强化"],
          ["/CorporateCulture/塑造标杆人物", "塑造标杆人物"],
          ["/CorporateCulture/企业文化培训", "企业文化培训"]
        ]
      },
      {
        title: "咨询顾问基本功", // 必要的
        path: "/Consultant/前言", // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1,
        children: [
          ["/Consultant/前言", "前言"],
          ["/Consultant/项目洽谈", "项目洽谈"],
          ["/Consultant/项目启动", "项目启动"],
          ["/Consultant/塑造角色", "塑造角色"],
          ["/Consultant/专业能力", "专业能力"],
          ["/Consultant/过程控制", "过程控制"]
        ]
      }
    ],
    // sidebar: auto,
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "Other",
        items: [{
          text: "算法与数据结构",
          link: "https://hanchenhao.github.io/Algorithms-DataStructures-Vuepress/"
        }]
      }
    ]
  },
  displayAllHeaders: true,
  lastUpdated: "Last Updated",
  smoothScroll: true
};