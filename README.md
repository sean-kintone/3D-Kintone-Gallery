# Create a 3D Gallery with React and Three.js for [Kintone Web Database](https://kintone.dev)

![Banner Image](banner.gif)

Thank you for attending our **Kintone x React** workshop!  
Check out [meetup.com/Kintone-Developers](https://www.meetup.com/Kintone-Developers/) to check out all of our upcoming events!

## Outline <!-- omit in toc --> <!-- markdownlint-disable MD007 -->

* [Get Started](#get-started)
  * [⚡ Notes ⚡](#-notes-)
* [Overview of the Repo](#overview-of-the-repo)
* [Kintone Web Database & Credentials](#kintone-web-database--credentials)
  * [🚀 Getting your FREE Kintone Database](#-getting-your-free-kintone-database)
* [Create a Kintone Web Database App](#create-a-kintone-web-database-app)
* [Create a `.env` file](#create-a-env-file)
* [Input the App ID](#input-the-app-id)
* [Build the customization](#build-the-customization)
* [Debugging - Let's Fix Those Problems 💪](#debugging---lets-fix-those-problems-)
  * [Errors related to .env](#errors-related-to-env)
  * [`npm install` command is not working](#npm-install-command-is-not-working)
  * ["npm run upload" failed?](#npm-run-upload-failed)
  * [Uncaught Error: Target container is not a DOM element](#uncaught-error-target-container-is-not-a-dom-element)
  * [Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'value')](#uncaught-in-promise-typeerror-cannot-read-properties-of-undefined-reading-value)
  * [How do I get my Kintone Subdomain?](#how-do-i-get-my-kintone-subdomain)

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
  * `node -v`
  * `npm -v`
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
|                                                              |                                                                              |                        |
| [src/index.js](src/index.js)                                 | Heart of the React Project handling `<App />` and Kintone Events             | _Nope_                 |
| [src/index.html](src/index.html)                             | HTML that reflects the Kintone Custom View; Only `<div id="root"></div>`     | _Nope_                 |
| [src/index.css](src/index.css)                               | Styling for the React Project                                                | _Nope_                 |
| [src/getRecords.js](src/requests/getRecords.js)              | Fetches Kintone records, transforms response, & returns array of objects     | _Nope_                 |
|                                                              |                                                                              |                        |
| [3D_Gallery_Slides.pdf](3D_Gallery_Slides.pdf)               | Workshop presentation's slide deck                                           |                        |

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

| Field Type | Field Name | Field Code  | Note                                    |
| ---------- | ---------- | ----------- | --------------------------------------- |
| Dropdown   | Shape Type | `shapeType` | Options must include `Cube` and `Torus` |
| Number     | Length     | `length`    | Length of shape                         |
| Number     | Width      | `width`     | Width of shape                          |
| Number     | Depth      | `depth`     | Depth of shape                          |

Then create a Custom View
* From App Settings, click on the **Views** tab
* Click on the Plus Button ⊕ to create a View
* Select `Custom view` under **Visible Fields and Column Order** section
* Get the `View ID`! (Required in `.env` file)
* Under **HTML Code**, input `<div id="root"></div>`
* Save!

Be sure to click the **Save** and **Activate App** buttons! 💪

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

## Create a `.env` file

Using the [.env.example](.env.example) file as a template, create a `.env` file that will contain your login credentials and the Kintone App's View ID.

Here is what your `.env` might look like:

```txt
KINTONE_BASE_URL="https://example.kintone.com"
KINTONE_USERNAME="example@gmail.com"
KINTONE_PASSWORD="ILoveKintone!"
VIEW_ID="1234567"
```

⚠️ DO NOT DELETE THE [.env.example](.env.example) FILE!  
[.env.example](.env.example) is used by env-cmd to verify that `.env` file is correctly configured.

---

## Input the App ID

The Kintone Customize Uploader uses [customize-manifest.json](customize-manifest.json) to determine where to upload the JavaScript file (_which Kintone App_).

```json
{
    "app": "23",
    "scope": "ALL",
    ...
```

So to ensure the file gets uploaded to the correct App, replace the `23` with your App ID.

**What is my App ID?** 🤔  
* Go to your Kintone App & grab the URL
* Kintone App's URL follows this template: `https://<SUBDOMAIN>.kintone.com/k/<App ID>/show#record=<RECORD ID>`
* Grab the number between the `/k/`
* Example: `https://example.kintone.com/k/1/` -> The App's ID is `1`

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

Here is a rundown of common problems that may occur & their solutions!

### Errors related to .env

If you get one of the following error messages, then please verify your `.env` file has been correctly configured, and you have not modified the `.env.example`.

* `Failed to find .env file at default paths: [./.env,./.env.js,./.env.json]`
* `[webpack-cli] Error: Missing environment variable: KINTONE_BASE_URL`
* `[webpack-cli] Error: Missing environment variable: KINTONE_USERNAME`
* `[webpack-cli] Error: Missing environment variable: KINTONE_PASSWORD`
* `[webpack-cli] Error: Missing environment variable: VIEW_ID`

### `npm install` command is not working

1. Verify the Node.js & npm versions **inside** the `3D-Kintone-Gallery` folder
2. Just installed Node.js? Verify you configured Node.js versions **inside** the `3D-Kintone-Gallery` folder

* Mac: `nodenv local 14.5.0`
* Windows: `nvm use 14.5.0`

### "npm run upload" failed?
_@kintone/customize-uploader not working?_ Let's try the following:

(1) Verify that customize uploader was installed globally
* `npm install -g @kintone/customize-uploader`

(2) Verify that the .env login info is correct (including the password)
* ⚠️ Make sure your login info is inside `.env` file & **NOT** `.env.example` file!
* ⚠️ Verify that KINTONE_BASE_URL input is correctly formatted:
  * ✅ Correct Format: `https://example.kintone.com`
  * ❌ Incorrect Format: `https://example.kintone.com/` or `example.kintone.com`
* ⚠️ Re-run the npm commands after saving the .env file
* ⚙️ Details: [Create a `.env` file](#create-a-env-file)

(3) Verify your customize-manifest.json was updated with the correct App ID
* ⚙️ Details: [Input the App ID](#input-the-app-id)

### Uncaught Error: Target container is not a DOM element
Verify that the Custom View (Gallery View) has the following HTML Code:

```HTML
<div id="root"></div>
```

### Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'value')
* There may be incorrect variables set for the `THREE.BoxGeometry()`'s and `THREE.TorusGeometry()`'s parameters if you are getting this error.
* Verify that the parameters are only using `width`, `length`, and `depth` variables.

### How do I get my Kintone Subdomain?

It might be a bit confusing since you need to sign-up for [Developer Program Account (Website) 🌐](https://bit.ly/KDP_signup) BEFORE creating your [Kintone Subdomain (Database) 📂](http://bit.ly/K_DevLic).

Check out our [Sign up for Kintone Developer Program & Developer License](https://youtu.be/Gzz8SbTuoFg) YouTube video:

[![https://youtu.be/Gzz8SbTuoFg](https://img.youtube.com/vi/Gzz8SbTuoFg/mq1.jpg)](https://youtu.be/Gzz8SbTuoFg)
