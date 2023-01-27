# mostly-ai-challenge

Automated tests for MOSTLY AI's website

## Playwright Automated Tests

The purpose of this repo is to showcase automated tests created for MOSTLY AI's [website](https://mostly.ai/), built using Playwright with Typescript. Playwright enables reliable end-to-end testing for modern web apps.

## Installation

### Clone the repo via HTTPS or SSH:

HTTPS

```
git clone https://github.com/emrec93/mostly-ai-challenge.git
```

SSH

```
git clone git@github.com:emrec93/mostly-ai-challenge.git
```

### Navigate into the project folder, and install all project dependencies

```
cd mostly-ai-challenge
npm i
```

# Execute Tests and Reporting

### Execute all tests

```
npm run test
```

### Viewing latest test results

```
npm run report
```

# Scenarios covered

The tests cover the following 3 scenarios:

### Step 1:

1. Go to page https://mostly.ai/
2. Verify if following bookmarks are being visible – Platform, Synthetic data, Resources,
   Company

### Step 2:

1. Go to page https://mostly.ai/
2. Click the “Search” button
3. Type “sythetic” (wrong spelling of synthetic) in search field
4. Press Enter
5. Verify if the following information is displayed “Sorry, no results for: sythetic”

### Step 3:

1. Go to page https://mostly.ai/
2. Click “Contact” item under the “Company” bookmark
3. Fill following fields:

   - First Name
   - Last Name
   - Your Business Email
   - Mobile Phone Number
   - Your Organization
   - Country/Region
   - Description Field

4. Check “Marketing offers and updates” checkbox 5. Hover over “Send Message” button, but do not click it

## CI/CD, Github Actions

In the project folder within .github/workflows/ you'll find a playwright.yml file that runs the tests whenever a push or a pull request is made on the main and master branches. This can be configured further, but I've left it as it is for the purpose of this challenge.

### Downloading Test Artifacts

After the tests run in the workflow, you can download the test artifacts as a zip file "playwright-report.zip". This can be found in the repo under Actions -> Playwright Tests -> then in the workflow that was last completed (hopefully with a green tick!).

Once downloaded and unzipped, the folder contains a "index.html" file which can be opened in any browser or with the LiveServer extension in VSCode. It can also be hosted as part of another job within Github using Github Pages, but that's beyond the scope of this challenge.
