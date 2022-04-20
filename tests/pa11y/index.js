const pa11y = require('pa11y');

const options = {
  standard: 'WCAG2AA'
}

pa11y('https://feisty.paw:3000', {
  ...options,
  screenCapture: '${__dirname}/results/index.png',
  viewport: {
    width: 320,
    height: 480,
    isMobile: true
  }
})
.then(res => {
  console.log(res)
})
.catch(err => console.log(err));
