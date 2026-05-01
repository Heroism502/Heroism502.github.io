const ACCESS_HASH = "cc6193e4badc6e8675378809874b136cc677b9c2f5ab114129b874d717f3fdb7";
const STORAGE_KEY = "liang-xie-homepage-unlocked";
const LANGUAGE_STORAGE_KEY = "liang-xie-homepage-language";

const form = document.querySelector("#access-form");
const input = document.querySelector("#access-code");
const message = document.querySelector("#access-message");
const protectedSite = document.querySelector(".protected");
const languageButton = document.querySelector("#language-toggle");

const sectionLabels = {
  en: {
    "about-me": "👨‍🎓 About Me",
    "-news": "🔥 News",
    "-publications": "📝 Publications",
    "-patents": "📜 Patents",
    "-standards": "📑 Standards",
    "-honors-and-awards": "🎖 Honors and Awards",
    "-educations": "📖 Educations",
    "-academic-service": "💻 Academic Service",
    "-projects": "🧪 Projects",
  },
  zh: {
    "about-me": "👨‍🎓 个人简介",
    "-news": "🔥 最新动态",
    "-publications": "📝 代表论文",
    "-patents": "📜 专利",
    "-standards": "📑 标准提案",
    "-honors-and-awards": "🎖 荣誉奖励",
    "-educations": "📖 教育经历",
    "-academic-service": "💻 学术服务",
    "-projects": "🧪 科研项目",
  },
};

