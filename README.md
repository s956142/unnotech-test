# unnotech-test

## Project setup

git clone https://github.com/s956142/unnotech-test.git

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

# build record
- git clone https://github.com/s956142/unnotech-test.git
- npm install bootstrap --save
- npm i --save jquery
- npm install --save popper.js
- npm i vue-router
- npm i axios

# 套件
- vue/cli :快速建置 webpack vue 專案，將大量的前端管理工具囊括在一起
- jquery: 輔助程式
- bootstrapt: 快速拉版
- axios:協助發 api 串接資料，簡化 promise 操作，避免 callback 地獄，可維護及美觀的程式碼

# 專案架構
- package.json: node 設定檔案，可看使用套件和使用指令
- .eslintrc:eslint 排版設定 coding style
- .gitignore: git 記錄設定黨
- babel.config.js: 設定不同版本 js 轉換語意，在此使用 vue/cli 設定
- public:不要編譯的獨立靜態檔案
- src: 需要編譯的所有檔案
- assets: 靜態資源黨(第三方套件) 或是自己的 css,js
- components:非頁面的 vue 組件
- paged:各自頁面的 vue 組建
- router:設定網址及導頁的檔案
- app.vue:預設導入第一個頁面，設定 vue 頁面，主要分為 header(books)和 body(page)
- main.js:程式進入點，設定 global 資料

# 開發
- 上面 bookList scroll 切版花較長時間
- 下方欄位輸入欄位 p 段落沒有值時會跑版：調整 line-height
