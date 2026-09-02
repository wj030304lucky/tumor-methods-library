const LIB_META={version:'v1.3',updated:'2026-09-02'};
const PAPERS=[
{id:'A01',module:'因果推断与真实世界研究',priority:5,title:'Target Trial Emulation for Regulatory and Clinical Decision Making in Cancer',authors:'Dickerman BA, García-Albéniz X, Hernán MA',journal:'Journal of Clinical Oncology',year:2026,methods:['Target Trial Emulation','causal estimand','time zero','confounding adjustment'],question:'如何把肿瘤真实世界观察性研究设计得更接近随机试验，从而支持治疗决策与监管证据？',data:'真实世界肿瘤治疗数据；方法框架文章',design:'观察性研究的目标试验模拟框架',sample:'方法学文章，不对应单一固定样本量',flow:'定义目标试验协议\n→ 明确 eligibility / treatment strategies / time zero\n→ 定义 follow-up / outcome / estimand\n→ 将真实世界数据映射到协议\n→ 控制基线与时间变化混杂\n→ 敏感性分析与报告',result:'核心贡献是强调先设计、后分析：TTE不是一个单独的回归模型，而是一套用于减少设计性偏倚的因果推断框架。',innovation:'把 target trial emulation 与肿瘤监管及临床决策场景直接连接，突出 time zero、治疗策略、估计目标与因果假设。',limitations:'仍依赖可测混杂、数据质量和治疗/结局定义；无法自动消除未测混杂。',reuse:'非常适合作为真实世界肿瘤治疗比较研究的总设计模板，例如免疫治疗 vs 化疗、不同序贯治疗策略的 OS/PFS 比较。',url:'https://ascopubs.org/doi/10.1200/JCO-25-01906'},
{id:'A02',module:'因果推断与真实世界研究',priority:5,title:'Evaluating generalizability of oncology trial results to real-world patients using machine learning-based trial emulations',authors:'Orcutt X, et al.',journal:'Nature Medicine',year:2025,methods:['Trial emulation','Machine learning','IPTW','Weighted Cox'],question:'随机临床试验得到的治疗效应能否推广到风险构成更复杂的真实世界肿瘤患者？',data:'Flatiron Health 肿瘤 EHR；多个癌种真实世界患者',design:'11项III期肿瘤RCT的真实世界 trial emulation',sample:'跨晚期NSCLC、乳腺癌、前列腺癌和结直肠癌的多队列',flow:'模拟 RCT eligibility\n→ 机器学习估计患者预后风险\n→ 构建 prognostic phenotype\n→ IPTW 平衡治疗组\n→ 加权 Kaplan–Meier / Cox\n→ 与原始 RCT 治疗效应比较',result:'不同真实世界风险层患者的治疗效应与RCT总体结果并不总是等同，提示外部效度需要显式评估。',innovation:'把机器学习预后分层与 target trial emulation 结合，用真实世界数据系统研究 RCT generalizability。',limitations:'依赖EHR变量完整性、治疗可比性和未测混杂控制；不同试验可模拟程度存在差异。',reuse:'适合“RCT结果能否推广到本院/区域/高风险患者”的课题，也可用于研究 treatment effect heterogeneity。',url:'https://www.nature.com/articles/s41591-024-03352-5'},
{id:'A03',module:'因果推断与真实世界研究',priority:4,title:'Insights adjusting for non-adherence in randomized clinical trials',authors:'Giudici F, et al.',journal:'British Journal of Cancer',year:2023,methods:['IPCW','Marginal Structural Model','RPSFTM','Non-adherence'],question:'当肿瘤RCT患者不依从随机分配的治疗时，怎样估计更接近实际接受治疗的因果效应？',data:'乳腺癌随机试验数据',design:'RCT二次因果分析',sample:'TAM01相关试验人群',flow:'ITT作为基准\n→ 描述依从性\n→ IPCW处理依从/删失机制\n→ MSM估计治疗效应\n→ RPSFTM构造反事实生存时间\n→ 与ITT比较',result:'非依从可能使ITT低估真正治疗效应，因果方法可提供补充估计。',innovation:'展示了RCT中随机化之后的行为偏离也需要因果方法，而不能只依赖ITT。',limitations:'模型假设较强，权重模型错设和不可测决定因素会影响结果。',reuse:'适合药物停药、换药、交叉治疗、剂量强度等肿瘤试验或真实世界场景。',url:'https://www.nature.com/articles/s41416-023-02420-w'},
{id:'A04',module:'因果推断与真实世界研究',priority:4,title:'A synthetic control arm for refractory metastatic colorectal cancer',authors:'Yoshino T, et al.',journal:'Nature Medicine',year:2023,methods:['Synthetic control arm','External control','Patient-level pooled data'],question:'在难以设置传统对照组的晚期肿瘤试验中，能否利用既往试验患者构建可信外部对照？',data:'ARCAD 等历史随机试验个体级数据',design:'外部/合成对照构建与验证',sample:'难治性转移性结直肠癌历史试验患者',flow:'汇总历史试验患者\n→ 统一入排标准与结局\n→ 构建可比外部对照\n→ 调整基线差异\n→ 与已知随机对照结果校准/验证',result:'在合适的数据质量与可比性条件下，synthetic control arm 可作为单臂肿瘤研究的补充证据。',innovation:'把历史试验数据库转化为可验证的外部对照资源。',limitations:'跨试验时代效应、支持治疗变化和不可测差异仍是主要威胁。',reuse:'适合罕见癌、难治癌、单臂精准治疗试验，以及医院队列对接历史试验的研究。',url:'https://www.nature.com/articles/s41591-023-02488-0'},
{id:'A05',module:'因果推断与真实世界研究',priority:4,title:'Framework for the Use of External Controls to Evaluate Treatment Outcomes in Precision Oncology Trials',authors:'Siu DHW, et al.',journal:'JCO Precision Oncology',year:2024,methods:['External controls','Precision oncology','Comparability'],question:'精准肿瘤单臂试验怎样选择、构建和评估外部对照组？',data:'精准肿瘤试验与真实世界/历史对照数据',design:'方法框架',sample:'方法学文章',flow:'明确目标人群与 estimand\n→ 选择外部数据源\n→ 评估可比性\n→ 统一 time zero 与结局定义\n→ 混杂调整\n→ 偏倚与敏感性分析',result:'外部对照的可信度取决于“可比性+时间锚点+混杂控制”，而不仅是样本量。',innovation:'把 external control 的关键设计要点系统化到 precision oncology。',limitations:'外部对照不能完全替代随机化，监管接受度取决于具体疾病和证据链。',reuse:'适合作为单臂新疗法研究、罕见分子亚型研究的方法检查清单。',url:'https://ascopubs.org/doi/10.1200/PO.23.00317'},
{id:'B01',module:'生存分析与疾病轨迹',priority:5,title:'Multistate models for the natural history of cancer progression',authors:'Cheung LC, Albert PS, Das S, et al.',journal:'British Journal of Cancer',year:2022,methods:['Multi-state model','Markov','Semi-Markov','Transition intensity'],question:'如何用多状态模型描述癌症发生、进展、转移和死亡这一连续疾病过程？',data:'癌症自然史/筛查/随访数据',design:'多状态模型方法综述与应用框架',sample:'方法学文章',flow:'定义临床状态\n→ 规定允许的状态转移\n→ 估计 transition intensity\n→ 检查 Markov / semi-Markov 假设\n→ 计算状态占据概率与sojourn time\n→ 个体/人群预测',result:'多状态模型比单一Cox结局更能刻画癌症全过程，但状态定义和转移假设对结论影响很大。',innovation:'将癌症自然史和筛查问题系统映射到多状态建模框架。',limitations:'复杂状态越多，数据稀疏与模型错设风险越大；Markov假设常需检验。',reuse:'适合诊断→治疗→复发→转移→死亡，或癌前病变→癌症→死亡等课题。',url:'https://www.nature.com/articles/s41416-022-01904-5'},
{id:'B02',module:'生存分析与疾病轨迹',priority:5,title:'Development and Assessment of a Model for Predicting Individualized Outcomes in Patients With Oropharyngeal Cancer',authors:'Beesley LJ, et al.',journal:'JAMA Network Open',year:2021,methods:['Bayesian multi-state','Individualized prediction','External validation'],question:'如何同时预测口咽癌患者复发、转移和死亡等多个相互关联结局？',data:'口咽癌多队列临床随访数据',design:'Bayesian多状态预后模型开发与验证',sample:'开发队列 + 独立验证队列',flow:'定义复发/转移/死亡状态\n→ Bayesian multistate建模\n→ 个体风险预测\n→ 内部评估\n→ 外部验证\n→ 展示不同路径概率',result:'多状态预测可比单一终点模型提供更完整的个体化疾病轨迹信息。',innovation:'把Bayesian多状态模型用于临床个体化预测并进行外部验证。',limitations:'模型结构较复杂，临床部署需要更友好的解释与工具。',reuse:'非常适合“同时关注复发、转移和死亡”的肿瘤预后课题。',url:'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2782832'},
{id:'B03',module:'生存分析与疾病轨迹',priority:5,title:'Comparison of Joint and Landmark Modeling for Predicting Cancer Progression',authors:'Finelli A, et al.',journal:'JAMA Network Open',year:2021,methods:['Joint model','Landmark model','Longitudinal biomarker','Time-dependent AUC'],question:'如何利用患者随访过程中不断更新的PSA轨迹动态预测癌症进展？',data:'转移性去势抵抗性前列腺癌纵向PSA与生存数据',design:'动态预测模型比较',sample:'前列腺癌纵向随访队列',flow:'整理重复PSA测量\n→ Landmark模型\n→ Joint longitudinal-survival模型\n→ 动态风险更新\n→ time-dependent AUC\n→ Brier score比较',result:'纵向PSA轨迹相较基线单次测量能提高对癌症进展的动态预测能力。',innovation:'直接比较两类主流动态预测策略，并展示重复生物标志物的增量价值。',limitations:'纵向测量频率、缺失模式及治疗变化可能影响模型表现。',reuse:'可迁移到CEA、AFP、CA19-9、ctDNA、肿瘤体积等随时间变化指标。',url:'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2780960'},
{id:'B04',module:'生存分析与疾病轨迹',priority:5,title:'Development and Validation of a Risk Prediction Model for Second Primary Lung Cancer',authors:'Choi E, et al.',journal:'Journal of the National Cancer Institute',year:2022,methods:['Competing risk','Fine-Gray','Cause-specific Cox','DCA','External validation'],question:'肺癌生存者发生第二原发肺癌的绝对风险如何预测，同时处理“先死亡”这一竞争事件？',data:'肺癌队列；PLCO/NLST等外部验证资源',design:'竞争风险预测模型开发与外部验证',sample:'开发队列 + 多个独立外部队列',flow:'定义第二原发癌与竞争死亡\n→ Cause-specific Cox\n→ Fine–Gray\n→ 累积发生函数\n→ time-dependent AUC / Brier\n→ bootstrap\n→ external validation / DCA',result:'竞争风险框架能够更合理地估计第二原发肺癌风险，并通过外部验证评价泛化性。',innovation:'把竞争风险、模型性能、外部验证和临床决策价值完整整合。',limitations:'不同队列的检测强度和定义差异可能影响外部验证。',reuse:'是学习“竞争风险+预测模型+外部验证+DCA”的优质模板。',url:'https://academic.oup.com/jnci/article/114/1/87/6320070'},
{id:'C01',module:'Bayesian与自适应试验',priority:5,title:'Metronomic chemotherapy plus anti-PD-1 in metastatic breast cancer: a Bayesian adaptive randomized phase 2 trial',authors:'Mo H, et al.',journal:'Nature Medicine',year:2024,methods:['Bayesian adaptive randomization','Phase II trial','Interim monitoring'],question:'多种乳腺癌治疗组合并行比较时，能否依据不断积累的疗效证据动态调整随机分配？',data:'转移性乳腺癌随机II期试验',design:'Bayesian adaptive randomized trial',sample:'97例患者，5个治疗组',flow:'设定先验与疗效指标\n→ 初始随机分配\n→ 定期更新posterior\n→ adaptive randomization\n→ efficacy monitoring\n→ 最终组间比较',result:'展示了Bayesian自适应随机在多治疗臂肿瘤II期试验中的实际可操作性。',innovation:'让试验分配概率随证据更新，而不是固定到试验结束。',limitations:'复杂设计需要充分模拟与预先规则；小样本下先验和停试规则影响更大。',reuse:'适合学习Bayesian临床试验设计、多个候选治疗臂早期筛选。',url:'https://www.nature.com/articles/s41591-024-03088-2'},
{id:'C02',module:'Bayesian与自适应试验',priority:5,title:'Androgen receptor pathway inhibitors and taxanes in metastatic prostate cancer: an outcome-adaptive randomized platform trial',authors:'De Laere B, et al.',journal:'Nature Medicine',year:2024,methods:['Bayesian platform trial','Adaptive randomization','Biomarker stratification','ctDNA'],question:'能否结合分子标志物和实时疗效，在转移性前列腺癌平台试验中持续优化患者治疗分配？',data:'转移性前列腺癌；ctDNA、germline DNA、临床结局',design:'Biomarker-guided outcome-adaptive platform trial',sample:'ProBio平台试验患者',flow:'分子标志物分层\n→ 多治疗臂随机\n→ Bayesian outcome更新\n→ 调整随机概率\n→ 疾病进展后允许再次随机\n→ 累积平台证据',result:'平台试验可把精准分层、动态学习和连续治疗决策整合到同一试验基础设施中。',innovation:'biomarker + Bayesian + platform + repeated randomization 的高度整合。',limitations:'设计、运营、统计与监管复杂度高，对数据实时性要求大。',reuse:'适合理解精准肿瘤学的未来临床试验架构。',url:'https://www.nature.com/articles/s41591-024-03204-2'},
{id:'D01',module:'风险预测与精准筛查',priority:5,title:'Comprehensive Inherited Risk Estimation for Risk-Based Breast Cancer Screening in Women',authors:'Mars N, et al.',journal:'Journal of Clinical Oncology',year:2024,methods:['Polygenic risk score','Absolute risk','Risk stratification','Screening'],question:'如何整合遗传风险、家族史和致病变异，为女性制定风险分层乳腺癌筛查策略？',data:'FinnGen，遗传与临床数据',design:'大规模风险预测与筛查策略评估',sample:'约117,252名女性',flow:'构建PRS\n→ 整合家族史/致病变异\n→ 估计绝对风险\n→ 形成风险层级\n→ 映射到筛查起始年龄/策略\n→ 评估潜在筛查收益',result:'不同遗传风险组合可显著改变个体达到典型筛查风险阈值的年龄。',innovation:'从“预测风险”进一步走到“风险阈值驱动的筛查决策”。',limitations:'跨人群遗传泛化性、成本效益与真实实施仍需评估。',reuse:'适合学习“模型→风险分层→公共卫生筛查策略”的完整转化路径。',url:'https://ascopubs.org/doi/10.1200/JCO.23.00295'},
{id:'D03',module:'风险预测与精准筛查',priority:5,title:'Nationwide real-world implementation of AI for cancer detection in population-based mammography screening',authors:'Eisemann N, et al.',journal:'Nature Medicine',year:2025,methods:['Real-world AI evaluation','Mammography screening','Implementation'],question:'AI乳腺影像辅助系统在真实人群筛查环境中，是否能提高癌症检出而不显著增加召回负担？',data:'德国人群乳腺摄影筛查项目',design:'全国多中心真实世界AI实施研究',sample:'约463,094名女性；12个筛查中心，119名放射科医生',flow:'真实筛查流程接入AI\n→ AI辅助与常规双阅片比较\n→ 癌症检出率\n→ recall rate\n→ 工作流程指标\n→ 大规模实施效果评估',result:'AI辅助能够提升癌症检出，同时没有明显恶化召回率。',innovation:'重点不是训练AUC，而是把AI放入真实临床流程评估患者与系统层结局。',limitations:'非随机实施和地区流程差异仍可能影响因果解释。',reuse:'是AI模型从开发→外部验证→真实世界实施研究的优秀范例。',url:'https://www.nature.com/articles/s41591-024-03408-6'},
{id:'E01',module:'因果机器学习',priority:5,title:'Causal machine learning for predicting treatment outcomes',authors:'Feuerriegel S, et al.',journal:'Nature Medicine',year:2024,methods:['Causal ML','HTE','CATE','ITE','Counterfactual prediction'],question:'机器学习如何从“预测患者会怎样”进一步转向“预测某治疗对这个患者是否真正有益”？',data:'方法综述，覆盖RCT与观察性医疗数据',design:'方法学Perspective/综述',sample:'方法学文章',flow:'定义潜在结局\n→ ATE/CATE/ITE目标\n→ 选择 causal learner\n→ 处理混杂/重叠\n→ 估计治疗效应异质性\n→ 评价稳健性与临床可用性',result:'Causal ML强调反事实治疗效应，而不是单纯风险预测，是精准治疗的重要统计学习方向。',innovation:'系统连接因果推断与机器学习，并强调HTE估计的验证和临床解释。',limitations:'个体治疗效应不可直接观察，模型评价、外推和未测混杂仍是难点。',reuse:'未来可用于回答“哪些患者更适合免疫治疗/手术/辅助化疗”等精准治疗问题。',url:'https://www.nature.com/articles/s41591-024-02902-1'},
{id:'F01',module:'数字病理与Foundation Model',priority:5,title:'A pathology foundation model for cancer diagnosis and prognosis prediction',authors:'Wang X, et al.',journal:'Nature',year:2024,methods:['Foundation model','Whole-slide image','Self-supervised learning','Prognosis'],question:'能否通过大规模病理预训练建立跨癌种通用模型，同时支持诊断、分子特征和预后任务？',data:'60,530张WSI，覆盖19个解剖部位',design:'大型病理foundation model开发与多任务验证',sample:'跨机构、跨癌种病理切片',flow:'大规模病理预训练\n→ 通用表示学习\n→ 多下游任务微调/评估\n→ 癌症识别\n→ 分子特征预测\n→ 预后/治疗相关任务\n→ 外部泛化验证',result:'CHIEF展示了一个病理foundation model可跨多癌种支持诊断与预后等不同任务。',innovation:'从单任务病理AI升级为可迁移的通用病理基础模型。',limitations:'训练资源巨大；真实临床部署、亚群公平性与跨医院domain shift仍需持续验证。',reuse:'如果以后接触WSI或病理AI，重点学习其数据划分、外部验证、任务迁移和泛化评估，而不只是网络结构。',url:'https://www.nature.com/articles/s41586-024-07894-z'},
{id:'F02',module:'数字病理与Foundation Model',priority:4,title:'Towards a general-purpose foundation model for computational pathology',authors:'Chen RJ, et al.',journal:'Nature Medicine',year:2024,methods:['UNI','Self-supervised learning','Representation learning','Foundation model'],question:'能否通过超大规模自监督病理图像预训练得到可迁移到多任务的通用视觉表示？',data:'100,000+ WSI、上亿图像patch、20种主要组织类型',design:'通用病理基础模型开发与多任务benchmark',sample:'跨组织、跨机构病理数据',flow:'超大规模自监督预训练\n→ 特征抽取\n→ 多种下游病理任务\n→ few-shot / transfer evaluation\n→ 跨数据集泛化比较',result:'通用预训练特征在多个病理任务上表现出强迁移能力。',innovation:'推动病理AI从任务特定模型转向通用representation。',limitations:'下游性能仍受数据域与标签质量影响，临床解释和部署要求高。',reuse:'适合学习self-supervised foundation model如何做benchmark和跨任务验证。',url:'https://www.nature.com/articles/s41591-024-02857-3'},
{id:'F03',module:'数字病理与Foundation Model',priority:4,title:'A foundation model for clinical-grade computational pathology and rare cancers detection',authors:'Vorontsov E, et al.',journal:'Nature Medicine',year:2024,methods:['Virchow','Rare cancer detection','Generalization','OOD validation'],question:'大规模病理基础模型能否从常见癌症泛化到数据稀少的罕见癌症？',data:'大规模WSI与常见/罕见肿瘤验证集',design:'foundation model + rare disease泛化验证',sample:'覆盖9种常见和7种罕见癌症',flow:'大规模病理预训练\n→ pan-cancer检测\n→ 常见癌benchmark\n→ 罕见癌外推\n→ OOD/外部数据评估',result:'模型在pan-cancer及罕见癌检测中表现出较强泛化能力。',innovation:'把rare cancer作为foundation model泛化能力的核心压力测试。',limitations:'罕见癌标签和代表性仍有限，临床落地需前瞻验证。',reuse:'适合学习低样本、罕见病、跨域泛化的验证框架。',url:'https://www.nature.com/articles/s41591-024-03141-0'},
{id:'G01',module:'多组学与精准肿瘤',priority:4,title:'The Molecular Twin AI platform integrates multi-omic data to predict outcomes for pancreatic adenocarcinoma',authors:'Molecular Twin investigators',journal:'Nature Cancer',year:2024,methods:['Multi-omics','Machine learning','Feature integration','Prognosis'],question:'临床、基因组、转录组和蛋白组信息联合后，能否更好预测胰腺癌结局并提炼可实施生物标志物？',data:'胰腺癌多组学与临床数据，数千个特征',design:'多组学AI预后平台研究',sample:'整合约6,363个临床与多组学特征',flow:'多组学数据质控\n→ 高维特征整合\n→ 机器学习建模\n→ 模态增量价值比较\n→ 特征筛选\n→ 简约biomarker panel\n→ 结果验证',result:'多组学可以改善预后刻画，同时提示从高维模型提炼简约标志物具有临床价值。',innovation:'兼顾高维融合与可转化的简约特征集。',limitations:'高维小样本、批次效应和外部泛化仍是主要挑战。',reuse:'如果以后接触TCGA/GENIE/医院测序队列，这是很好的“多模态→简约模型”思路。',url:'https://www.nature.com/articles/s43018-023-00697-7'},
{id:'H01',module:'空间组学与肿瘤微环境',priority:3,title:'Tumour evolution and microenvironment interactions in 2D and 3D space',authors:'Multi-center investigators',journal:'Nature',year:2024,methods:['Spatial transcriptomics','Single-nucleus RNA-seq','CODEX','Clonal evolution'],question:'肿瘤克隆演化与免疫/基质微环境如何在二维和三维空间中相互作用？',data:'多癌种空间转录组、单核RNA-seq、CODEX等',design:'空间多组学肿瘤演化研究',sample:'覆盖多种癌症样本',flow:'空间切片与单细胞测序\n→ 细胞类型识别\n→ CNV/克隆推断\n→ 空间邻域分析\n→ 微环境互作\n→ 2D/3D肿瘤演化重建',result:'空间位置为理解肿瘤克隆与免疫微环境关系提供了传统bulk或单细胞分析无法替代的信息。',innovation:'将克隆演化、单细胞和空间微环境统一分析。',limitations:'技术成本高、样本量通常有限、空间统计与批次校正复杂。',reuse:'现阶段更适合作为前沿方向储备，未来若接触空间组学可重点关注空间邻域与克隆互作。',url:'https://www.nature.com/articles/s41586-024-08087-4'},
{id:'M01',module:'方法规范',priority:5,title:'TARGET Statement: Transparent Reporting of Observational Studies Emulating a Target Trial',authors:'TARGET Working Group',journal:'JAMA',year:2025,methods:['Reporting guideline','Target trial emulation','Transparency'],question:'Target Trial Emulation研究应该怎样透明、完整地报告设计、因果目标和数据映射？',data:'报告规范',design:'共识/报告指南',sample:'不适用',flow:'报告target trial protocol\n→ estimand\n→ observational emulation\n→ assumptions\n→ analysis\n→ sensitivity analysis\n→ interpretation',result:'为TTE研究提供标准化报告框架，减少设计信息缺失和“只报模型不报目标试验”的问题。',innovation:'把目标试验协议与观察数据模拟之间的映射要求显式纳入报告规范。',limitations:'规范提高透明度但不能替代良好设计和正确因果假设。',reuse:'以后凡是做TTE，都可以直接作为Methods和Supplement的检查清单。',url:'https://jamanetwork.com/journals/jama/fullarticle/2837724'},
{id:'M02',module:'方法规范',priority:5,title:'TRIPOD+AI: updated guidance for reporting clinical prediction models that use regression or machine learning methods',authors:'TRIPOD+AI Group',journal:'BMJ',year:2024,methods:['Prediction model','Reporting guideline','Machine learning'],question:'预测模型研究如何规范报告数据、建模、验证和性能，覆盖传统回归与机器学习？',data:'报告规范',design:'国际共识指南',sample:'不适用',flow:'明确数据来源\n→ predictors/outcome\n→ missing data\n→ model development\n→ validation\n→ calibration/discrimination\n→ clinical use',result:'TRIPOD+AI更新了预测模型研究的透明报告要求，并覆盖机器学习场景。',innovation:'将传统统计模型和AI/ML统一纳入预测研究报告框架。',limitations:'合规报告并不保证模型低偏倚或有临床价值。',reuse:'做癌症风险预测、预后模型或ML时可以逐条核对。',url:'https://www.bmj.com/content/385/bmj-2023-078378'},
{id:'M03',module:'方法规范',priority:5,title:'PROBAST+AI: risk of bias and applicability assessment for prediction models',authors:'PROBAST+AI Group',journal:'BMJ',year:2025,methods:['Risk of bias','Prediction model appraisal','AI'],question:'怎样系统判断癌症预测/AI研究有没有偏倚，以及是否适用于目标临床场景？',data:'偏倚评价工具',design:'国际共识工具',sample:'不适用',flow:'participants/data\n→ predictors\n→ outcome\n→ analysis\n→ risk of bias\n→ applicability',result:'提供了适用于统计和AI预测模型的结构化偏倚与适用性评估工具。',innovation:'更新传统PROBAST以覆盖AI方法与现代预测建模实践。',limitations:'需要评价者掌握预测模型方法学，部分判断仍有主观性。',reuse:'以后读任何肿瘤预测模型都建议用它做“批判性阅读”。',url:'https://www.bmj.com/content/388/bmj-2024-082505'}
];
const METHOD_MAP=[
['治疗A vs B哪个更好？','Target Trial / IPTW / MSM'],['诊断→复发→转移→死亡？','Multi-state model'],['其他原因死亡会干扰结局？','Competing risk / Fine–Gray'],['标志物不断变化怎么预测？','Joint / Landmark'],['谁真正从治疗中获益？','Causal ML / HTE'],['试验能否边做边调整？','Bayesian adaptive trial'],['谁应该更早筛查？','Risk prediction / PRS'],['AI能否真正用于临床？','External validation / implementation'],['病理+组学+临床如何融合？','Foundation model / multimodal']
];
const LEARNING_PATH=['Target Trial','Competing Risk','Multi-state Model','Joint / Landmark','Risk Prediction','Causal ML','Bayesian Trial','Foundation Model'];

