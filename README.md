# Setup a Kintone Customization Project with React and Webpack
*React x Kintone Customization Builder & Uploader*

## Steps
1. Create a Kintone App
   * YouTube: [How to Create a Kintone Database App](https://youtu.be/pRtfn-8cf_I)
2. Initialize with

   ```terminal
   mkdir new-project
   cd new-project
   npm init -y
   ```

3. Install the dependencies

   ```bash
   npm install --save-dev webpack webpack-cli html-webpack-plugin style-loader css-loader
   npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
   npm install --save-dev react react-dom
   npm install --save-dev npm-run-all

   npm install -g @kintone/customize-uploader
   ```

4. Create `webpack.config.js`
5. Modify `package.json` by adding the following scripts

   ```json
   "scripts": {
     "start": "node scripts/npm-start.js",
     "upload": "env-cmd --verbose kintone-customize-uploader --watch dest/customize-manifest.json",
     "dev": "npm run build -- --watch",
     "build": "webpack",
     "production": "webpack --mode production"
   },
   ```

6. Build the customization in the following files inside `./src/`
   * `index.css`
   * `index.html`
   * `index.js`
7. Run `npm run dev` to continuously generate testing build
8. Run `npm run production` to create a production version
   * To directly implement the Kintone customization, upload `./dist/KintoneCustomization.js` to Kintone App directly.
   * For more details, refer to [Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html)
9. Create the `dest/customize-manifest.json`

   ```json
    {
        "app": "180",
        "scope": "ALL",
        "desktop": {
            "js": ["dist/KintoneCustomization.js"],
            "css": []
        },
        "mobile": {
            "js": [],
            "css": []
        }
    }
    ```

10. Replace `180` with your App ID in `dest/customize-manifest.json`
    * To determine your Kintone App ID: Go inside the App, copy the URL, and extract the digits after `https://YOUR_SUBDOMAIN.kintone.com/k/`
    * Example: `https://YOUR_SUBDOMAIN.kintone.com/k/1/` -> App ID is `1`
11. Create a `.env` file based on the `.env.example` file
    * Template

      ```.env
      KINTONE_BASE_URL=https://example.kintone.com
      KINTONE_USERNAME=your_username
      KINTONE_PASSWORD=your_password
      ```

    * Example

      ```.env
      KINTONE_BASE_URL=https://cafe.kintone.com
      KINTONE_USERNAME=Administrator
      KINTONE_PASSWORD=Kintone!Is!Amazing;
      ```

12. Run `npm run start`
    * This will trigger webpack & kintone-customize-uploader to run while watching `./src/index.js` for changes
    * Input Kintone credentials when asked
13. Refresh the Kintone App to see the changes!

Good luck coding!

### Got Errors? - Debugging
  * Verify that you are inputting the exact base URL for Kintone credentials questions
  * Correct: `https://example.cybozu.com` ✅
  * Incorrect: `https://example.cybozu.com/` or `example.cybozu.com` ❌

## References

  * [Setup react with webpack and babel | by Prateek Srivastava | Age of Awareness | Medium](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9)
  * [webpack を利用する kintone カスタマイズ開発の流れ - @yamaryu0508](https://qiita.com/yamaryu0508/items/1abbef9a50e1e7fc3d2f)
  * [Introduction to customize-uploader – Kintone Developer Program](https://developer.kintone.io/hc/en-us/articles/360017405154)
  * [js-sdk/packages/customize-uploader at master · kintone/js-sdk](https://github.com/kintone/js-sdk/tree/master/packages/customize-uploader)
