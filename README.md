# Quarkmc

[English](README_en.md)

Quarkmc 是一个供我的世界基岩版使用的一个 websocker 服务器，你可以使用他和他的插件来创建服务器。Quarkmc 的插件大幅增加了他的可扩展性。

## 安装

```bash
$ git clone https://github.com/someone120/quark
$ npm install
```

## 使用

```bash
node main.js
```

## 插件

插件的位置会被储存在 database.db，若不是在必要的情况下请勿删改。

### 安装插件

#### Windows

1.将插件移动到项目文件夹 2.按 Shift+右键，选择在此处打开 Power Shell 3.执行 node plugin.js install 插件的名称

#### linux

```bash
cp 插件 quarkmc
node plugin.js install 插件的位置
```

### 编写插件

插件中有两个重要的的函数，分别是 `getAllComm` 和 `getForChat` 。getAllComm 是用于获取插件中支持的所有的命令，而 getForChat 会在命令被调用的时候调用。

#### getAllComm

返回支持的命令。

给定的变量：无
返回的结果：["命令 1","命令 2","命令 3"，...]

#### getForComm

会在命令被调用的时候调用。

给定的变量：调用时的文本
返回的结果：执行的命令

什么？你想要一次执行多条命令？那就等我的下次更新吧。