// 深度方法学学习卡。未单独配置的论文会回退到模块级说明，便于后续持续扩充。
const MODULE_DEEP_DIVE={
'因果推断与真实世界研究':{
why:'这类研究的核心不是“把协变量放进回归模型”这么简单，而是先明确一个可回答的因果问题，再让观察性数据尽可能模拟随机试验。重点检查 time zero、治疗策略、随访起点、结局定义和混杂控制是否彼此一致。',
estimand:'优先明确 ATE / ATT / per-protocol effect / intention-to-treat–like effect，以及分析针对的目标人群。',
variables:['治疗/暴露策略及起始时间','结局（OS、PFS、复发等）及评估时间','基线混杂因素','时间变化混杂与后续治疗','删失、失访及依从性信息'],
assumptions:['Consistency：观察到的治疗策略与定义的干预一致','Exchangeability：给定已测协变量后治疗分配近似可交换','Positivity：各协变量组合下均有接受不同治疗的可能','Correct time alignment：eligibility、treatment assignment 与 follow-up 起点一致','模型/权重模型设定基本正确'],
diagnostics:['检查倾向评分或权重分布及极端权重','比较加权/匹配前后的协变量平衡（如 SMD）','绘制 weighted KM / cumulative incidence','做权重截断、不同模型设定、negative control 或定量偏倚分析等敏感性分析'],
replication:['R：survival、WeightIt、cobalt、survey、ipw、riskRegression','先画 DAG 或列出最小充分混杂集','先写 target trial protocol，再写统计代码','报告未调整与调整后的绝对风险/风险差，而不只给 HR'],
reading:'读文章时优先看研究设计图、time zero、eligibility、治疗策略、estimand 和敏感性分析，而不是先看回归表。'
},
'生存分析与疾病轨迹':{
why:'肿瘤结局通常具有时间维度，而且可能同时存在复发、转移、第二原发癌、非癌死亡等多个事件。高级生存方法的价值在于保留这些“何时发生”和“发生哪种事件”的信息。',
estimand:'常见目标包括 cause-specific hazard、subdistribution hazard、state occupation probability、transition probability、动态生存概率和个体绝对风险。',
variables:['起始时间与随访时间','事件类型及状态转换时间','删失时间','基线预后因素','重复测量生物标志物/影像指标','治疗变化与并发事件'],
assumptions:['独立或条件独立删失','比例风险假设（若使用 Cox/Fine–Gray）','多状态模型的 Markov 或 semi-Markov 假设','纵向指标测量误差及缺失机制可合理建模','事件定义与时间记录准确'],
diagnostics:['检查 PH 假设和 Schoenfeld 残差','比较 cause-specific 与 cumulative incidence 视角','多状态模型中检查转移频数与稀疏性','动态预测用 time-dependent AUC、Brier score、calibration','做 bootstrap / temporal / external validation'],
replication:['R：survival、cmprsk、riskRegression、mstate、flexsurv、JMbayes2、landmark','先画状态转移图，再决定模型','优先报告绝对风险或状态概率，避免只给 HR','明确 competing event 是否被正确处理'],
reading:'重点看事件定义、风险集如何构造、竞争事件如何处理、状态转移是否允许，以及模型输出能否回答临床问题。'
},
'Bayesian与自适应试验':{
why:'Bayesian/自适应设计把“边试验、边学习”写进预先规定的统计规则中，可在多个治疗臂、稀有分子亚型或快速变化的治疗环境中提高试验效率。',
estimand:'关注 posterior probability、response probability、arm superiority probability、predictive probability，以及触发停止/扩展/随机概率更新的阈值。',
variables:['治疗臂','主要疗效终点','安全性终点','分层/生物标志物','中期分析时间点','先验分布与历史信息'],
assumptions:['先验与似然模型适当','自适应规则在试验前充分模拟并锁定','中期分析数据及时且质量稳定','操作偏倚受到控制','多重决策下的错误率/决策性能经过模拟评估'],
diagnostics:['报告 operating characteristics：power、type I error、expected sample size','比较不同先验下 posterior 的敏感性','检查 randomization probability 演化','报告 arm dropping / stopping 的触发过程'],
replication:['R：rstan/brms、trialr、gsDesign、rpact；复杂平台试验常需自编模拟','先做大量 trial simulation 再确定规则','把统计设计和运行流程一起理解，不只看最终 P 值'],
reading:'重点看先验、决策阈值、中期分析频率、随机概率如何更新，以及模拟得到的 operating characteristics。'
},
'风险预测与精准筛查':{
why:'风险预测的目标不是找到“显著危险因素”，而是对未来个体风险进行可靠估计，并判断这些风险信息是否能改善筛查或临床决策。',
estimand:'个体在特定时间窗内的绝对风险；同时关注 discrimination、calibration、overall performance 和 net benefit。',
variables:['候选预测因子','明确时间窗口的结局','竞争事件（如适用）','训练/验证数据标识','模型输出概率','临床阈值或筛查策略'],
assumptions:['开发和验证数据代表目标人群','预测因子在预测时点可获得','缺失值处理不会引入严重偏倚','模型复杂度与样本量匹配','外部验证设计合理'],
diagnostics:['C-index / time-dependent AUC','calibration plot、calibration-in-the-large、slope','Brier score','Decision Curve Analysis','external / temporal / geographic validation'],
replication:['R：rms、riskRegression、pec、rmda/dcurves、glmnet、mlr3/tidymodels','遵循 TRIPOD+AI；用 PROBAST+AI 做偏倚检查','不要只报告 AUC，必须看校准与临床净获益'],
reading:'先判断文章究竟是“关联模型”还是“预测模型”；然后检查验证、校准和 DCA 是否完整。'
},
'因果机器学习':{
why:'普通机器学习预测“谁会发生结局”，因果机器学习更关注“同一个患者在不同治疗策略下结局会差多少”，因此适合精准治疗与治疗效应异质性研究。',
estimand:'ATE、CATE、ITE/individualized treatment effect；核心不是预测 Y，而是估计潜在结局之差。',
variables:['治疗变量','结局','治疗前混杂因素','效应修饰因素','训练/验证划分','必要时生存时间与删失'],
assumptions:['可交换性、positivity、consistency 等因果识别假设','训练数据有足够 treatment overlap','效应异质性模型不过拟合','用于估计 nuisance functions 的模型有足够性能'],
diagnostics:['propensity overlap','cross-fitting / sample splitting','policy value / calibration of treatment effects','不同 learners 的稳健性比较','亚组效应需要独立验证'],
replication:['R：grf、DoubleML、causalToolbox；Python：econml、causalml','先从 doubly robust / causal forest 入门','不要把普通 SHAP 亚组解释误当成因果治疗效应'],
reading:'重点区分 prediction heterogeneity 与 treatment effect heterogeneity，并检查作者是否真正解决了混杂与反事实识别问题。'
},
'数字病理与Foundation Model':{
why:'数字病理基础模型的核心价值在于通过大规模预训练得到可迁移表示，再在癌症检测、分型、分子预测、预后等任务上复用。方法学重点是数据切分、域外验证和任务泛化。',
estimand:'通常不是传统统计 estimand，而是分类/生存/检索性能及跨域泛化能力；预后任务仍应重视 calibration 和外部验证。',
variables:['WSI/patch','患者级标签','中心/扫描仪/染色批次','分子或临床标签','生存结局','外部数据集'],
assumptions:['训练-验证切分必须在患者级完成','外部测试集与训练数据无泄漏','标签质量足够','不同中心的 domain shift 被明确评估'],
diagnostics:['patient-level split','external/OOD benchmark','亚组与中心分层性能','置信区间而非只报单点 AUC','预后任务同时看 C-index、校准与生存曲线'],
replication:['先复现 frozen-feature + linear probe，再考虑全量微调','重点记录数据切分与预处理','评估多个中心/设备/癌种，而非只做内部随机划分'],
reading:'不要被模型参数量吸引，优先检查训练数据来源、数据泄漏、外部验证和临床任务设计。'
},
'多组学与精准肿瘤':{
why:'多组学的挑战不是“变量越多越好”，而是如何处理高维、批次效应、缺失模态和过拟合，并最终提炼具有可解释性与可验证性的标志物或风险模型。',
estimand:'根据问题可为预后风险、分类概率、分子亚型或治疗反应；强调增量预测价值和跨队列泛化。',
variables:['临床变量','基因组/转录组/蛋白组等多模态数据','批次/中心信息','结局','缺失模态标记'],
assumptions:['高维特征预处理合理','训练与验证完全分离','批次效应控制适当','特征选择嵌套在交叉验证内','样本量足以支撑模型复杂度'],
diagnostics:['nested cross-validation','external validation','ablation：逐模态比较增量价值','stability of selected features','calibration / clinical utility'],
replication:['R：MOFA2、mixOmics、glmnet；Python：scikit-learn、PyTorch','先建立 clinical-only baseline，再逐步加入 omics','所有特征选择必须在训练折内完成'],
reading:'重点看是否存在数据泄漏、是否真的证明多组学优于临床基线，以及结果是否在独立队列复现。'
},
'空间组学与肿瘤微环境':{
why:'空间组学在单细胞“是什么细胞”的基础上增加“在哪里、和谁相邻”，能够研究肿瘤克隆、免疫细胞和基质之间的空间组织规律。',
estimand:'常见目标包括空间富集、邻域关联、细胞共定位、空间差异表达、克隆空间扩张等。',
variables:['空间坐标','基因表达/蛋白表达','细胞类型','患者/切片标识','克隆或CNV状态','组织学区域'],
assumptions:['空间坐标准确','细胞类型注释可靠','多切片/多患者层级结构被考虑','空间自相关不被当作普通独立观测处理'],
diagnostics:['患者级而非细胞级推断','置换/空间随机化检验','跨切片重复','批次校正后保留真实空间结构'],
replication:['R：Seurat、spatstat、BayesSpace；Python：Scanpy、Squidpy','先做患者级描述，再做空间邻域推断','警惕把成千上万个细胞当作独立样本导致伪重复'],
reading:'优先检查统计单位到底是“细胞、区域还是患者”，以及作者是否正确处理伪重复与空间自相关。'
},
'方法规范':{
why:'方法规范不是统计模型，但它能告诉你一篇研究“最低应该交代什么”。用规范反向阅读论文，可以快速发现设计、分析和报告中的缺口。',
estimand:'不适用；重点是报告透明度、偏倚风险与适用性。',
variables:['研究对象/数据来源','预测因子或治疗定义','结局','分析流程','验证与敏感性分析','可重复性信息'],
assumptions:['规范本身不能保证研究正确','评价时需结合具体临床问题和统计设计'],
diagnostics:['逐条 checklist 核对','把缺失项记录为阅读笔记','和原文 Supplement / protocol 交叉核对'],
replication:['把对应指南作为写作清单','在研究设计阶段就使用，而不是投稿前才补','报告指南与偏倚评估工具配套使用'],
reading:'把指南条目直接映射到 Methods 和 Supplement，可以显著提高批判性阅读效率。'
}
};

