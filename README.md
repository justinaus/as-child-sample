# As-child-sample

## ⚠️ Problems

```jsx
// bad.
<a href="/somewhere">
  <CommonFilledButton />
</a>
```

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