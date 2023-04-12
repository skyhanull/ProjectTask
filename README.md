# 🎧 ElMusic 사전과제

## 이름

안윤경

## 프로젝트 구동 방법

```
git clone // this repository
cd this file location
npm install
```

## 배포 사이트

[배포링크](https://project-task-29qsjfu5h-skyhanull.vercel.app)

## 사용한 라이브러리

<p>
<img alt="Typescript" src="https://img.shields.io/badge/Typescript-v4.9.5-3178C6?style=plastic&logoColor=white%22/%3E"/>
<img alt="React" src="https://img.shields.io/badge/React-v18.2.0-61DAFB?style=plastic&logo=react&logoColor=white"/>
<img alt="Axios" src="https://img.shields.io/badge/axios-v1.3.5-5A29E4?style=plastic&logo=axios&logoColor=white"/>
<img alt="Chakra UI" src="https://img.shields.io/badge/Chakra UI-v2.5.5-319795?style=plastic&logo=Chakra UI&logoColor=white"/>
<img alt="Redux-toolkit" src="https://img.shields.io/badge/Redux-v8.0.5-764ABC?style=plastic&logo=Redux-toolkit&logoColor=white"/>
</p>

### chakra-ui 사용이유

- 기존 css보다 쉽고 간단하게 기능을 구현할 수 있기 때문입니다.
- 접근성 표준 WAI-ARIA standards를 엄격하게 따른 개발을 할 수 있기 때문입니다.

### redux-toolkit 사용이유

- Api를 메인페이지, 상세페이지 두 곳에 사용하기에 전역 상태로 관리하여 사용했습니다.
- filter 및 정렬 과정을 slice 안에서 처리함으로써 컴포넌트를 분리하기 위해서입니다.

## 프로젝트 설명

### 기능 구현

#### 1. 음원 이름으로 검색

- 메인페이지의 검색창에 입력 시 소문자/대문자에 상관없이 같은 영문자를 가지고 있는 음반이 검색 됨
- 검색창에 입력 시 query string 중 'name'의 값으로 들어감
- x 버튼을 누르면 검색했던 것과 query string이 ""로 변경됨

#### 2. 음원이름으로 정렬(오름차순/내림차순)

- 테이블의 song 옆의 ↑,↓ 을 누르면 각각 오름차순/내림차순으로 정렬
- 화살표를 누를 때 모양이 바뀌면서 query string 중 'sort'의 값이 "up" 또는 "down"으로 변경

#### 3. 음원의 정렬과 검색이 동시에 적용이 가능하도록 구현

- slice에 query string의 여부에 따라 검색/정렬이 되도록 구현
- useEffect를 이용하여 query string이 존재한다면 새로고침을 해도 남아있도록 구현

#### 4. 음원 클릭시 상세페이지로 이동

- 음원 목록 어디든 클릭하면 동적 라우팅으로 연결된 음원 이름의 상세페이지로 이동이 가능

#### 5. 크로스 브라우징

- 이 부분은 확실하게 모르지만 LAMBDTEST에서 실시간 테스트를 Firefox/Safari/Edge 1400px~1600px 환경에서 실행시켰을 때 모든 기능이 작동했습니다

### 코드 구조

#### 1. redux-thunk를 사용하여 비동기처리를 한 곳에서 해결

#### 2. 배열 정렬/필터링하는 방식

- mainpage에서 3개의 인자("sort","name",전체 array)를 slice에 넘겨줌
- slice에서 조건에 따라 filter와 sort를 각각 시행한 후에 두 개의 배열 중 some을 이용해 일치하는 객체를 찾아서 리턴함

#### 트리구조

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜Api.tsx
 ┣ 📂components
 ┃ ┣ 📂list
 ┃ ┃ ┗ 📜topChart.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜nameSearch.tsx
 ┃ ┣ 📂sort
 ┃ ┃ ┗ 📜sortButton.tsx
 ┃ ┗ 📂subInfo
 ┃ ┃ ┗ 📜Infomation.tsx
 ┣ 📂pages
 ┃ ┣ 📜mainPage.tsx
 ┃ ┣ 📜navigationPage.tsx
 ┃ ┣ 📜notFoundPage.tsx
 ┃ ┗ 📜subInfoPage.tsx
 ┣ 📂store
 ┃ ┣ 📂slice
 ┃ ┃ ┣ 📜musicSlice.tsx
 ┃ ┃ ┗ 📜sliceThunk.tsx
 ┃ ┗ 📜store.tsx
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜types.ts
```
