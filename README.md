# JavaScriptLearning
##JavaScript DOM编程艺术学习
###第四章JavaScript图片库
1. onclick(this) return false让function停止
2.childNodes、nodeType、nodeValue、firstChile、lastChild。
###第五章最佳实践
1.平稳退化：确保页面在没有Javascript的情况下也能正常工作
2.渐进增强：将CSS分离出来，保存到css文件中只修改一次即可
3.分离Javascript：详见text.js
4.对象检测：把某个方法打包在一个if语句里，true存在，false不存在
5.压缩代码：减少文件大小，加载速度快，节省带宽，可用工具（JSMin,YUI compressor,Closure Compiler)
###第六章优化图片库
1.让javascript不再依赖于没有保证的假设
2、引用测试和检查使Javascript代码能够平稳化
###第七章动态创建标记
1、document.write:将字符串插入到文档中
2、innerHTML：添加内容，改变样式
3、createElement:创建元素节点
4、createTextNode:创建文本节点
（3、4创建出来的是孤儿）
5、appendChild:把文本节点插入到现有元素的子节点
6、insertBefore:在已有元素前插入一个新元素
（通过5.6将3.4创建出来的节点插入节点树）