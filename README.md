### 在create-react-app脚手架基础上,集成react-router、redux、 less、 antd、utils等

```
+ public // 静态资源

+ src
  ++ components // 组件
  ++ pages      // 页面视图
  ++ router     // 路由
  ++ redux      // 状态管理
  ++ utils      // 工具函数
```

#### 一、集成less语法书写css
1、node-modules/react-scripts/config/webpack.config.dev.js内在css配置下添加
```
          // 支持less
          {
            test: /\.less$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              {
                loader: require.resolve('less-loader')
              }
            ],
          },
```
2、 在react-scripts文件下npm install less less-loader

#### 二、集成antd(ui组件库)

```
    按需引入
```

#### 三、集成react-router4.0+
```
1、默认app为最外层
2、添加404页面
修改 react-scripts 内 scripts内的 start.js
openBrowser(urls.localUrlForBrowser + '#/index'); // 修改打开地址
3、默认根/为404；主页/index
```

#### 四、集成redux状态管理(目录结构)

```
 + redux
  ++ Actions
  ++ Connect
  ++ Reduces
  ++ Store
```



###  master 分支基础架构

###  learn 分支基于master分支做的开发应用[数据来源boss直聘]