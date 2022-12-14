

# ๐๏ธ Package ๋ฐ config

## package.json

```json
{
  "name": "seminar4",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist"
  },
  "devDependencies": {
    "@types/express": "^4.17.14",
    "@types/node": "^18.11.9",
    "nodemon": "^2.0.20"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "express": "^4.18.2",
    "prisma": "^4.6.1"
  }
}

```

## nodemon.json

```json
{
  "name": "seminar4",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist"
  },
  "devDependencies": {
    "@types/express": "^4.17.14",
    "@types/node": "^18.11.9",
    "nodemon": "^2.0.20"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "express": "^4.18.2",
    "prisma": "^4.6.1"
  }
}

```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6", // ์ด๋ค ๋ฒ์ ์ผ๋ก ์ปดํ์ผ
    "allowSyntheticDefaultImports": true, // default export๊ฐ ์๋ ๋ชจ๋์์ default imports๋ฅผ ํ์ฉ
    "experimentalDecorators": true, // decorator ์คํ์  ํ์ฉ
    "emitDecoratorMetadata": true, // ๋ฐ์ฝ๋ ์ดํฐ๊ฐ ์๋ ์ ์ธ์ ๋ํด ํน์  ํ์์ ๋ฉํ ๋ฐ์ดํฐ๋ฅผ ๋ด๋ณด๋ด๋ ์คํ์ ์ธ ์ง์
    "skipLibCheck": true, // ์ ์ ํ์ผ ํ์ ์ฒดํฌ ์ฌ๋ถ
    "moduleResolution": "node", // commonJS -> node ์์ ๋์
    "module": "commonjs", // import ๋ฌธ๋ฒ
    "strict": true, // ํ์ ๊ฒ์ฌ ์๊ฒฉํ๊ฒ 
    "pretty": true, // error ๋ฉ์์ง ์์๊ฒ
    "sourceMap": true, // ์์ค๋งต ํ์ผ ์์ฑ -> .ts๊ฐ .js ํ์ผ๋ก ํธ๋์ค ์ .js.map ์์ฑ
    "outDir": "./dist", // ํธ๋์ค ํ์ผ (.js) ์ ์ฅ ๊ฒฝ๋ก
    "allowJs": true, // js ํ์ผ ts์์ import ํ์ฉ
    "noImplicitAny": true, // any ์ฐ๋ฉด ์์ 
    "noFallthroughCasesInSwitch": true, // switch๋ฌธ์์ break๋์ง ์๊ณ  ํต๊ณผ๋๋ ๊ฒ ๋ฐฉ์ง
    "esModuleInterop": true, // ES6 ๋ชจ๋ ์ฌ์์ ์ค์ํ์ฌ CommonJS ๋ชจ๋์ ๊ฐ์ ธ์ฌ ์ ์๊ฒ ํ์ฉ
    "forceConsistentCasingInFileNames": true, //  ํ์ผ ์ฐธ์กฐ์ ๋์๋ฌธ์ ๊ตฌ๋ถ ์๊ฒฉ
    "noUnusedLocals": true,                     // ์์ฐ๋ ๋ก์ปฌ ๋ณ์ ์ฒดํฌ
    "noUnusedParameters": true,                 // ํจ์ ํ๋ผ๋ฏธํฐ ์ค ์์ฐ๋ ๊ฒ ์ฒดํฌ
    "typeRoots": [
      "./src/types/express.d.ts", // ํ์(*.d.ts)ํ์ผ์ ๊ฐ์ ธ์ฌ ๋๋ ํ ๋ฆฌ ์ค์ 
      "./node_modules/@types" // ์ค์  ์ํ ์ ๊ธฐ๋ณธ์ ์ผ๋ก ./node_modules/@types
    ]
  },
  "include": [
    "./src/**/*" // build ์ ํฌํจ
  ],
  "exclude": [
    "node_modules", // build ์ ์ ์ธ
    "tests"
  ]
}
```

# ๐จ๏ธ ์ปจ๋ฒค์

> ๐ก **๋๋ฃ๋ค๊ณผ ๋งํฌ๋ฅผ ํต์ผํ๊ธฐ ์ํด ์ปจ๋ฒค์์ ์ง์ ํฉ๋๋ค.**
์คํฉ์ง์กธ์ ์ฝ๋๊ฐ ์๋, **ํ ์ฌ๋์ด ์ง  ๊ฒ๊ฐ์ ์ฝ๋**๋ฅผ ์์ฑํ๋ ๊ฒ์ด ์ถํ ์ ์ง๋ณด์๋ ํ์์์ ๋์์ด ๋ฉ๋๋ค. ๋ด๊ฐ ์ฝ๋๋ฅผ ์๊ฐํ๋ฉด์ ์งค ์ ์๋๋ก ํด์ฃผ๋ ๋ฃฐ์ด๋ผ๊ณ  ์๊ฐํด๋ ์ข์ต๋๋ค!


<details>
<summary>๋ช๋ช๊ท์น(Naming Conventions)</summary>
<div markdown="1">

1. ์ด๋ฆ์ผ๋ก๋ถํฐ ์๋๊ฐ ์ฝํ์ง ์ ์๊ฒ ์ด๋ค.
- ex)

    ```jsx
    // bad
    function q() {
      // ...stuff...
    }
    
    // good
    function query() {
      // ..stuff..
    }
    
    ```
    
2. ์ค๋ธ์ ํธ, ํจ์, ๊ทธ๋ฆฌ๊ณ  ์ธ์คํด์ค์๋ `camelCase`๋ฅผ ์ฌ์ฉํ๋ค.
- ex)
    
    ```jsx
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}
    
    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    
    ```
    
3. ํด๋์ค๋ constructor์๋ `PascalCase`๋ฅผ ์ฌ์ฉํ๋ค.
- ex)
    
    ```jsx
    // bad
    function user(options) {
      this.name = options.name;
    }
    
    const bad = new user({
      name: 'nope',
    });
    
    // good
    class User {
      constructor(options) {
        this.name = options.name;
      }
    }
    
    const good = new User({
      name: 'yup',
    });
    
    ```
    
4. ํจ์ ์ด๋ฆ์ ๋์ฌ + ๋ช์ฌ ํํ๋ก ์์ฑํ๋ค.
ex) `postUserInformation( )`
5. ์ฝ์ด ์ฌ์ฉ์ ์ต๋ํ ์ง์ํ๋ค.
6. ์ด๋ฆ์ ๋ค ๋จ์ด ์ด์์ด ๋ค์ด๊ฐ๋ฉด ํ์๊ณผ ์์๋ฅผ ๊ฑฐ์น ํ ์ฌ์ฉํ๋ค
</div>
</details>

<details>
<summary>๋ธ๋ก(Blocks)</summary>
<div markdown="1">

1. ๋ณต์ํ์ ๋ธ๋ก์๋ ์ค๊ดํธ({})๋ฅผ ์ฌ์ฉํ๋ค.
- ex)
    
    ```jsx
    // bad
    if (test)
      return false;
    
    // good
    if (test) return false;
    
    // good
    if (test) {
      return false;
    }
    
    // bad
    function() { return false; }
    
    // good
    function() {
      return false;
    }
    
    ```
    
2. ๋ณต์ํ ๋ธ๋ก์ `if` ์ `else` ๋ฅผ ์ด์ฉํ๋ ๊ฒฝ์ฐ `else` ๋ `if` ๋ธ๋ก ๋์ ์ค๊ดํธ( } )์ ๊ฐ์ ํ์ ์์น์ํจ๋ค.
- ex)
    
    ```java
    // bad
    if (test) {
      thing1();
      thing2();
    } 
    else {
      thing3();
    }
    
    // good
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    
    ```
</div>
</details>

<details>
<summary>์ฝ๋ฉํธ(Comments)</summary>
<div markdown="1">

1. ๋ณต์ํ์ ์ฝ๋ฉํธ๋ `/** ... */` ๋ฅผ ์ฌ์ฉํ๋ค.
- ex)
    
    ```jsx
    // good
    /**
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {
      // ...stuff...
    
      return element;
    }
    
    ```
    
2. ๋จ์ผ ํ์ ์ฝ๋ฉํธ์๋ `//` ์ ์ฌ์ฉํ๊ณ  ์ฝ๋ฉํธ๋ฅผ ์ถ๊ฐํ๊ณ  ์ถ์ ์ฝ๋์ ์๋ถ์ ๋ฐฐ์นํ๋ค. ๊ทธ๋ฆฌ๊ณ  ์ฝ๋ฉํธ์ ์์ ๋น ํ์ ๋ฃ๋๋ค.
- ex)
    
    ```jsx
    // bad
    const active = true; // is current tab
    
    // good
    // is current tab
    const active = true;
    
    // good
    function getType() {
      console.log('fetching type...');
    
      // set the default type to 'no type'
      const type = this._type || 'no type';
    
      return type;
    }
    
    ```
</div>
</details>

<details>
<summary>๋ฌธ์์ด(Strings)</summary>
<div markdown="1">

1. ๋ฌธ์์ด์๋ ์ฑํฌ์ฟผํธ `''` ๋ฅผ ์ฌ์ฉํ๋ค.
- ex)
    
    ```jsx
    // bad
    const name = "Capt. Janeway";
    
    // good
    const name = 'Capt. Janeway';
    ```
    
2. ํ๋ก๊ทธ๋จ์์ ๋ฌธ์์ด์ ์์ฑํ๋ ๊ฒฝ์ฐ๋ ๋ฌธ์์ด ์ฐ๊ฒฐ์ด ์๋ `template strings`๋ฅผ ์ด์ฉํ๋ค.
- ex)
    
    ```jsx
    // bad
    function sayHi(name) {
      return 'How are you, ' + name + '?';
    }
    
    // bad
    function sayHi(name) {
      return ['How are you, ', name, '?'].join();
    }
    
    // good
    function sayHi(name) {
      return `How are you, ${name}?`;
    }
    
    ```
</div>
</details>

<details>
<summary>ํจ์(Functions)</summary>
<div markdown="1">

1. ํ์ดํ ํจ์๋ฅผ ์ฌ์ฉํ๋ค.
- ex)
    
    ```jsx
     var arr1 = [1, 2, 3];
      var pow1 = arr.map(function (x) { // ES5 Not Good
        return x * x;
      });
    
      const arr2 = [1, 2, 3];
      const pow2 = arr.map(x => x * x); // ES6 Good
    ```
    
</div>
</details>

<details>
<summary>์กฐ๊ฑด์๊ณผ ๋ฑ๊ฐ์(Comparison Operators & Equality)</summary>
<div markdown="1">

1. `==` ์ด๋ `!=` ๋ณด๋ค `===` ์ `!==` ์ ์ฌ์ฉํ๋ค.
2. ๋จ์ถํ์ ์ฌ์ฉํ๋ค.
- ex)
    
    ```jsx
    // bad
    if (name !== '') {
      // ...stuff...
    }
    
    // good
    if (name) {
      // ...stuff...
    }
    ```
    
3. ๋น๋๊ธฐ ํจ์๋ฅผ ์ฌ์ฉํ  ๋ `Promise`ํจ์์ ์ฌ์ฉ์ ์ง์ํ๊ณ  `async`, `await`๋ฅผ ์ฐ๋๋ก ํ๋ค
</div>
</details>

<hr>
</br>

## ๐งณ Branch

<aside>
๐ฑ git branch ์ ๋ต

`main branch` : ๋ฐฐํฌ ๋จ์ branch

`develop branch` : ์ฃผ์ ๊ฐ๋ฐ branch, main merge ์  ๊ฑฐ์น๋ branch

`feature branch`: ๊ฐ์ ๊ฐ๋ฐ branch

- ํ  ์ผ issue ๋ฑ๋ก ํ issue ๋ฒํธ๋ก branch ์์ฑ ํ ์์
    - ex) feature/#`issue num`
- ํด๋น branch ์์ ์๋ฃ ํ PR ๋ณด๋ด๊ธฐ
    - ํญ์ local์์ ์ถฉ๋ ํด๊ฒฐ ํ โ remote์ ์ฌ๋ฆฌ๊ธฐ
    - reviewer์ ์๋ก tagํ code-review
    - comment ์  merge ๋ถ๊ฐ!

 ### branch ๊ตฌ์กฐ

```jsx
- main
- develop
- feature
   โโโ #1
   โโโ #2
```

</aside>
<hr>
</br>

## ๐งณ Commit Convention

<aside>
๐ป git commit message convention

`ex) Feat/#`issue num` User API ํ์ผ ์ถ๊ฐ` 

```ruby
- Chore : ์ฝ๋ ์์ , ๋ด๋ถ ํ์ผ ์์ 
- Feat : ์๋ก์ด ๊ธฐ๋ฅ ๊ตฌํ
- Add : Feat ์ด์ธ์ ๋ถ์์ ์ธ ์ฝ๋ ์ถ๊ฐ, ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ถ๊ฐ, ์๋ก์ด ํ์ผ ์์ฑ ์
- Fix : ๋ฒ๊ทธ, ์ค๋ฅ ํด๊ฒฐ
- Del : ์ธ๋ชจ์๋ ์ฝ๋ ์ญ์ 
- Docs : README๋ WIKI ๋ฑ์ ๋ฌธ์ ๊ฐ์ 
- Move : ํ๋ก์ ํธ ๋ด ํ์ผ์ด๋ ์ฝ๋์ ์ด๋
- Rename : ํ์ผ ์ด๋ฆ์ ๋ณ๊ฒฝ
- Merge: ๋ค๋ฅธ๋ธ๋ ์น๋ฅผ mergeํ๋ ๊ฒฝ์ฐ
- Style : ์ฝ๋๊ฐ ์๋ ์คํ์ผ ๋ณ๊ฒฝ์ ํ๋ ๊ฒฝ์ฐ
- Init : Initial commit์ ํ๋ ๊ฒฝ์ฐ
```

# ๐ ERD

![image](https://user-images.githubusercontent.com/72034311/201510722-e26363e4-5128-46da-a353-73f17ab8c660.png)


# ๐ API ๋ช์ธ์

[๋ธ์์์ ๋ณด๊ธฐ](https://www.notion.so/2-API-Docs-4598a53d92f141bd98c755c262c9fd4e)
