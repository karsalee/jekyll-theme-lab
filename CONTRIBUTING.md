# 如何贡献代码

## 开发协作流程

- 克隆项目到自己命名空间，拉取到本地。
- 创建新分支，比如从 `main` 分支到 `dev-1` 分支。
- 在新分支进行开发，开完完成后将代码提交和推送。
- 新建 Pull requests，等待代码自动测试和人工复核。
- 测试通过、人工复核无误，合并到相应分支。

可能会用到的相关 git 命令：

```bash
# 初始化 git 用户名和用户邮箱的基本配置（与 github 平台一致）
git config --global user.name "shublcc"
git config --global user.email "contact@dlcloud.info"

# 将远程代码克隆到本地
git clone git@github.com:shublcc/jekyll-theme-lab

# 新建分支
git branch dev-1

# 切换分支
git checkout dev-1

# 查看 git 状态
git status

# 添加所有文件到 git 跟踪
git add -A

# 只添加文件 _config.yml 到 git 跟踪
git add _config.yml

# 添加代码说明
git commit -m "代码说明，英文以大写字母开头，不超过 5 个词"

# 推送本地代码到远程代码库
git push origin main

# 将远程更新应用到本地
git pull origin main
```

## 本地开发环境配置

本项目所需环境：

- asdf 环境控制命令行工具
- NodeJS >= 17.6.0
- Ruby >= 3.1.0

### 安装 asdf

请参考 [asdf 快速入门](https://asdf-vm.com/zh-hans/guide/getting-started.html)。

### 安装 NodeJS

#### 使用 asdf 安装 NodeJS

请参考 [NodeJS 安装说明](https://github.com/asdf-vm/asdf-nodejs)。

#### 安装开发所需依赖

```bash
npm install
```

### 安装 Ruby

#### 使用 asdf 安装 Ruby

请参考 [Ruby 安装说明](https://github.com/asdf-vm/asdf-ruby)。

#### 安装所需依赖

```bash
gem install bundle
bundle install
```

### 编译运行

```bash
# 修改 css 样式文件或者 js 文件之前执行以下命令自动监听修改并编译
npm run dev

# 预览本地修改
npm run preview

# 在提交更改之前执行此命令格式化修改过的 Markdown 文件
npm run format
```

## 文章编辑规范

本项目所有文章均采用通用 Markdown 语法来进行编辑，支持 MathJax 公式编辑。所有配图均需使用自制的 webp 格式，并由 [vgy.me](https://vgy.me) 进行托管。

### Markdown 语法指南

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

普通段落文件（直接输入）

**加粗**
*斜体*
`段落内标签，通常在段落中引用命令时使用`
<u>下划线</u>
~~删除线 ~~
<sub>下标</sub>
<sup>上标</sup>

- 无序列表 
- 无序列表

1. 有序列表
2. 有序列表

| 表头 1 | 表头 2  | 表头 3 |
| :---: | :--- | ---: |
| 表内第一行 | 表内第一行 | 表内第一行  |
| 居中 | 左对齐 | 右对齐  |

> 引用

- [x] 任务一    （已完成状态）
- [ ] 任务二   （未完成状态）

[超链接显示内容](超链接地址)
![图片名](图片所在地址)

​```cpp
# 代码文件名，比如 leetcode0001.cpp

代码内容（文件名与内容之间留一行空白，内容最后不留空行）
# 代码内注释
​```

<!-- 注释内容，以下为公式 -->
$$
y=x^2  
$$
```

### 通用文章规范

- 英文或是数字与中文之间前后各有一个空格，超链接、段内标签等与中文之间也需如此；
- 英文为行首时，前面不留空格；
- 英文与英文标点符号一起时，前面标点符号后空一格开始英文单词；
- 英文与中文标点符号一起时，标点符号在英文或符号之前之后都无须空格；
- 在代码内容中，# 号与文字之间空一格，# 号与代码同行时距离不宜过长，如相邻几行都有注释对齐为佳；当代码注释内容超过一行时最好将注释放在代码的后一行，此时 # 号前不留空格；
- 在使用图片进行解释的时候，在对应段落附近加载图片，并使用“下图”、“上图”这样的字眼进行描述；
- 图片均使用 PPT 自行制作，使用 [Snipaste 截图工具](https://zh.snipaste.com/) 截图保存，并上传至 [vgy.me](https://vgy.me) 后加载使用。
- 编程语言、专用英文词汇使用时，根据其通用的写法来适当调整大小写，比如 Python 3 的第一个字母就需要大写，Java 的第一个字母也需要大写；
- 当括号内是英文字符，使用英文括号（半角），当括号内是中文字符时，使用中文括号（全角）。
