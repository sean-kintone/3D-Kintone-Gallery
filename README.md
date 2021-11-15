# Setup a Kintone Customization Project with Webpack

## Steps
1. `mkdir new-project; cd new-project` & `npm init -y`
2. Install the dependencies

   ```bash
   npm install --save-dev webpack webpack-cli webpack-dev-server
   npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
   npm install --save-dev core-js regenerator-runtime
   npm install --save-dev react react-dom
   npm install --save-dev html-webpack-plugin
   npm install --save-dev style-loader css-loader
   ```

4. Create `webpack.config.js`
5. Modify `package.json`
6. Build the customization in the following files inside `./src/`
   * `index.html`
   * `index.js`
7. Run `npm run dev` to create a test version
8. Run `npm run build` to create a production version
9.  Upload `./dist/KintoneCustomization.js` to Kintone App
  * For more details, refer to [Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html)

## Install & Setup @kintone/customize-uploader

1. Create a Kintone App
   * YouTube: [How to Create a Kintone Database App](https://youtu.be/pRtfn-8cf_I)
2. Install with `npm install -g @kintone/customize-uploader`
3. Initiate with `kintone-customize-uploader init`
   * ? Input your App ID **1** *Your's may vary*
   * ? Select the scope of customization: **ALL**
4. Modify `dest/cutomize-manifest.json`
5. Input credentials with `kintone-customize-uploader import dest/customize-manifest.json`
   * ? Input your kintone's base URL (https://example.cybozu.com): {kintoneBaseUrl}
   * ? Input your username: {userLoginName}
   * ? Input your password: [input is hidden] {yourPassword}
6. 

## References
  * [Setup react with webpack and babel | by Prateek Srivastava | Age of Awareness | Medium](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9)
  * [webpackを利用するkintoneカスタマイズ開発の流れ - @yamaryu0508](https://qiita.com/yamaryu0508/items/1abbef9a50e1e7fc3d2f)
  * [Introduction to customize-uploader – Kintone Developer Program](https://developer.kintone.io/hc/en-us/articles/360017405154)
  * [js-sdk/packages/customize-uploader at master · kintone/js-sdk](https://github.com/kintone/js-sdk/tree/master/packages/customize-uploader)
