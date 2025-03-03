---
title: AVA 简介
order: 0
redirect_from:
  - /zh/docs/guide
---

<div align="center">
  <img width="200" height="120" src="http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/9LkQDJaV%24%24/logo.svg" alt="AVA logo">
</div>

<div align="center">

<i>智能可视分析框架</i>

</div>

----

<a href="https://ava.antv.vision"><img src="http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/ZIA50SVLax/vectorA.svg" align="left" hspace="10" vspace="6"></a>


**AVA** (A Visual Analytics) 是为了更简便的可视分析而生的技术框架。 其名称中的第一个 **A** 具有多重涵义：它说明了这是一个出自阿里巴巴集团（*Alibaba*）技术框架，其目标是成为一个自动化（*Automated*）、智能驱动（*AI driven*）、支持增强分析（*Augmented*）的可视分析解决方案。

<br />

## 演示案例

```html
<div id="mountNode"></div>
```

```js
import { autoChart } from '@antv/chart-advisor';

const container = document.getElementById('mountNode');

const data = [
  {field1: 'a', field2: '100'},
  {field1: 'b', field2: '300'},
  {field1: 'c', field2: '800'},
];

autoChart(container, data, {toolbar: true, development: true});
```

<br>

<div align="center">
  <img src="https://gw.alipayobjects.com/zos/antfincdn/QTJPYXJpjW/avademo.gif" width="100%" alt="AVA demo">
</div>

## 包

### [AVA/CKB](https://github.com/antvis/AVA/blob/master/packages/knowledge/zh-CN/README.zh-CN.md)

CKB 的意思是 Chart Knowledge Base，也就是图表知识库。这个包中包含了基于经验总结的关于可视化和图表的各种基本知识和观察。图表的推荐必须基于这些基本概念。

同时，这个包也让开发图表类型筛选相关的产品变得非常简单。

```sign
@antv/knowledge // 图表知识库
```

### [AVA/DataWizard](https://github.com/antvis/AVA/blob/master/packages/datawizard/zh-CN/README.zh-CN.md)

DataWizard 是一个 js/ts 的前端数据处理类库。在 AVA 的框架中，它被用来“理解”输入端的数据集。不过，它也可以独立地被用来开发一些数学统计、数据模拟之类的功能。

```sign
@antv/dw-analyzer // 数据集分析
@antv/dw-random // 数据模拟
```

### [AVA/ChartAdvisor](https://github.com/antvis/AVA/blob/master/packages/chart-advisor/zh-CN/README.zh-CN.md)

ChartAdvisor 是 AVA 的核心部分。它基于数据和分析需求来推荐图表类型和具体的图表细节设置。

```sign
@antv/chart-advisor // 图表推荐和自动生成
```

## 友情链接

<img src="https://gw.alipayobjects.com/zos/antfincdn/1yMwFkBvyV/chartcube-logo-cube.svg" width="18"> [ChartCube](https://chartcube.alipay.com/) - 基于 [G2Plot](https://github.com/antvis/G2Plot) 的在线图表制作工具，交互简单，一键导出图表代码！

<img src="https://gw.alipayobjects.com/zos/antfincdn/qxCT7b6aLE/LFooOLwmxGLsltmUjTAP.svg" width="18"> [Kitchen](https://kitchen.alipay.com/) - 为设计者提升工作效率的工具集。

<img src="https://ch-resources.oss-cn-shanghai.aliyuncs.com/images/kanaries-circular.png" width="18"> [Rath](https://github.com/Kanaries/Rath) - 支持洞察自动发现与交互式可视化(图表、报表)生成推荐的增强分析工具。
