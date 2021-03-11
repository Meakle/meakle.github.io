(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{611:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("对于下面博客的整合形成我自己的知识库，提前声明文章并非原创，我只是一个缝合怪，用来形成自己的知识体系。")]),t._v(" "),a("p",[t._v("引用：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/yygmind/blog/issues/12",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解JavaScript 中的执行上下文和执行栈"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903741607378958",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底搞懂javascript-词法环境(Lexical Environments)"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("执行上下文是当前JavaScript代码被解析和执行的时候所处在的环境。")]),t._v(" "),a("h2",{attrs:{id:"执行上下文的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文的类型"}},[t._v("#")]),t._v(" 执行上下文的类型")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("全局执行上下文")])]),t._v(" "),a("p",[t._v("只有一个，浏览器中的全局对象是"),a("code",[t._v("window")]),t._v("对象，Node.js中的全局对象是"),a("code",[t._v("global")]),t._v("，其值为空（自己实验的结果，node version为15.7.0）")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("函数执行上下文")])]),t._v(" "),a("p",[t._v("存在无数个，只有函数被调用的时候才会被创建。每一个函数调用都会创建一个新的执行上下文。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Eval函数执行上下文")])]),t._v(" "),a("p",[t._v("运行在"),a("code",[t._v("eval")]),t._v("函数中的代码，没试过，基本不让用，因为会有很多问题。")])])]),t._v(" "),a("h2",{attrs:{id:"执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行栈"}},[t._v("#")]),t._v(" 执行栈")]),t._v(" "),a("p",[t._v("执行栈，也成为调用栈，用于储存在代码执行的过程中创建的所有执行上下文。")]),t._v(" "),a("p",[t._v("每一次发生函数调用的时候，Js都会穿件一个函数执行上下文，并且将它push到栈顶。当函数调用完毕之后，pop出调用栈中的上下文，从而产生新的（也就是原来"),a("code",[t._v("stack.top -1")]),t._v(" 位置）执行上下文。")]),t._v(" "),a("p",[t._v("换句话说，位于栈顶的上下文，就是当前环境的上下文。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始运行Js代码  -> 全局执行上下文 入栈")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发生函数调用    -> 函数执行上下文 入栈")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....                    ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数调用结束    -> 函数执行山下文 出栈")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Js代码运行完毕  -> 全局执行上下文 出栈")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inside first function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("second")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Again inside first function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("second")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inside second function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inside Global Execution Context'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inside first function")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inside second function")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Again inside first function")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inside Global Execution Context")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"image-20210307172906406.png",alt:"上述代码的执行上下文"}})]),t._v(" "),a("h2",{attrs:{id:"执行上下文的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文的创建"}},[t._v("#")]),t._v(" 执行上下文的创建")]),t._v(" "),a("ol",[a("li",[t._v("创建阶段")]),t._v(" "),a("li",[t._v("执行阶段")])]),t._v(" "),a("h3",{attrs:{id:"创建阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建阶段"}},[t._v("#")]),t._v(" 创建阶段")]),t._v(" "),a("ol",[a("li",[t._v("确定"),a("code",[t._v("this")]),t._v("值，被称之为"),a("code",[t._v("This Binding")])]),t._v(" "),a("li",[t._v("创建词法环境——"),a("strong",[t._v("LexicalEnvironment")])]),t._v(" "),a("li",[t._v("创建变量环境——"),a("strong",[t._v("VariableEnvironment")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ExecutionContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  ThisBinding "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确定this ")]),t._v("\n  LexicalEnvironment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n  VariableEnvironment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量环境")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"this-binding-确定this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-binding-确定this"}},[t._v("#")]),t._v(" This Binding（确定this）")]),t._v(" "),a("ul",[a("li",[t._v("全局执行上下文："),a("code",[t._v("this")]),t._v("指向全局对象。浏览器中指向"),a("code",[t._v("window")]),t._v("，"),a("code",[t._v("Node.js")]),t._v("中指向一个空对象")]),t._v(" "),a("li",[t._v("函数执行上下文：简单点说，"),a("code",[t._v("this")]),t._v("的值取决于是谁调用了该函数。具体的这里不分析")])]),t._v(" "),a("h4",{attrs:{id:"lexical-environment-词法环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lexical-environment-词法环境"}},[t._v("#")]),t._v(" Lexical Environment（词法环境）")]),t._v(" "),a("p",[t._v("我对于词法环境这个词属实是听得云里雾里，就和我第一次听到上下文这个名词一样....")]),t._v(" "),a("p",[a("strong",[t._v("Lexical Environments（词法环境）")]),t._v("，之所以叫词法环境，是因为它是和源程序的结构对应，就是和你所写的那些源码的文字的结构对应，你写代码的时候这个环境就定了。")]),t._v(" "),a("p",[a("strong",[t._v("词法环境有个两个==组成==部分")])]),t._v(" "),a("ol",[a("li",[t._v("环境记录：储存变量和函数声明的实际位置")]),t._v(" "),a("li",[t._v("对外部环境的引用（outter）：用以访问外部的词法环境")])]),t._v(" "),a("p",[a("strong",[t._v("词法环境有以下五种==类型==")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("全局环境")]),t._v("：通俗点讲就是源文件代码，就是一个词法环境")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("环境记录：拥有一个全局对象，以及其相关联的方法和属性以及用户自定义的全局变量")])]),t._v(" "),a("li",[a("p",[t._v("outter：全局环境没有外部的词法环境，或者说外部的词法环境引用为"),a("code",[t._v("null")]),t._v("。")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("函数环境")]),t._v("：一个函数块内自己是一个新的词法环境")]),t._v(" "),a("ul",[a("li",[t._v("环境记录：用户在函数中定义的变量，包含了"),a("code",[t._v("arguments")]),t._v("对象")]),t._v(" "),a("li",[t._v("otter：全局环境或者是包含了内部函数的外部函数环境。")])])]),t._v(" "),a("li",[a("p",[t._v("eval：进入eval调用的代码有时会创建一个新的词法环境")])]),t._v(" "),a("li",[a("p",[t._v("with结构：一个with结构块内也是自己一个词法环境")])]),t._v(" "),a("li",[a("p",[t._v("catch结构：一个catch结构快内也是自己一个词环境")])])]),t._v(" "),a("h4",{attrs:{id:"variableenvironment-变量环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variableenvironment-变量环境"}},[t._v("#")]),t._v(" VariableEnvironment（变量环境）")]),t._v(" "),a("p",[t._v("变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性。")]),t._v(" "),a("p",[t._v("在 ES6 中，"),a("strong",[t._v("词法")]),t._v(" 环境和 "),a("strong",[t._v("变量")]),t._v(" 环境的区别在于前者用于存储**函数声明和变量（ "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" ）"),a("strong",[t._v("绑定，而后者仅用于存储")]),t._v("变量（ "),a("code",[t._v("var")]),t._v(" ）**绑定。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("执行上下文如下所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("GlobalExectionContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  ThisBinding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  LexicalEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    EnvironmentRecord"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里，这里是uninitialized而不是undefined！！")]),t._v("\n      a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   \t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数声明是直接声明一整个，不只是声明函数名而已")]),t._v("\n      multiply"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" func "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    outer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  VariableEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    EnvironmentRecord"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    outer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nFunctionExectionContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   \n  ThisBinding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  LexicalEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    EnvironmentRecord"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      Arguments"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    outer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalLexicalEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  VariableEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    EnvironmentRecord"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      g"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    outer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalLexicalEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这上面的 "),a("code",[t._v("uninitialized")]),t._v(" 也解释了"),a("code",[t._v("let/const")]),t._v("暂时性死区以及"),a("code",[t._v("var")]),t._v("的变量提升。")]),t._v(" "),a("p",[t._v("在创建阶段，函数声明存储在环境中，而变量会被设置为 "),a("code",[t._v("undefined")]),t._v("（在 "),a("code",[t._v("var")]),t._v(" 的情况下）或保持未初始化（在 "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" 的情况下）。所以这就是为什么可以在声明之前访问 "),a("code",[t._v("var")]),t._v(" 定义的变量（尽管是 "),a("code",[t._v("undefined")]),t._v(" ），但如果在声明之前访问 "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" 定义的变量就会提示引用错误的原因。这就是所谓的变量提升。")]),t._v(" "),a("h3",{attrs:{id:"预编译阶段-提升阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预编译阶段-提升阶段"}},[t._v("#")]),t._v(" 预编译阶段（提升阶段）")]),t._v(" "),a("p",[t._v("JS是单线程的语言，执行顺序肯定是顺序执行，但是JS 引擎并不是一行一行地分析和执行程序，而是一段一段地分析执行，会先进行编译阶段然后才是执行阶段。")]),t._v(" "),a("h3",{attrs:{id:"执行阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行阶段"}},[t._v("#")]),t._v(" 执行阶段")]),t._v(" "),a("p",[t._v("该阶段完成所有变量的分配，最后执行代码。")]),t._v(" "),a("p",[t._v("如果 Javascript 引擎在源代码中声明的实际位置找不到 "),a("code",[t._v("let")]),t._v(" 变量的值，那么将为其分配 "),a("code",[t._v("undefined")]),t._v(" 值。")])])}),[],!1,null,null,null);s.default=e.exports}}]);