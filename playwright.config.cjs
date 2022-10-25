// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  workers: 1,
  expect: {
    timeout: 10000
  },
  use: {
    baseURL: 'http://localhost:5173'
  }
}
module.exports = config
