This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 개발모드로 시작
```npm start```

## 개발모드로 시작 (https)
```
HTTPS=true npm start // Mac
set HTTPS=true && npm start // Windows
```  

## 빌드

```
npm run build // 빌드
```
```
npx serve -s build // build 폴더를 웹 서버 띄우기, serve : node.js에서 작동하는 웹서버 앱
```

빌드시에는 build폴더에 파일들이 생성되는데, 파일들 이름에 해시값이 포함되어있다.  
이를 통해 각 파일들은 독립된 이름을 갖게되며, 이를 이용해 캐싱에 사용한다.  
캐싱 : 어떤 저장소(캐시보다 먼 저장소, 서버 또는 메모리 등)에서 가져온 데이터를 캐시에 저장하여 같은 데이터를 다시 불러오는 속도를 빠르게함

## 테스트

```
npm test
```
테스트 파일으로 인식하는 조건
+ __tests__폴더 하위의 모든 js파일
+ .test.js로 끝나는 파일
+ .spec.js로 끝나는 파일




## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
