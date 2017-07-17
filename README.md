# tpinstantwebpack

## 2.Webpack Fundamentals

### 2.2 Using Loaders
```
npm install --save-dev node-sass sass-loader css-loader style-loader file-loader
```


```
npm install --save-dev extract-text-webpack-plugin
```


### 2.4 plugins
dont not use extract-text-webpack-plugin version 3 and webpack version2. It will cause an error.
```
npm install extract-text-webpack-plugin@2.0.0 --save-dev
```

## 3
### 3.1
```
npm install --save-dev uglify-js@github:mishoo/UglifyJS2#harmony
```

```
npm install --save-dev webpack-merge
```


### 3.2
```
npm install --save-dev html-webpack-plugin html-loader
```

### 3.3
```
npm install --save-dev chunk-manifest-webpack-plugin
```

### 3.4
```
npm install --save-dev clean-webpack-plugin eslint-loader eslint
```
Need to install eslint!

### 3.5
```
npm install --save-dev webpack-dev-server
```
in webpack.config.dev.js, webpack-dev-server needs absolute path. change
```
path: 'dist'
```
to
```
path: __dirname+'dist'
```