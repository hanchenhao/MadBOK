(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{429:function(v,_,t){"use strict";t.r(_);var s=t(54),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"机器学习建模流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#机器学习建模流程"}},[v._v("#")]),v._v(" 机器学习建模流程")]),v._v(" "),t("p",[v._v("在开始机器学习建模之前，我们要明确要解决什么问题，我们是要对某一个值进行预测，还是对某一些样本做一些分类，抑或是对某些异常值进行分析。机器学习要根据基本策略，来收集数据，只有当我们明确策略，并获取到了原始数据后，才能进行数据建模。机"),t("strong",[v._v("器学习的建模流程通常包括以下步骤")]),v._v("：")]),v._v(" "),t("ol",[t("li",[v._v("数据采集和预处理：首先需要收集和清洗数据。数据预处理包括数据清洗、去除噪声、填充缺失值、特征选择和特征转换等。")]),v._v(" "),t("li",[v._v("特征工程：在数据预处理之后，需要对数据进行特征工程，即将原始数据转换成机器学习算法可以处理的形式。特征工程通常包括特征提取、特征转换和特征选择等。")]),v._v(" "),t("li",[v._v("模型选择和训练：选择合适的机器学习算法，并使用训练数据对模型进行训练。训练过程中需要选择合适的模型超参数，并使用交叉验证等技术来评估模型性能。")]),v._v(" "),t("li",[v._v("模型评估和调优：使用测试数据对模型进行评估，并根据评估结果调整模型。通常需要进行模型选择、参数调优和集成学习等。")]),v._v(" "),t("li",[v._v("模型部署和监控：将训练好的模型部署到生产环境中，并对模型进行监控和优化，以保证模型的性能和稳定性。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2023/06/24/e8d7115d17e82206.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"原始数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始数据"}},[v._v("#")]),v._v(" 原始数据")]),v._v(" "),t("p",[v._v("在机器学习中，被观察的每一个对象被称为样本，每一个样本所包含的与机器学习有关的特定信息叫作变量，数据集是由多个样本组成的集合，其通常会被划分为训练集和测试集，数据集划分的比例可以是70/30、75/25和80/20。")]),v._v(" "),t("p",[v._v("如下图所示，小狗就是一个样本，它的颜色和状态就是样本中的变量，一组小狗的图片就是一个数据集，通常我们会将这个数据集分成训练集和测试集，训练集用来构建训练模型，测试集用来评估模型效果。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2023/06/24/9a99642ee6703db3.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"数据预处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据预处理"}},[v._v("#")]),v._v(" 数据预处理")]),v._v(" "),t("p",[v._v("数据预处理是指删除、修改、增加、纠正数据集中不适合模型学习的过程，其中包括数据类型转换和数据质量提升。数据质量转换主要是指图像数据转换，文本数据转换，时间序列数据转换，离散数据转换和连续数据转换等等。数据质量提升可以通过降噪处理，缺失值处理，异常值处理去量纲等方式，对原始数据进行改造。")]),v._v(" "),t("p",[v._v("数据预处理经常会处理各种变量，变量可以分为数值型变量和分类型变量，数值型变量包含连续型数值和离散型数值，分类型变量分为顺序型和类别型变量。变量类型转换可以由连续型-离散型-顺序型-类别型依次转换。将原始数据离散化，可以更加易于理解和使用。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2023/06/24/ef976ed29552d5b0.png",alt:""}})]),v._v(" "),t("p",[v._v("也可以利用数据标准化来做数据处理，在机器学习中，数据标准化是一种重要的数据预处理技术，可以将不同的特征值缩放到相同的范围内，以便更好地进行模型训练和预测。下面是一些常见的数据标准化方法：")]),v._v(" "),t("ol",[t("li",[v._v("Z-score标准化：将数据转换为均值为0，标准差为1的标准正态分布。")]),v._v(" "),t("li",[v._v("Min-Max标准化：将数据缩放到0到1的范围内。")]),v._v(" "),t("li",[v._v("Decimal Scaling标准化：将数据除以一个适当的因子，使得所有数的绝对值都小于1。")]),v._v(" "),t("li",[v._v("Logarithmic Scaling标准化：将数据取对数，使得数据的分布更加平滑。")]),v._v(" "),t("li",[v._v("Box-Cox变换：将数据进行一定的幂次变换，使得数据更加符合正态分布。")])]),v._v(" "),t("p",[v._v("在实际应用中，选择哪种标准化方法要根据数据的分布情况和具体的模型需求来决定。通常情况下，Z-score标准化是最常用的一种方法，因为它适用于大多数数据分布，并且不会改变数据的分布形态。")]),v._v(" "),t("p",[v._v("由于客观条件限制或者收集成本过大，很多数据在采集阶段是缺失的，缺失值会降低机器学习模型的稳定性，所以在预处理阶段，缺失值的数据也需要特别处理。在机器学习中，缺失值是指数据集中某些特征的值缺失或未记录。由于缺失值会影响模型的准确性，因此需要对其进行处理。"),t("strong",[v._v("常见的处理缺失值的方法包括")]),v._v("：")]),v._v(" "),t("p",[v._v("1.删除缺失值：可以直接将缺失值所在的行或列从数据集中删除。但是，这种方法可能会导致数据集的大小减小，从而影响模型的准确性。\n2.替换缺失值：可以将缺失值替换为数据集中的其他值，例如平均值、中位数或众数。但是，这种方法可能会导致数据集的分布发生变化，从而影响模型的准确性。\n3.插值法：可以使用插值法来估计缺失值。常见的插值方法包括线性插值、多项式插值和样条插值等。")]),v._v(" "),t("h2",{attrs:{id:"特征工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特征工程"}},[v._v("#")]),v._v(" 特征工程")]),v._v(" "),t("p",[v._v("数据和特征体现了机器学习的上限，而模型和算法只是为了无限逼近这种上限。特征工程是指利用专业知识和处理技巧，将原始数据转化为可以更具代表性的特征，简单来说特征工程就是将原始数据转化成模型的输入，以降低运算成本并获得更好的模型表现，其主要内容包含提取特征和创造特征。")]),v._v(" "),t("p",[v._v("提取特征指的是从原始数据中提取出有用的特征。常见的特征提取方法包括：")]),v._v(" "),t("p",[v._v("1.特征选择：选择与目标变量相关性较高的特征，可以减少特征空间的维度，提高模型的准确性。\n2.特征变换：对原始数据进行变换，例如对数据进行归一化、标准化、离散化等，可以使数据更易于处理和比较。")]),v._v(" "),t("p",[v._v("创造特征指的是根据原始数据创造新的特征。常见的特征生成方法包括：")]),v._v(" "),t("p",[v._v("1.数值计算：根据原始数据进行数值计算，例如计算两个特征的比值、差值等。\n2.特征组合：将多个特征组合起来形成新的特征，例如将身高和体重组合成BMI指数。\n3.特征交叉：将不同特征进行交叉，例如将性别和职业进行交叉，形成新的特征。")])])}),[],!1,null,null,null);_.default=a.exports}}]);