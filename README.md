# Setup a Kintone Customization Project with Webpack

## Steps
1. `mkdir new-project; cd new-project` & `npm init -y`
2. Install webpack and webpack-cli.

   ```bash
   npm install --save-dev webpack webpack-cli webpack-dev-server
   npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
   npm install --save-dev core-js regenerator-runtime
   npm install --save-dev react react-dom
   npm install --save-dev html-webpack-plugin
   npm install --save-dev style-loader css-loader
   ```

3. Create `webpack.config.js`
4. Modify `package.json`
5. Build the customization in the following files inside `./src/`
   * `index.html`
   * `index.js`
6. Run `npm run dev` to create a test version
7. Run `npm run build` to create a production version
8. Upload `./dist/KintoneCustomization.js` to Kintone App
  * For more details, refer to [Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html)

## References
  * [Setup react with webpack and babel | by Prateek Srivastava | Age of Awareness | Medium](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9)
  * [webpackを利用するkintoneカスタマイズ開発の流れ - @yamaryu0508](https://qiita.com/yamaryu0508/items/1abbef9a50e1e7fc3d2f)