const DEEP_DIVE={
A01:{
why:'Target Trial Emulation（TTE）最适合回答“如果这些真实世界患者当时被随机分配到治疗 A 或 B，会发生什么？”这类问题。它首先解决观察性研究里常见的 immortal time bias、eligibility 与 treatment start 不同步等设计性偏倚，再谈模型。',
estimand:'根据临床问题可定义 intention-to-treat–like effect 或 per-protocol effect；常见输出为一定时间点的生存概率、风险差/风险比以及 HR。',
variables:['明确的 eligibility 日期','治疗策略及 grace period','OS/PFS/复发等结局','基线混杂因素','治疗变化、依从性和删失','可能影响后续治疗和结局的时间变化因素'],
assumptions:['time zero 同时满足入组、治疗分配和随访开始','没有重要未测混杂或其影响可通过敏感性分析界定','治疗策略在数据中可被准确识别','每类患者都有接受比较治疗的现实可能'],
diagnostics:['制作 target trial protocol 表：Eligibility / Strategies / Assignment / Follow-up / Outcome / Causal contrast / Analysis','检查 treatment overlap 和极端权重','用 SMD 展示平衡','比较不同 grace period、权重截断、结局定义'],
replication:['先写一页 target trial protocol 再打开 R','基线 IPTW 可用 WeightIt+cobalt；时间变化策略可进一步用 cloning-censoring-weighting','同时报告 1/3/5 年绝对风险和风险差，使结果更有临床意义'],
reading:'这篇最值得逐句看的不是公式，而是作者如何把临床问题翻译成 target trial protocol。以后写自己的真实世界课题时，可以直接照这个顺序搭 Methods。',
extensions:'可进一步扩展到序贯治疗、治疗启动时机、动态治疗策略，以及与 g-formula / MSM / clone-censor-weight 等方法结合。'
},
A02:{
why:'这篇把“RCT内部效度”和“真实世界外部效度”连接起来：不是简单问真实世界复制不复制 RCT，而是问不同预后风险患者的治疗效应是否一致。',
estimand:'trial-specific treatment effect 以及按机器学习预后风险分层后的治疗效应；重点关注 generalizability 与 effect heterogeneity。',
variables:['RCT eligibility 可映射变量','真实世界治疗方案','生存结局','高维基线临床特征','机器学习预后风险评分','用于 IPTW 的混杂因素'],
assumptions:['真实世界中治疗组可比','RCT关键入排标准能被EHR准确模拟','预后模型只使用治疗前信息','各风险层中仍有足够 treatment overlap'],
diagnostics:['对每个被模拟RCT单独检查人群构成和治疗平衡','比较 RCT 与 RWD 的基线风险','按风险层报告 treatment effect 与置信区间','检查风险分层方法变化后结论是否稳定'],
replication:['适合用医院EHR或区域肿瘤数据库复现“某经典RCT在本地人群是否可推广”','第一步先选一个治疗对照明确、时间窗口清楚的III期RCT','第二步做 eligibility mapping 表，再做 prognostic model 和 TTE'],
reading:'重点理解 ML 在这里不是为了炫技预测，而是为了刻画患者基线预后风险，并进一步研究 trial generalizability。',
extensions:'可进一步用 causal forest / meta-learner 直接估计 CATE，再与传统风险分层结果比较。'
},
B01:{
why:'如果一个患者可能经历“无复发→局部复发→远处转移→死亡”，把每个终点拆成互不相关的 Cox 会丢失路径信息。多状态模型把疾病过程作为一个相互连接的转移系统。',
estimand:'transition-specific hazard、transition probability、state occupation probability、expected length of stay/sojourn time。',
variables:['每个状态的进入时间','允许/不允许的转移','基线和转移特异协变量','终末事件与删失'],
assumptions:['Markov：下一步风险只依赖当前状态；或 semi-Markov：还依赖进入当前状态后经历的时间','各转移有足够事件数','删失机制合理'],
diagnostics:['先画状态图并统计每条箭头上的事件数','比较 Markov 与 semi-Markov 设定','检查是否存在几乎没有事件的转移','报告多个时间点的 state occupation probability'],
replication:['R：mstate 最适合入门；flexsurv 可做更灵活参数模型','从 illness-death 三状态模型开始，不要一开始定义十几个状态','输出状态概率图通常比一长串 HR 更容易解释'],
reading:'读任何多状态论文，第一件事都应是看“状态图”。如果状态定义和临床问题不清楚，后面的模型再复杂也没有意义。',
extensions:'可加入 recurrent events、frailty、非Markov转移、个体动态预测，或与医疗费用/生活质量形成多状态经济学模型。'
},
B03:{
why:'单次 baseline PSA 只能给一次预测；Joint/Landmark 的价值是患者每次复查 PSA 后都能更新风险。Joint model 同时建模“PSA轨迹”和“生存结局”，Landmark 则在一系列时间点重复构建预测。',
estimand:'给定患者截至 landmark time 的纵向历史后，未来 Δt 时间内进展/死亡的条件概率。',
variables:['重复 PSA 测量时间与数值','生存/进展时间','删失','治疗及基线特征','landmark time 和 prediction horizon'],
assumptions:['Joint model：纵向与生存子模型通过随机效应等结构正确关联','Landmark：在每个 landmark 时点幸存者形成新的风险集','重复测量误差与缺失机制可被合理处理'],
diagnostics:['比较只用最新值、斜率、完整轨迹的模型','time-dependent AUC','prediction error / Brier score','动态校准','不同 landmark / horizon 的性能稳定性'],
replication:['R：JMbayes2 可做 joint model；landmarking 可基于 survival/riskRegression 自建','可直接换成 CEA、AFP、CA19-9、ctDNA、肿瘤体积或炎症指标','建议同时画个体纵向轨迹和动态风险曲线'],
reading:'重点观察作者如何定义“历史生物标志物信息”，以及性能提升是否来自真正的纵向信息，而不是只增加更多变量。',
extensions:'进一步可做 joint model + competing risks、多纵向 biomarker、多状态 joint model，以及动态治疗决策。'
},
B04:{
why:'第二原发肺癌研究中，患者可能在发生第二原发癌前先死亡。把死亡简单当作普通删失会高估累积风险，因此必须明确 competing risk。',
estimand:'第二原发肺癌的 cumulative incidence / absolute risk；cause-specific hazard 与 subdistribution hazard 回答不同问题。',
variables:['第二原发肺癌发生时间','竞争死亡时间','删失时间','基线危险因素','外部验证队列标识'],
assumptions:['事件分类正确','Fine–Gray 与 cause-specific Cox 的解释对象被区分','验证队列结局定义与开发队列尽可能一致'],
diagnostics:['画 cumulative incidence function 而非只画 KM','比较 cause-specific 与 Fine–Gray 结果','time-dependent AUC、Brier score','calibration + DCA + external validation'],
replication:['R：cmprsk / riskRegression','如果目标是病因机制，优先理解 cause-specific hazard；如果目标是预测绝对风险，累积发生概率更关键','DCA 用来判断模型是否值得影响筛查决策'],
reading:'这篇适合当“高质量临床预测模型模板”来拆：从 competing risk 到 external validation 再到 DCA，链条很完整。',
extensions:'可用于第二原发癌、癌症特异死亡、复发与非癌死亡、器官移植后肿瘤等场景。'
},
C01:{
why:'5个治疗组若固定随机直到结束，会把很多患者分配到表现较差的方案。Bayesian adaptive design允许随着数据累积更新各治疗组的后验疗效概率，并按预先规则调整随机概率。',
estimand:'各治疗臂相对优效的 posterior probability，以及达到预设成功/无效阈值的概率。',
variables:['治疗臂','主要反应/生存终点','中期分析时间','先验参数','安全性指标'],
assumptions:['自适应规则预先定义','先验选择合理并做敏感性分析','中期数据可及时获得','后验更新模型与结局分布匹配'],
diagnostics:['试验前模拟 type I error / power / sample size','画每次中期分析后各 arm 分配概率','比较不同先验','记录是否触发 futility / superiority stopping'],
replication:['学习这类论文时最好自己做一个简化版 trial simulation','先模拟固定随机，再加入 response-adaptive randomization，看样本分配如何变化','不建议直接从复杂平台试验代码开始'],
reading:'不要只看“Bayesian”三个字，真正要看的是 decision rule：什么时候更新、阈值是什么、达到阈值后会发生什么。',
extensions:'可延伸到 seamless phase II/III、basket/umbrella/platform trial，以及 biomarker-adaptive randomization。'
},
D01:{
why:'PRS文章真正有价值的地方不是“遗传变量显著”，而是把遗传风险转成绝对风险和筛查起始年龄，从 prediction 走到 decision。',
estimand:'某年龄前/未来时间窗乳腺癌绝对风险，以及达到预设筛查风险阈值的年龄。',
variables:['PRS','家族史','高外显率致病变异','年龄','癌症事件','竞争死亡（如模型考虑）'],
assumptions:['PRS在目标人群具有可迁移性','遗传风险与基线发生率结合方式正确','筛查阈值具有临床/公共卫生意义'],
diagnostics:['不同遗传风险组的绝对风险曲线','calibration','不同阈值下筛查人群比例','跨祖源/外部人群验证'],
replication:['如果没有基因数据，也可以用临床风险评分完成“风险阈值→筛查策略”框架','关键是将预测结果映射为可执行决策，而非停留在 OR/HR','以后可结合成本效果分析'],
reading:'重点关注“模型输出如何变成筛查建议”。这是预测模型从统计结果走向公共卫生策略的关键一步。',
extensions:'可迁移到肺癌低剂量CT筛查、肝癌高危人群监测、结直肠癌个体化起始年龄。'
},
E01:{
why:'传统 ML 可告诉你谁预后差，却不能自动告诉你“给这个人治疗A会不会比B更好”。Causal ML的目标是估计反事实差异，因此与精准治疗天然契合。',
estimand:'CATE(x)=E[Y(1)-Y(0)|X=x]；人群平均后可得到 ATE，个体/亚组层面用于治疗选择。',
variables:['治疗 A/B','结局','所有重要治疗前混杂因素','候选效应修饰因素','训练/验证分割'],
assumptions:['无未测混杂','positivity','consistency','nuisance models（propensity/outcome）至少部分正确','效应异质性不是数据挖掘产物'],
diagnostics:['propensity overlap','honest/cross-fitted estimation','CATE calibration / RATE / policy value','亚组效应的外部或独立验证','和传统 interaction model 比较'],
replication:['先用模拟数据理解 ATE 与 CATE','R：grf；Python：EconML','先做 doubly robust learner / causal forest，再考虑更复杂深度模型','用 policy value 检查“按模型选治疗”是否真的提升结局'],
reading:'看到“AI发现某亚组获益更多”时，要检查它究竟是预测分层还是因果 CATE。没有治疗对照和识别假设，通常不能称为个体化治疗效应。',
extensions:'可与 survival analysis 结合做 survival causal forest，也可用于 dynamic treatment regime / individualized treatment rule。'
},
F01:{
why:'CHIEF的重点不是单一癌种AUC，而是通过大规模病理预训练形成可复用的通用表示，再跨癌种、跨任务评估诊断和预后能力。',
estimand:'不同下游任务的预测性能与跨数据集泛化；生存任务关注风险排序和外部验证。',
variables:['WSI','patch/slide representation','癌症/分子标签','患者结局','中心来源','外部验证数据集'],
assumptions:['患者级切分防止泄漏','预训练数据和测试数据无重叠','不同中心/扫描仪差异被考虑','下游标签定义一致'],
diagnostics:['内部 vs 外部数据性能差异','不同癌种/中心/人群亚组','linear probe vs fine-tune','生存任务同时评估 C-index 与校准'],
replication:['如果没有GPU集群，不必复现预训练；可使用公开/预训练 embedding 做下游生存或分类','先学“数据切分+external validation+benchmark”，比从Transformer结构入手更适合统计背景'],
reading:'重点检查数据规模之后的“验证设计”。顶刊病理AI真正难的是泛化，而不是内部AUC做到0.99。',
extensions:'可和基因组、EHR、文本报告形成 multimodal model，也可研究 domain adaptation、公平性和罕见癌 few-shot learning。'
},
M02:{
why:'TRIPOD+AI可以直接作为你以后做肿瘤预测模型的写作目录。它提醒研究者清楚报告数据来源、样本量、缺失值、模型开发、验证、性能和可用性。',
estimand:'不适用；它规范的是“预测模型研究需要被透明报告的内容”。',
variables:['适用于回归和机器学习预测模型的所有核心报告元素'],
assumptions:['遵循 TRIPOD+AI 不等于模型没有偏倚；应与 PROBAST+AI 配套使用'],
diagnostics:['读预测论文时可把每个条目打勾/打叉','特别关注是否有外部验证、校准、模型完整表达和数据可获得性'],
replication:['以后写 Methods 之前先建立 TRIPOD+AI checklist','把 checklist 放到项目 README 或研究方案里持续更新'],
reading:'如果一篇AI预测论文只有AUC、没有校准/验证/阈值/完整模型信息，通常距离临床可用还有很远。',
extensions:'可与 DECIDE-AI / CONSORT-AI 等临床实施规范联合使用。'
}
};

function getDeepDive(p){return {...(MODULE_DEEP_DIVE[p.module]||{}),...(DEEP_DIVE[p.id]||{})};}
