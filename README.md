# Setup a Kintone Customization Project with Webpack

Original Source (in Japanese):  
[webpackを利用するkintoneカスタマイズ開発の流れ - Qiita](https://qiita.com/yamaryu0508/items/1abbef9a50e1e7fc3d2f)

## Steps
1. `mkdir new-project; cd new-project` & `npm init -y`
2. Install webpack and webpack-cli.

   ```bash
   npm install --save-dev webpack webpack-cli
   npm install --save-dev babel-loader @babel/core @babel/preset-env
   npm install --save-dev core-js regenerator-runtime
   ```

3. Create `webpack.config.js`
4. Modify `package.json`
5. Insert customization into `./src/customize.js`
6. Run `npm run dev` to create a test version
7. Run `npm run build` to create a production version
8. Upload `./dist/customize.js` to Kintone App
   * For more details, refer to [Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html)
