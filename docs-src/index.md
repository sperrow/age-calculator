---
layout: page.11ty.cjs
title: <age-calculator> ⌲ Home
---

# &lt;age-calculator>

`<age-calculator>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section>
  <div>

`<age-calculator>` is just an HTML element. You can it anywhere you can use HTML!

```html
<age-calculator></age-calculator>
```

  </div>
  <div>

<age-calculator></age-calculator>

  </div>
</section>

## Declarative rendering

<section>
  <div>

`<age-calculator>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;age-calculator&gt;</h2>
    <age-calculator></age-calculator>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;age-calculator&gt;</h2>
<age-calculator name="lit-html"></age-calculator>

  </div>
</section>
