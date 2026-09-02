# 肿瘤研究方法学文献库

一个面向肿瘤研究与卫生统计学习的长期方法学文献库。

## 功能

- 按方法模块组织文献，而不是按癌种堆叠
- 支持关键词搜索、模块筛选、优先级筛选
- 支持未读 / 在读 / 已读、收藏、个人笔记
- 每篇文献有独立详情页
- 学习记录保存在浏览器 localStorage
- 支持学习记录导出 / 导入
- 文献内容集中维护在 `data.js`

## GitHub Pages 部署

1. 在 GitHub 新建一个仓库，例如：`tumor-methods-library`
2. 将本目录内全部文件上传到仓库根目录
3. 打开仓库 `Settings` → `Pages`
4. 在 `Build and deployment` 中选择 `Deploy from a branch`
5. Branch 选择 `main`，目录选择 `/ (root)`，点击 `Save`
6. 等待 GitHub Pages 发布完成后，即可通过固定网址访问

通常网址形式为：

`https://你的GitHub用户名.github.io/tumor-methods-library/`

## 日常更新文献

绝大多数情况下，只需要修改 `data.js`：

- 更新 `LIB_META.updated`
- 在 `PAPERS` 中新增一条文献对象
- 提交（Commit）到 GitHub

GitHub Pages 会自动重新发布，同一个网址刷新即可看到新内容。

## 文献数据字段

每篇文献建议保留：

- `id`
- `module`
- `priority`
- `title`
- `authors`
- `journal`
- `year`
- `methods`
- `question`
- `data`
- `design`
- `sample`
- `flow`
- `result`
- `innovation`
- `limitations`
- `reuse`
- `url`

## 学习记录说明

学习状态、收藏和笔记默认保存在当前浏览器中，不会随 GitHub 仓库同步。

换电脑或浏览器前，请在首页使用“导出学习数据”；在新设备上使用“导入学习数据”即可恢复。
