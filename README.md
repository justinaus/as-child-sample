# As-child-sample

## ⚠️ Problems

```jsx
// bad.
<a href="/somewhere">
  <CommonFilledButton />
</a>
```

![스크린샷 2024-04-29 오후 1 16 53](https://github.com/justinaus/as-child-sample/assets/14830577/aebbb799-0489-49ea-a16e-6481dff7f3fe)

https://validator.w3.org/nu/?showsource=yes&doc=http://dropbox.beausmith.com/static-html/invalid-button-anchor-markup.html

https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button

## Solutions

### as-props
[as-props](https://www.robinwieruch.de/react-as-prop)

Not enough. Difficulties with scalability, etc.


[as-child](https://www.jacobparis.com/content/react-as-child)

Not so bad.

## Demo

https://as-child-sample.vercel.app/

![스크린샷 2024-04-29 오후 1 18 44](https://github.com/justinaus/as-child-sample/assets/14830577/982799fb-72f5-4157-81f3-f97914faa63d)


## Getting Started


```bash
yarn install
```

```bash
yarn dev
```



## Usage
```jsx
<FilledButton asChild>
  <a href='/somewhere'>Link</a>
</FilledButton>
```

## Used
- [Next.js](https://nextjs.org)
- [Emotion css props](https://emotion.sh/docs/css-prop)
