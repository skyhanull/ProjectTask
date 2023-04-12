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

```
project-task-jo48tgte2-skyhanull.vercel.app

```

## 사용한 라이브러리

<p>
<img alt="Typescript" src="https://img.shields.io/badge/Typescript-v4.9.5-3178C6?style=plastic&logoColor=white%22/%3E"/>
<img alt="React" src="https://img.shields.io/badge/React-v18.2.0-61DAFB?style=plastic&logo=react&logoColor=white"/>
<img alt="Axios" src="https://img.shields.io/badge/axios-v1.3.5-5A29E4?style=plastic&logo=axios&logoColor=white"/>
<img alt="Chakra UI" src="https://img.shields.io/badge/Chakra UI-v2.5.5-319795?style=plastic&logo=Chakra UI&logoColor=white"/>
<img alt="Redux-toolkit" src="https://img.shields.io/badge/Redux-v8.0.5-764ABC?style=plastic&logo=Redux-toolkit&logoColor=white"/>
</p>

### chakra-ui 사용이유

기존의 css로 구현을 하기에 시간이 부족했으며

### redux-toolkit 사용이유

- Api를 메인페이지,상세페이지 두곳에 사용하기에 전역상태로 관리하기 위해 사용
- filter및 정렬과정을 slice안에서 처리함으로써 컴포넌트를 분리하기 위해서
-

## 프로젝트 설명

### 기능 구현

1. 음원 이름으로 검색

- 메인페이지의 검색창에 입력시 소문자/대문자에 상관없이 같은 영문자를 가지고 있는 음반이 검색이 됨
- x 버튼을 누르면 검색했던 것과 query string이 ""로 변경됨

2. 음원이름으로 정렬(오름차순/내림차순)

- 테이블의 song옆의 ↑,↓ 을 누르면 각각 오름차순/내림차순으로 정렬

3. 음원의 정렬과 검색이 동시에 적용이 가능하도록 구현

- slice에 query string의 여부에 따라 검색/정렬이 되도록 구현

4. 음원 클릭시 상세페이지로 이동

- 음원목록 어디든 클릭하면 상세페이지로 이동이 가능하다

### 코드 구조

1. redux-thunk를 사용하여 비동기처리를 한 곳에서 해결

2. 배열 정렬/필터링하는 방식

- mainpage에서 3개의 인자("sort","name",전체 array)를 slice에게 넘겨 줌
- slice에서 조건에 따라 filter와 sort를 각각 시행한 후에 두개의 배열 중 some을 이용해 일치하는 객체를 찾아서 리턴함
