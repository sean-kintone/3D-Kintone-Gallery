# Create a 3D Gallery with React and Three.js for [Kintone Web Database](https://developer.kintone.io/hc/en-us/)

![Banner Image](banner.gif) / ! [](banner.gif)

Thank you for attending our **Kintone x React** workshop!  
Check out [meetup.com/Kintone-Developers](https://www.meetup.com/Kintone-Developers/) to check out all of our upcoming events!

## Outline <!-- omit in toc --> <!-- markdownlint-disable MD007 -->

* [Get Started](#get-started)
  * [⚡ Notes ⚡](#-notes-)
* [Overview of the Repo](#overview-of-the-repo)
* [Kintone Web Database & Credentials](#kintone-web-database--credentials)
  * [🚀 Getting your FREE Kintone Database](#-getting-your-free-kintone-database)
* [Create a Kintone Web Database App](#create-a-kintone-web-database-app)
* [Build the customization](#build-the-customization)
* [Debugging - Let's Fix Those Problems 💪](#debugging---lets-fix-those-problems-)
  * [Errors related to .env](#errors-related-to-env)
  * [`npm install` command is not working](#npm-install-command-is-not-working)
  * [@kintone/customize-uploader not working?](#kintonecustomize-uploader-not-working)
  * [How do I get my Kintone Subdomain?](#how-do-i-get-my-kintone-subdomain)
* [Appendix](#appendix)

<!-- markdownlint-enable MD007 -->

## Get Started

First, let's download the [sean-kintone/3D-Kintone-Gallery](https://github.com/sean-kintone/3D-Kintone-Gallery) Repo and go inside the folder.

Once you are inside the folder, let's install the dependencies!

```shell
cd Downloads

git clone https://github.com/sean-kintone/3D-Kintone-Gallery

cd 3D-Kintone-Gallery

npm install

npm install -g @kintone/customize-uploader
```

### ⚡ Notes ⚡

⚡ React requires **Node ≥ 10.16** & **npm ≥ 5.6** ⚡

* Check the versions inside the `React_Workshop_by_Kintone` folder:
  * `node –v`
  * `npm –v`
* Not the correct versions or Confused? 🤔 → Check out the [Guide on Installing Node.js & npm](docs/Install_NodeJS_npm.md) Doc

⚡ Note: Please ignore the package deprecation warnings ⚡

🔎 The `npm install` command installs the required dependencies defined in the package.json files and generates a node_modules folder with the installed modules.

---

## Overview of the Repo

| File                                                         | Purpose                                                                      | Need to Modify?        |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------- | ---------------------- |
| [package.json](package.json)                                 | Project's metadata & scripts for building and uploading the customization    | _Nope_                 |
| [webpack.config.js](webpack.config.js)                       | Holds the Webpack's configuration for the react project                      | _Nope_                 |
|                                                              |                                                                              |                        |
| [.env.example](.env.example)                                 | The template for the .env file                                               | _Nope_                 |
| [.env](.env)                                                 | Holds the Kintone login credential and View ID                               | Yes! - Code it         |
|                                                              |                                                                              |                        |
| [scripts/npm-start.js](scripts/npm-start.js)                 | Script that uses `npm-run-all` to run `build` & `upload` scripts in parallel | _Nope_                 |
| [customize-manifest.json](customize-manifest.json)           | Kintone Customize Uploader's configuration file                              | Yes! - Add your App ID |
| [dist/KintoneCustomization.js](dist/KintoneCustomization.js) | The bundled JS build that will be uploaded to Kintone                        | _Nope_                 |
|                                                              |
| [src/index.js](src/index.js)                                 | Heart of the React Project handling `<App />` and Kintone Events             | _Nope_                 |
| [src/index.html](src/index.html)                             | HTML that reflects the Kintone Custom View; Only `<div id="root"></div>`     | _Nope_                 |
| [src/index.css](src/index.css)                               | Styling for the React Project                                                | _Nope_                 |
| [src/getRecords.js](src/requests/getRecords.js)              | Fetches Kintone records, transforms response, & returns array of objects     | _Nope_                 |
|                                                              |                                                                              |
---

## Kintone Web Database & Credentials

_Built for teamwork, designed by you_ <!-- markdownlint-disable MD036 --> <!-- markdownlint-enable MD036 -->

### 🚀 Getting your FREE Kintone Database

#### ① Sign-Up for Developer Program Account (Website) 🌐 <!-- omit in toc -->

* [bit.ly/KDP_signup](https://bit.ly/KDP_signup)
  * ⚠ Do NOT use Safari
  * ⚡ Accept Cookies First
  * ✅ Use Chrome & Firefox

#### ② THEN Create a Kintone Subdomain (Database) 📂 <!-- omit in toc -->

* [bit.ly/K_DevLic](http://bit.ly/K_DevLic)
  * ⚡ Only use lowercase, numbers, & hyphens in your subdomain
  * ⚠ Do not use uppercase nor special characters

#### 📺 Sign up for Kintone Developer Program & Developer License | Video <!-- omit in toc -->

<p align="center">
  <a href="https://youtu.be/Gzz8SbTuoFg">
    <img height="200" alt="Create Kintone Database App - React Workshop Prep YouTube Thumbnail"
      src="https://img.youtube.com/vi/Gzz8SbTuoFg/hqdefault.jpg">
  </a>
</p>

---

## Create a Kintone Web Database App

Let's create a Kintone App with some Shapes and Sizes to display!

Here are the required fields & their configurations for our workshop:

| Field Type | Field Name | Field Code | Note               |
| ---------- | ---------- | ---------- | ------------------ |
| Dropdown   | Shape      | `shape`    | Cube or Torus?     |
| Number     | Length     | `length`   | Length of shape    |
| Number     | Width      | `width`    | Width of shape     |
| Number     | Depth      | `depth`    | Depth of shape     |

Confused? 🤔 → Check out the [How to Create a Kintone Database App](https://youtu.be/pRtfn-8cf_I) video 📺

<!-- ![Create_App_Demo.gif Kintone_React_Workshop v2.1](https://user-images.githubusercontent.com/30670749/125898739-1bc018ac-1740-40e0-91cc-ab829192d2ea.gif) -->

### 📺 How to Create a Kintone Database App | Video <!-- omit in toc -->

<p align="center">
  <a href="https://youtu.be/pRtfn-8cf_I">
    <img height="200" alt="How to Create a Kintone Database App YouTube Thumbnail"
      src="https://img.youtube.com/vi/pRtfn-8cf_I/hqdefault.jpg">
  </a>
</p>

---

## Build the customization

1. Build the customization in the following files inside `./src/`
   * `index.html`, `index.js`, `index.css`, etc.
2. Run `npm run dev` to continuously generate testing build
3. Run `npm run production` to create a production version

   * To directly upload the Kintone customization, use `./dist/KintoneCustomization.js`.
   * For more details, refer to [Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html)

4. Run `npm run start`
   * This will trigger webpack & kintone-customize-uploader to run while watching `./src/index.js` for changes
   * Input Kintone credentials when asked
5. Refresh the Kintone App to see the changes!

Good luck coding!

---

## Debugging - Let's Fix Those Problems 💪

Here is a rundown of common problems that may occur & its solutions!

### Errors related to .env

If you get one of the following error messages, then please verify your `.env` file has been correctly configured and you have not modified the `.env.example`

* `Failed to find .env file at default paths: [./.env,./.env.js,./.env.json]`
* `[webpack-cli] Error: Missing environment variable: KINTONE_BASE_URL`
* `[webpack-cli] Error: Missing environment variable: KINTONE_USERNAME`
* `[webpack-cli] Error: Missing environment variable: KINTONE_PASSWORD`
* `[webpack-cli] Error: Missing environment variable: VIEW_ID`

### `npm install` command is not working

1. Verify the Node.js & npm versions **inside** the `Kintone_React_Search_Bar` folder
2. Just installed Node.js? Verify you configured Node.js versions **inside** the `Kintone_React_Search_Bar` folder

* Mac: `nodenv local 14.5.0`
* Windows: `nvm use 14.5.0`

### @kintone/customize-uploader not working?

Verify that you are inputting the exact base URL for Kintone credentials questions

* Correct: `https://example.cybozu.com` ✅
* Incorrect: `https://example.cybozu.com/` or `example.cybozu.com` ❌

### How do I get my Kintone Subdomain?

It might be a bit confusing since you need to sign-up for [Developer Program Account (Website) 🌐](https://bit.ly/KDP_signup) BEFORE creating your [Kintone Subdomain (Database) 📂](http://bit.ly/K_DevLic).

Check out our [Sign up for Kintone Developer Program & Developer License](https://youtu.be/Gzz8SbTuoFg) YouTube video:

* [![https://youtu.be/Gzz8SbTuoFg](https://img.youtube.com/vi/Gzz8SbTuoFg/mq1.jpg)](https://youtu.be/Gzz8SbTuoFg)

---

## Appendix

| Files                                               | Purpose                                                                       |
| --------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Install_NodeJS_npm.md](docs/Install_NodeJS_npm.md) | Guide on Installing Node.js & npm                                             |
| [Workshop.md](docs/Workshop.md)                     | Workshop Overview & Notes                                                     |
| [References.md](docs/References.md)                 | List of all the articles refereed to when building this project               |
| [Manga_Data.csv](docs/Manga_Data.csv)               | Manga title and author data that can be uploaded to your Kintone Manga DB App |
| [CustomizeUploader.md](docs/CustomizeUploader.md)   | Guide on configuring the @kintone/customize-uploader                          |
