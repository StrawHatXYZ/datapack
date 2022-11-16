## Datapack Extension developed using React, Sass, Webpack and Tailwind.

## Installation
To install dependencies
```bash
npm install
```

## Usage

### Development


 Start the development server:

```bash
npm run start
```

This will place the build artifacts in the dist/ directory and will hot reload the extension ui and background script on file change. Note that the content and injected scripts won't be hot reloaded and must be manually loaded.



## Build for Production

Alternatively, you can build for production by running



```bash

npm run build

```

## Install the extension
After building via npm run start or npm run build, you can install the extension locally by opening chrome and going to the manage extensions page, turning on developer mode and clicking load unpacked, where you can load the build artifacts above. Once done, optionally pin the extension to your browser's toolbar and you're good to go.



## License
[MIT](https://choosealicense.com/licenses/mit/)


