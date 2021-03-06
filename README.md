# ๐บNestJs๋ก ๋ง๋๋ API

## ๐Features

### 1. ๊ธฐ๋ณธ์ ์ธ CRUD

- [`movies.controller.ts`](./src/movies/movies.controller.ts): ๋ผ์ฐํฐ
- [`movies.service.ts`](./src/movies/movies.service.ts): ๊ฐ ๋ผ์ฐํฐ์ ์ฐ์ผ ํจ์๋ค

### 2. ๋๋๋๋ ๋ฐ์ดํฐ์ ํ์ ์ฒดํฌ
   
```js
//main.ts
app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ํ์์ ๋ง์ง ์์ผ๋ฉด ํํฐ๋ง
      forbidNonWhitelisted: true, // ํ์์ ๋ง์ง ์์ผ๋ฉด ์๋ฌ ๋ฐํ
      transform: true, // string์ด๋ url์์๋ค์ ์ํ๋๋๋ก ์๋์ผ๋ก ๋ฐ๊ฟ์ค
    }),
  );
```

### 3. unit & e2e testing

- [`movies.service.spec.ts`](./src/movies/movies.service.spec.ts): `movies.service.ts`์ ์ ๋ ํ์คํ
- [`app.e2e-spec.ts`](./test/app.e2e-spec.ts): ์ ์ฒด์ ์ธ e2e ํ์คํ


## ๐กํ๊ธฐ

- `Typescript`๋ฅผ ๋๋์ด ์จ๋ณด๋๋ฐ ๋งค์ฐ ๋ง์ ๋ ๋ค. ์์ผ๋ก์ ๋ชจ๋  ํ๋ก์ ํธ์์  `TS`๋ฅผ ์ฌ์ฉํ  ๋ฏ.
  
- `NestJs`๋ ์ฌ๋ฏธ์๋ค. `ts`์ `decorator`๋ฅผ ์ฐ๋ ๊ฒ ์กฐ๊ธ ์์ํ์ง๋ง, ๋ด๋ถ์ ์ผ๋ก ์ด๋ป๊ฒ ์๋ํ๋์ง ์๊ธฐ์ ๋ ์ ๊ธฐํ๋ค. `DRF`๋ฅผ ์ธ ์ง `Nest`๋ฅผ ์ธ ์ง ์์ผ๋ก ๊ณ ๋ฏผ๋๋ ๋ถ๋ถ...

- ํ์คํธ๋ฅผ ๊ณต๋ถํด๋ณด๊ธฐ ์ ๊น์ง ํ์คํ๋ง ๊ฑฐ์น๋ฉด ๊ฒฌ๊ณ ํ ์ดํ๋ฆฌ์ผ์ด์์ด ํ์ํ๊ฒ ๋ค ์ถ์๋๋ฐ, ๊ฒฐ๊ตญ์ ํ์คํธ ์ฝ๋๋ฅผ ์ง๋ ๊ฐ๋ฐ์์ ์ญ๋์ด ์ข์ฐํ๋ ๋ฏ ํ๋ค.
  - ๊ทธ๋๋ ์ปค๋ฒ๋ฆฌ์ง ๋ณด๋ฉฐ ํ์คํ ์ฝ๋ ์ง๋ ๋ง์ด ์ผํ์ด๋ค.