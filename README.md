# Setup a Kintone Customization Project with Webpack

Original Source (in Japanese):  
[webpackを利用するkintoneカスタマイズ開発の流れ - Qiita](https://qiita.com/yamaryu0508/items/1abbef9a50e1e7fc3d2f)

## Steps
1. `mkdir new-project; cd new-project` & `npm init -y`
2. Install webpack and webpack-cli.

   ```bash
   npm install --save-dev webpack webpack-cli webpack-dev-server
   npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
   npm install --save-dev core-js regenerator-runtime
   npm install --save-dev react react-dom
   npm install --save-dev html-webpack-plugin
   ```

3. Create `webpack.config.js`
4. Modify `package.json`
5. Modify template in `./src/`
   * `index.html`
   * `index.js`
6. Insert customization into `./src/index.js`
7. Run `npm run dev` to create a test version
8. Run `npm run build` to create a production version
9. Upload `./dist/index.js` to Kintone App
   * For more details, refer to [Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html)
