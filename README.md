# 박상호*프론트엔드*블록오디세이

## [배포 링크](https://block-odyssey-fe.vercel.app)

# 실행 방법

```
yarn install
yarn dev
```

# 사용한 라이브러리

-   React v18
-   react-query v4
-   redux-toolkit
-   SCSS

# Required Tasks

## List

-   검색을 했을 경우 검색 결과가 나오게 됩니다.
-   새로고침을 해도 검색 기능이 고정되어 있습니다.
-   항목들은 [상품번호, 상품명, 브랜드, 상품내용, 가격, 평점, 재고]로 이루어져 있습니다.
-   항목 위에 데이터의 개수가 적혀있습니다.
-   글자수가 40이 넘어가면 '...'으로 표시되도록 했습니다.
    ![블록오디세이 새로고침](https://user-images.githubusercontent.com/97100045/216228034-4c8ee948-a872-4a58-93cc-59f0825f64a4.gif)

## Search

-   검색 카테고리는 [전체, 상품명, 브랜드, 상품내용]으로 구성되어 있습니다.
-   새로고침을 해도 기록이 남아있습니다.
    ![블록오디세이 검색기능](https://user-images.githubusercontent.com/97100045/216228996-bd4e94a6-71e1-4e46-999e-453865dcb9c9.gif)

## Pagination

### 페이지당 행 개수 변경

-   페이지 당 행의 개수는 [10,20,50]으로 변환이 가능합니다.
-   새로고침을 해도 기록이 남아있습니다.
    ![블록오디세이 페이지네이션](https://user-images.githubusercontent.com/97100045/216229779-f9d1c450-af08-434e-be89-6d3fd4cf5c60.gif)

### 페이지 변경

-   일정 구간의 페이지에 진입하면 많은 버튼의 우려로 제외하기 위해 ...로 생략 했습니다.
    ![블록오디세이 페이지 변경](https://user-images.githubusercontent.com/97100045/216230868-8782f633-41cf-45ba-8bea-1960f70b40d2.gif)

## 반응형 구현
- 태블릿, 모바일 크기에 맞도록 반응형을 구현 했습니다.
![블록오디세이 반응형](https://user-images.githubusercontent.com/97100045/216231932-7c0e46c6-6adf-433d-8dae-104be585e2b3.gif)

# 깃 컨벤션

```
✨ feat : 기능 구현
🎨 Modify : 간단한 구조변경
💄 style : UI 변경
📝 docs : 문서/에셋 추가/수정
🎉 chore : 초기 설정
```



