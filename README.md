# Automation1_exercise

This is an automation project for www.shastaqa.com for the Shasta QA Badge initiative, written in Typescript and utilizing Webdriver.IO (wdio runner), Mocha, and Chai; this project attempts to cover the requirements for the Automation Skill Level 1, Xpath, Basic Javascript (via Typescript), and Intermediate Git badges.

## Getting Started
```
git clone git@github.com:srossbyers/Automation1_Exercise.git
cd WebdriverIO_v5_TypeScript
npm install
npm test
```

Note: yarn is also installed and can be utilized in place of npm, however some issues were observed during development when running yarn for projects being developed on Windows (persistent EPERM errors)

```
npm test
```
This command runs all tests for the Shasta QA website

```
npm test_elements
```
This command runs the tests for all mapped elements on the Shasta QA website

```
npm test_mobile
```
This command was intended to run all tests for the mobile version of the site, however not all mobile testing functionality was implemented due to time constraints