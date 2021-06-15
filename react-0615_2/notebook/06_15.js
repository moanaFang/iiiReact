/*
上課教材:  https://github.com/eyesofkids/mfee14-react/
issues發問: https://github.com/eyesofkids/mfee14-react/issues/1
gist: https://gist.github.com/
teamviewer: https://www.teamviewer.com/tw/?force-country=tw&utm_source=google&utm_medium=cpc&utm_campaign=tw|b|pr|20|jun|exact-brand-only-sn|free|t0|0&utm_content=exact_Brand-only&utm_term=teamviewer&gclid=CjwKCAjw_JuGBhBkEiwA1xmbRdAAWii7-x9b2XcBH5fTx_fjrFePcECI-cQnORX6WulsxzMaX5WmBBoC4aoQAvD_BwE
https://gist.github.com/eyesofkids/ba7ec60cd828f626e5706b9c08024d82
https://github.com/eyesofkids/mfee14-react/blob/main/%E6%95%99%E6%9D%90/0615/ES6%E8%A3%9C%E5%85%85/ES6%E7%AF%87-%E9%A1%9E%E5%88%A5class.pdf
https://github.com/eyesofkids/mfee14-react/blob/main/%E6%95%99%E6%9D%90/0615/%E6%8A%95%E5%BD%B1%E7%89%87/react%E4%BB%8B%E7%B4%B9.pdf
https://tw.appledaily.com/home/

問問題的方式:
  上傳自己的github
  github
    git
      連結
    issue，code和圖片
      teamviewer: 專案比較大，可以按裝teamviewer，遠端控制
      gist: 貼程式請人除錯，公開讓搜尋引擎收尋到，私有需要提供網址

react
  有沒有在用，用的多不多
  小公司看大公司有沒有在用
  Dom和事件處理
  容易組織、管理專案

facebook目前社群網站龍頭
每個功能對應到伺服器端

v單向資料流 (react有)
  屬性傳遞資料
  可做最佳化、容易除錯
  父母到子女元件
  子女到父母要間接(比較麻煩)
雙向資料流

元件(重複利用性)
v 函式型元件
    鉤子，擴充樣式
  類比型元件
    可以使用狀態、有生命週期概念

宣告式程式
  命令式，跟電腦講步驟，要一清二楚，傳統開發，ex:文字編輯程式，開檔案、幫忙釋放記憶體
  宣告式，函式庫和api，語法較簡單和口語化

babel編譯器，javascript編譯器，facebook有贊助它

以群主為單位，加老師的line

*/
/*
長期支援版本: https://nodejs.org/en/
套件管理: https://yarnpkg.com/
其他套件: https://github.com/eyesofkids/mfee14-react/tree/main/%E6%95%99%E6%9D%90/0615/React%E5%B0%88%E6%A1%88%E8%A8%AD%E5%AE%9A/CRA-eslint-prettier

指令
  版本: node
  跳出去: ctrl*2
  版本: npm
  yarn 套件全域安裝: npm i -g yarn
  建立專案: npx create-react-app react-0615
  安裝模組: yarn add eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks

套件:
  babel
  排版: prettier
  debugger chrome
  圖示工具: vs icon
  用顏色區隔兩層以上的符號: rainbow 圓括號還有圓括號、花括號還有花括號，用不同顏色標記
  window colors
  chinese

終端機位置: 
  左下角三角形

window 權限問題:
  cmd: 按右鍵以系統管理員執行
  vs code: 設定->功能->終端機(C:\WINDOWS\System32\cmd.exe)

在settings.json位置，貼預設值:
  ctrl+shift+p settings.json
  齒輪->設定->Estensions->JSON
  "editor.formatOnSave": true,
      "[javascript]": {
          "editor.formatOnSave": false
      },
      "prettier.disableLanguages": [
          "js"
      ], 
      "eslint.alwaysShowStatus": true,
      "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
      }

啟動專案，並開瀏覽器頁面:
  yarn start 專為react設計 
  npm start

index.html
  所有react專案在root節點操作
  render
   渲染
    虛擬DOM電真實DOM
*/
/*
解構賦值: https://github.com/eyesofkids/mfee14-react/blob/main/%E6%95%99%E6%9D%90/0615/ES6%E8%A3%9C%E5%85%85/ES6%E7%AF%87_Destructuring%20Assignment(%E8%A7%A3%E6%A7%8B%E8%B3%A6%E5%80%BC%20).pdf

14:02 錢沒錄到

https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeArggPgCgZSzzsEBLY8us7AQxgAsAnOAMwwCIWooABwBcAelEBzECAlIAdKGQ8CAcWmy42UY1r0Go6rr05DJYw2bsuvfkLGT18xcrUykWnWeNbT5kzS9zJlYObj4BEXEpNzgFECVVR01tIz0fAO9RfAIgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.6&externalPlugins=

*/
/*
jsx語法: html + js
鉤子外掛: 將資料送給另一方
有use模組外掛
都是小寫的字，模組套件
花括號，部分導入，只會傳某些東西
正列，獲得值
*/