const zhTranslations = {
  title: "谢良 (Liang Xie) - 个人主页",
  description: "谢良的学术主页。研究方向包括三维视觉数据压缩、重建、多模态模型和具身智能。",
  single: [
    [".eyebrow", "内部预览"],
    ["#gate-title", "谢良 | Liang Xie"],
    [".gate-copy", "该学术主页当前仅限所有者预览。"],
    [".access-form label", "访问码"],
    [".access-row button", "解锁"],
    [".author__bio", "助理教授"],
    [".icon-location", "中国广州"],
    [".icon-university", "广东工业大学"],
    [".author__urls_sm a", "邮箱"],
  ],
  groups: [
    [
      "#site-nav .visible-links a",
      [
        "主页",
        "个人简介",
        "最新动态",
        "代表论文",
        "专利",
        "标准提案",
        "荣誉奖励",
        "教育经历",
        "学术服务",
        "科研项目",
        "关于 MMlab",
      ],
    ],
    [
      ".about-text",
      [
        "我现任广东工业大学计算机学院助理教授。硕士毕业于中山大学，博士毕业于北京大学电子与计算机工程学院。我的研究方向聚焦三维数据压缩与重建，重点包括点云压缩、三维高斯表示与编码、感知质量建模、多模态基础模型以及具身智能。",
        "我已在 IEEE TPAMI、IEEE TBC、IEEE TIM、APSIPA Transactions、AAAI、ACM MM、ICRA、DCC 等主流期刊和会议发表论文 20 余篇。作为第一提案人，我向 AVS/IEEE DCSC 提交了 25 项以上标准化提案，其中 10 余项已被采纳，另有多项处于探索实验阶段。此外，我已申请 15 项与视觉媒体编码、点云压缩、多模态数据处理和三维重建相关的发明专利。",
        "我积极参与科研软件、数据集建设和学术服务工作。曾主导开发 LearningPCC 和 PCHMVision 等开源点云压缩库，并构建 PKU-DPCC 动态点云压缩数据集、PKU-JND 点云压缩恰可察觉失真建模数据集、PKU-GS 面向无人机采集的高斯点云数据集等大规模数据集。我也担任多媒体与计算机视觉领域主流期刊和会议审稿人，包括 TPAMI、TIP、TMM、TCE、AAAI、ACM MM 和 ICRA 等。",
      ],
    ],
  ],
  sectionParagraphs: {
    "-publications": ["（* 表示通讯作者，# 表示共同贡献）"],
    "-academic-service": [
      "<strong>受邀报告与学术展示</strong>",
      "<strong>国际期刊审稿</strong>",
      "<strong>国际会议审稿</strong>",
    ],
  },
  lists: {
    "-publications": [
      "<p>[IEEE TIM’26] <strong>点云压缩中的恰可察觉失真测量：基准数据集与预测网络</strong></p><p><strong>Liang Xie</strong>, Songlin Fan, Wenxu Gao, Baoliang Chen, Ge Li, Wei Gao*.</p>",
      "<p>[AAAI’26] <strong>缓解感知偏差：一种无训练的大语言多模态模型图像质量评价增强方法</strong></p><p>Baoliang Chen, Siyi Pan, Dongxu Wu, <strong>Liang Xie*</strong>, Xiangjie Sui, Lingyu Zhu, Hanwei Zhu.</p>",
      "<p>[IEEE TPAMI’25] <strong>基于深度学习的点云压缩：深度综述与基准</strong></p><p>Wei Gao, <strong>Liang Xie*</strong>, Songlin Fan, Ge Li, Shan Liu, Wen Gao.</p>",
      "<p>[IEEE TBC’25] <strong>面向大规模点云的前景感知混合注意力几何压缩</strong></p><p><strong>Liang Xie</strong>, Haoran Li, Baoliang Cheng, Ge Li, Sam Kwong, Wei Gao*.</p>",
      "<p>[ICME’26] <strong>面向三维点云压缩的感知恰可察觉失真建模</strong></p><p><strong>Liang Xie</strong>, Wei Gao, Ge Li, Yanting Li.</p>",
      "<p>[ACM MM’25] <strong>DPCSet：面向压缩与感知的大规模动态点云数据集</strong></p><p>Wenxu Gao, <strong>Liang Xie#</strong>, Kangli Wang, Jingxuan Su, Changhao Peng, Wei Gao*.</p>",
      "<p>[ACM MobiCom’25] <strong>交通场景中高精度仿真道路网络的自动生成</strong></p><p><strong>Liang Xie*</strong>, Wenke Huang.</p>",
      "<p>[ACM MobiCom’25] <strong>面向三维高斯泼溅点云的高效几何压缩与通信</strong></p><p><strong>Liang Xie</strong>, Yanting Li, Luyang Tang, Wei Gao*.</p>",
      "<p>[NAACL’25] <strong>面向驾驶疲劳检测的基于学习的多帧视觉特征框架</strong></p><p><strong>Liang Xie</strong>, Songlin Fan*.</p>",
      "<p>[ACM MM’24] <strong>PCHMVision：面向人类与机器视觉的开源点云压缩库</strong></p><p><strong>Liang Xie</strong>, Wei Gao*.</p>",
      "<p>[ACM MM’24] <strong>面向人类与机器视觉的 ROI 引导点云几何压缩</strong></p><p><strong>Liang Xie</strong>, Wei Gao*, Huiming Zheng, Ge Li.</p>",
      "<p>[ACM MM’24] <strong>LearningPCC：面向学习型点云压缩的 PyTorch 库</strong></p><p><strong>Liang Xie</strong>, Wei Gao*.</p>",
      "<p>[APSIPA SIP’24] <strong>PKU-DPCC：一个新的动态点云压缩数据集</strong></p><p><strong>Liang Xie</strong>, Xingmin Mu, Ge Li, Wei Gao*.</p>",
      "<p>[ICRA’24] <strong>SPCGC：面向机器视觉的可扩展点云几何压缩</strong></p><p><strong>Liang Xie</strong>, Wei Gao*, Huiming Zheng, Ge Li.</p>",
      "<p>[DCC’24] <strong>面向点云几何压缩的语义感知视觉分解</strong></p><p><strong>Liang Xie</strong>, Wei Gao*, Huiming Zheng, Hua Ye.</p>",
      "<p>[DCC’24] <strong>PDNet：面向点云几何压缩与分析的并行双分支网络</strong></p><p><strong>Liang Xie</strong>, Wei Gao*, Songlin Fan, Zhaojian Yao.</p>",
      "<p>[ICMEW’24] <strong>面向基于深度学习的屏幕内容视频编码的自适应帧内周期大小</strong></p><p>Yuyang Wu, <strong>Liang Xie#</strong>, Shangkun Sun, Wei Gao*.</p>",
      "<p>[ACM MMW’22] <strong>基于稀疏张量的端到端点云几何压缩与分析</strong></p><p><strong>Liang Xie</strong>, Wei Gao*, Huiming Zheng.</p>",
      "<p>[ICTAI’22] <strong>基于无监督路线生成的在线车辆跟踪精度提升</strong></p><p><strong>Liang Xie</strong>, Menghao Hu, Xinbei Bai*.</p>",
      "<p>[ICONIP’22] <strong>面向硬件友好与鲁棒性的人脸关键点检测方法</strong></p><p><strong>Liang Xie</strong>, Menghao Hu, Xinbei Bai*, Wenke Huang.</p>",
      "<p>[ACM MM’22] <strong>OpenPointCloud：基于深度学习的开源点云压缩算法库</strong></p><p>Wei Gao*, Hua Ye, Ge Li, Huiming Zheng, Yuyang Wu, <strong>Liang Xie</strong>.</p>",
    ],
    "-news": [
      "<em>2026.04</em>: 在 ICME 2026 DyGSC 动态高斯泼溅压缩挑战赛中排名第 4。",
      "<em>2026.04</em>: 两篇论文被 2026 年中国图象图形学学术会议接收为 Poster。",
      "<em>2026.03</em>: 提交关于高效三维高斯泼溅压缩中重要性感知剪枝的 IEEE DCSC 提案。",
      "<em>2026.03</em>: 参与 IEEE DCSC 高斯泼溅编码探索实验与通用测试条件更新。",
      "<em>2026.02</em>: 一篇关于基于 JND 的点云压缩论文被 IEEE TIM 接收。",
      "<em>2026.02</em>: 一篇关于前景-背景点云压缩的论文被 IEEE TBC 接收。",
      "<em>2026.01</em>: 一个面向三维点云压缩感知 JND 建模的 ICME Grand Challenge 获批。",
      "<em>2025.12</em>: 一篇关于无训练增强 LMM 图像质量评价能力的 AAAI 论文被接收。",
      "<em>2025.12</em>: 提交关于 PKU-GS 大规模无人机场景高斯泼溅压缩数据集的 IEEE DCSC 提案。",
      "<em>2025.07</em>: 入职广东工业大学，任助理教授。",
      "<em>2025.07</em>: 关于基于深度学习的点云压缩综述与基准的 IEEE TPAMI 论文被接收。",
    ],
    "-patents": [
      "<em>2025</em>: <strong>谢良</strong>. 基于跨模态对齐的大规模多模态数据集构建方法。中国发明专利，实质审查（2025114183133）。",
      "<em>2025</em>: <strong>谢良</strong>. 基于视觉基础模型的多模态融合渐进式预训练与自适应微调方法。中国发明专利，实质审查（2025114235443）。",
      "<em>2025</em>: <strong>谢良</strong>. 基于知识蒸馏的视觉基础模型优化与部署方法。中国发明专利，实质审查（202511298023X）。",
      "<em>2025</em>: <strong>谢良</strong>. 融合局部和全局特征的视觉基础模型多场景图像识别方法。中国发明专利，实质审查（2025114114059）。",
      "<em>2025</em>: <strong>谢良</strong>. 车辆跟踪方法、装置、智能终端及存储介质。中国发明专利，授权（CN112435276B）。",
      "<em>2025</em>: <strong>谢良</strong>. 混合交通流中公交车道占用行为实时识别与动态决策方法。中国发明专利，实质审查（2025110676697）。",
      "<em>2025</em>: <strong>谢良</strong>. 面向三维重建的高斯点云无损编码和解码方法。中国发明专利，实质审查（2025111551896）。",
      "<em>2025</em>: <strong>谢良</strong>. 点云压缩数据集构建方法及恰可察觉失真预测网络。中国发明专利，实质审查（2025109955675）。",
      "<em>2025</em>: <strong>谢良</strong>. 面向大规模点云的前景感知混合注意力几何压缩方法与系统。中国发明专利，受理（202511225437X）。",
      "<em>2025</em>: <strong>谢良</strong>. 面向多任务场景的点云处理系统与方法。中国发明专利，实质审查（2025111463363）。",
      "<em>2025</em>: <strong>谢良</strong>. 自动驾驶场景下的车道线检测方法与系统。中国发明专利，实质审查（2025109367866）。",
      "<em>2025</em>: <strong>谢良</strong>. 融合恰可察觉失真感知和多模态评估的点云数据标注与预处理系统。软件著作权，授权（2025R11S1867325）。",
      "<em>2025</em>: 高伟，<strong>谢良</strong>，李革. 点云数据处理方法及目标点云数据处理模型。中国发明专利，实质审查（202210445999）。",
      "<em>2025</em>: 高伟，<strong>谢良</strong>，李革. 点云重建方法、系统、终端设备及计算机存储介质。中国发明专利，实质审查（2023108826856）。",
      "<em>2025</em>: 高伟，<strong>谢良</strong>. 点云数据处理方法、装置、设备及存储介质。中国发明专利，实质审查（2024113041874）。",
      "<em>2025</em>: 高伟，<strong>谢良</strong>. 多模态点云压缩方法、点云压缩框架、设备及存储介质。中国发明专利，实质审查（2025101573441）。",
    ],
    "-standards": [
      "<em>2026</em>: <strong>谢良</strong>，余凯鸿，王海强，李革，高伟. PKU-GS：面向无人机大规模场景建模的高斯泼溅压缩数据集。IEEE DCSC 3366.3 Gaussian Splat Coding（M0018）。",
      "<em>2026</em>: <strong>谢良</strong>，陈振鑫，余凯鸿，曾安，李革，高伟. 面向高效三维高斯泼溅压缩的重要性感知剪枝。IEEE DCSC 3366.3 Gaussian Splat Coding（M0020）。",
      "<em>2026</em>: 王海强，刘杉，<strong>谢良</strong>. 大规模场景重建探索。IEEE DCSC 3366.3 Gaussian Splat Coding（M0018）。",
      "<em>2026</em>: 王海强，刘杉，<strong>谢良</strong>，余凯鸿，王乐，曾安. P3366.3 高斯泼溅编码通用测试条件更新建议。IEEE DCSC 3366.3 Gaussian Splat Coding（M0008）。",
      "<em>2025</em>: <strong>谢良</strong>，唐璐阳，高文旭，孙尚坤，李革，王荣刚，高伟. 面向 i3DV 体积视频智能编码平台的高斯点云无损编码方案。M8992。",
      "<em>2025</em>: <strong>谢良</strong>，陈振鑫，曾安，李革，高伟. 面向三维高斯点云高效紧凑编码的多域感知剪枝。M9393。",
      "<em>2025</em>: <strong>谢良</strong>，陈振鑫，李革，高伟. 端到端三维高斯点云编码综述与分析。M8993。",
      "<em>2025</em>: <strong>谢良</strong>，高文旭，孙尚坤，高伟，李革. 端到端动态点云压缩数据集与基准。M8994。",
      "<em>2025</em>: <strong>谢良</strong>，高文旭，李革，高伟. 基于恰可察觉失真的点云压缩数据集与预测网络。M8995。",
      "<em>2025</em>: <strong>谢良</strong>，高伟，范松林，牟星民，李革. 面向动态点云压缩的多场景数据集。M7707。",
      "<em>2025</em>: <strong>谢良</strong>，高伟，李革. 基于深度学习的端到端点云压缩需求测试分析。M7933。",
      "<em>2025</em>: <strong>谢良</strong>，高伟，李革. 基于深度学习的点云压缩技术需求。M8118。",
      "<em>2025</em>: <strong>谢良</strong>，高伟，李革. AVS 基于深度学习的点云编码通用测试条件建议。M8233。",
      "<em>2025</em>: <strong>谢良</strong>，高伟，李革. 一种区域解耦的点云几何压缩算法。M8338。",
      "<em>2025</em>: <strong>谢良</strong>，刘昊若，李革，高伟. AVS 基于深度学习的点云编码通用测试条件 v2 建议。M8323。",
      "<em>2025</em>: <strong>谢良</strong>，李革，高伟. 基于深度学习的点云压缩通用测试条件 v3 建议。M8448。",
      "<em>2025</em>: <strong>谢良</strong>，李革，高伟. AVS 基于深度学习的点云压缩技术征集证据。M8491。",
      "<em>2025</em>: <strong>谢良</strong>. 基于双四叉树占用码的无损点云压缩交叉验证。M8523。",
      "<em>2025</em>: 范松林，<strong>谢良</strong>，高伟，李革. VR 点云质量评估联合交叉验证提案。M7823。",
      "<em>2025</em>: 范松林，<strong>谢良</strong>，高伟，李革. VR 点云质量评估联合交叉验证提案 v2。M7894。",
      "<em>2025</em>: 范松林，<strong>谢良</strong>，王继龙. 点云质量评估参考软件评分阶段优化。M7781。",
      "<em>2025</em>: 高伟，<strong>谢良</strong>，李革. 基于深度学习的端到端点云压缩技术需求 v2。M7932。",
      "<em>2025</em>: 高伟，<strong>谢良</strong>，张伟，马占，徐一凌. 基于深度学习的点云编码需求分析与用例讨论。M7879。",
      "<em>2025</em>: 高伟，<strong>谢良</strong>，李革. 基于深度学习的点云压缩测试分析 v2。M8108。",
      "<em>2025</em>: 牟星民，<strong>谢良</strong>，范松林，高伟，李革. 动态点云压缩性能分析及新动态点云建议。M7786。",
      "<em>2025</em>: 易千禧，<strong>谢良</strong>，李革，高伟. 数字人压缩需求综述。M8815。",
      "<em>2025</em>: 范松林，高文旭，<strong>谢良</strong>，高伟，李革. 交互式 VR 点云质量评估方案。M7782。",
      "<em>2025</em>: 郭玉兰，李浩然，<strong>谢良</strong>，高伟，李革. 基于相关扩散层次预测的八叉树动态点云压缩。M8638。",
      "<em>2025</em>: 高文，李革，高伟，马思伟，<strong>谢良</strong>. 基于深度学习的端到端点云压缩技术需求。M7820。",
    ],
    "-honors-and-awards": [
      "<em>2025</em>: 北京大学优秀毕业生。",
      "<em>2023-2025</em>: 鹏城实验室优秀博士研究生。",
      "<em>2025</em>: 北京大学三好学生、平安励志奖学金。",
      "<em>2017</em>: 中山大学一等奖学金。",
      "<em>2015</em>: 信息技术应用与电子系统设计竞赛国家级奖项。",
    ],
    "-educations": [
      "<em>2021 - 2025</em>，博士，计算机应用技术专业，北京大学。导师：高伟教授、李革教授。",
      "<em>2015 - 2017</em>，工程硕士，电子与通信工程专业，中山大学。导师：王国利教授。",
    ],
    "-academic-service": [
      [
        "三维点云计算中的神经网络设计与优化，IEEE WCCI Tutorials，2024。",
        "中国图象图形学学术会议 Poster 展示，2025。",
        "粤港澳大湾区感知计算融合学术论坛学术报告，2025。",
      ],
      [
        "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
        "IEEE Transactions on Image Processing (TIP)",
        "IEEE Transactions on Multimedia (TMM)",
        "IEEE Transactions on Consumer Electronics (TCE)",
        "ACM Transactions on Multimedia Computing Communications and Applications (TOMM)",
      ],
      [
        "ACM International Conference on Multimedia (ACM MM)",
        "IEEE International Conference on Robotics and Automation (ICRA)",
        "AAAI Conference on Artificial Intelligence (AAAI)",
        "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
        "Chinese Conference on Pattern Recognition and Computer Vision (PRCV)",
        "IEEE International Symposium on Circuits and Systems (ISCAS)",
      ],
    ],
    "-projects": [
      "国家自然科学基金面上项目：基于视觉感知的三维点云编码关键技术，核心成员。",
      "广东省基础与应用基础研究基金面上项目：面向视觉感知增强的智能点云编码，核心成员。",
      "深圳市科技计划基础研究面上项目：面向三维场景分析的动态点云编码关键技术，核心成员。",
      "深圳市科技计划基础研究面上项目：面向三维视觉感知的深度学习视频编码，核心成员。",
    ],
  },
  moreButtons: {
    "-news": ["更多动态", "收起动态"],
    "-patents": ["更多专利", "收起专利"],
    "-standards": ["更多标准", "收起标准"],
  },
};

