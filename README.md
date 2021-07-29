# 😺NestJs로 만드는 API

## 👓Features

### 1. 기본적인 CRUD

- [`movies.controller.ts`](./src/movies/movies.controller.ts): 라우터
- [`movies.service.ts`](./src/movies/movies.service.ts): 각 라우터에 쓰일 함수들

### 2. 드나드는 데이터의 타입 체크
   
```js
//main.ts
app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 타입에 맞지 않으면 필터링
      forbidNonWhitelisted: true, // 타입에 맞지 않으면 에러 반환
      transform: true, // string이던 url요소들을 원하는대로 자동으로 바꿔줌
    }),
  );
```

### 3. unit & e2e testing

- [`movies.service.spec.ts`](./src/movies/movies.service.spec.ts): `movies.service.ts`의 유닛 테스팅
- [`app.e2e-spec.ts`](./test/app.e2e-spec.ts): 전체적인 e2e 테스팅


## 💡후기

- `Typescript`를 드디어 써보는데 매우 맘에 든다. 앞으로의 모든 프로젝트에선 `TS`를 사용할 듯.
  
- `NestJs`는 재미있다. `ts`의 `decorator`를 쓰는 게 조금 생소하지만, 내부적으로 어떻게 작동하는지 알기에 더 신기하다. `DRF`를 쓸 지 `Nest`를 쓸 지 앞으로 고민되는 부분...

- 테스트를 공부해보기 전까진 테스팅만 거치면 견고한 어플리케이션이 탄생하겠다 싶었는데, 결국엔 테스트 코드를 짜는 개발자의 역량이 좌우하는 듯 하다.
  - 그래도 커버리지 보며 테스팅 코드 짜는 맛이 일품이다.