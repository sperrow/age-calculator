const relative = require('./relative-path.cjs');

module.exports = function (data) {
    const {title, page, content} = data;
    return `
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${relative(page.url, '/docs.css')}">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,800;1,400;1,700&display=swap"
        rel="stylesheet"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="${relative(page.url, '/favicon-32x32.png')}" />
    <link href="${relative(page.url, '/prism-okaidia.css')}" rel="stylesheet" />
    <script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <script src="/node_modules/lit/polyfill-support.js"></script>
    <script type="module" src="${relative(
        page.url,
        '/age-calculator.bundled.js'
    )}"></script>
    <style>
            body {
                background-color: lightgray;
            }
            .age-calculator {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 5rem;
            }
        </style>
  </head>
  <body>
    <div class="age-calculator">
      <age-calculator></age-calculator>
    </div>
  </body>
  </html>`;
};