let currentLanguage = "en";

function setUnlocked(unlocked) {
  document.body.classList.toggle("unlocked", unlocked);
  document.body.classList.toggle("locked", !unlocked);
  protectedSite?.setAttribute("aria-hidden", unlocked ? "false" : "true");
  if (unlocked) {
    sessionStorage.setItem(STORAGE_KEY, "true");
  } else {
    sessionStorage.removeItem(STORAGE_KEY);
  }
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) === "zh" ? "zh" : "en";
  } catch {
    return "en";
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Ignore storage errors in private or restricted browser contexts.
  }
}

function rememberHtml(element) {
  if (element && !element.dataset.enHtml) {
    element.dataset.enHtml = element.innerHTML;
  }
}

function setHtml(element, zhHtml, language = currentLanguage) {
  if (!element) return;
  rememberHtml(element);
  element.innerHTML = language === "zh" ? zhHtml : element.dataset.enHtml;
}

function setGroupHtml(selector, zhItems, language) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (zhItems[index] !== undefined) {
      setHtml(element, zhItems[index], language);
    }
  });
}

function getSectionElements(id, tagName) {
  const section = document.getElementById(id);
  const elements = [];
  let sibling = section?.nextElementSibling;
  while (sibling && sibling.tagName !== "H1") {
    if (sibling.tagName === tagName) {
      elements.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return elements;
}

function setSectionLists(id, zhLists, language) {
  const lists = getSectionElements(id, "UL");
  if (Array.isArray(zhLists[0])) {
    lists.forEach((list, listIndex) => {
      setGroupItems(list, zhLists[listIndex] || [], language);
    });
    return;
  }
  if (lists[0]) {
    setGroupItems(lists[0], zhLists, language);
  }
}

function setGroupItems(list, zhItems, language) {
  Array.from(list.children).forEach((item, index) => {
    if (zhItems[index] !== undefined) {
      setHtml(item, zhItems[index], language);
    }
  });
}

function setHeadingLabel(id, label) {
  const heading = document.getElementById(id);
  if (!heading) return;

  const textNode = Array.from(heading.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (textNode) {
    textNode.textContent = `${label} `;
  } else {
    heading.insertBefore(document.createTextNode(`${label} `), heading.firstChild);
  }
}

function setMoreButtonLabels(language = currentLanguage) {
  Object.entries(zhTranslations.moreButtons).forEach(([id, zhLabels]) => {
    const heading = document.getElementById(id);
    const button = heading?.querySelector(".more-button");
    if (!button) return;

    if (!button.dataset.enMore) {
      button.dataset.enMore = button.dataset.more;
      button.dataset.enLess = button.dataset.less;
    }

    const [more, less] = language === "zh"
      ? zhLabels
      : [button.dataset.enMore, button.dataset.enLess];
    button.dataset.more = more;
    button.dataset.less = less;
    const list = heading.nextElementSibling;
    button.textContent = list?.classList.contains("is-expanded") ? less : more;
  });
}

function applyLanguage(language) {
  language = language === "zh" ? "zh" : "en";
  currentLanguage = language;
  storeLanguage(language);

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh" ? zhTranslations.title : "Liang Xie (谢良) - Homepage";

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      "content",
      language === "zh"
        ? zhTranslations.description
        : "Liang Xie's academic homepage. Research in 3D visual data compression, reconstruction, multimodal models, and embodied intelligence.",
    );
  }

  Object.entries(sectionLabels[language]).forEach(([id, label]) => setHeadingLabel(id, label));

  zhTranslations.single.forEach(([selector, zhHtml]) => {
    setHtml(document.querySelector(selector), zhHtml, language);
  });

  zhTranslations.groups.forEach(([selector, zhItems]) => {
    setGroupHtml(selector, zhItems, language);
  });

  Object.entries(zhTranslations.sectionParagraphs).forEach(([id, zhItems]) => {
    const paragraphs = getSectionElements(id, "P");
    paragraphs.forEach((paragraph, index) => {
      if (zhItems[index] !== undefined) {
        setHtml(paragraph, zhItems[index], language);
      }
    });
  });

  Object.entries(zhTranslations.lists).forEach(([id, zhItems]) => {
    setSectionLists(id, zhItems, language);
  });

  setMoreButtonLabels(language);

  if (languageButton) {
    languageButton.textContent = language === "zh" ? "EN" : "中文";
    languageButton.setAttribute(
      "aria-label",
      language === "zh" ? "Switch to English" : "Switch to Chinese",
    );
  }
}

if (sessionStorage.getItem(STORAGE_KEY) === "true") {
  setUnlocked(true);
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const entered = input.value.trim();
  const digest = await sha256(entered);

  if (digest === ACCESS_HASH) {
    message.textContent = "";
    input.value = "";
    setUnlocked(true);
    document.querySelector("#about-me")?.scrollIntoView();
    return;
  }

  message.textContent = currentLanguage === "zh" ? "访问码不正确。" : "Incorrect access code.";
  input.select();
});

document.querySelectorAll(".collapsible-list").forEach((list) => {
  const visibleCount = Number(list.dataset.visible || 5);
  const items = Array.from(list.children);
  const previousButton = list.previousElementSibling?.querySelector(".more-button");
  const nextButton = list.nextElementSibling?.classList.contains("more-button")
    ? list.nextElementSibling
    : null;
  const button = previousButton || nextButton;

  if (!button || items.length <= visibleCount) {
    button?.classList.add("is-hidden");
    return;
  }

  let expanded = false;

  function render() {
    list.classList.toggle("is-expanded", expanded);
    items.forEach((item, index) => {
      item.classList.toggle("is-hidden", !expanded && index >= visibleCount);
    });
    button.textContent = expanded ? button.dataset.less : button.dataset.more;
  }

  button.addEventListener("click", () => {
    expanded = !expanded;
    render();
  });

  render();
});

function toggleLanguage() {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
}

function initLanguageToggle() {
  currentLanguage = getStoredLanguage();
  applyLanguage(currentLanguage);
}

window.toggleLanguage = toggleLanguage;
initLanguageToggle();
