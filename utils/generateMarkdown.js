// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseArr = ['MIT', 'APACHE', 'Boost Software License 1.0', 'BSD 3-Clause License']


function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === licenseArr[1]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === licenseArr[2]) {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === licenseArr[3]) {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return `[${licenseArr[22]}](https://opensource.org/licenses/MIT)`
  } else if (license === licenseArr[1]) {
    return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licenseArr[2]) {
    return `[${licenseArr[3]}](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === licenseArr[3]) {
    return `[${licenseArr[5]}](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]) {
    return `Read more about ${licenseArr[0]} here:`
  } else if (license === licenseArr[1]) {
    return `Read more about ${licenseArr[1]} here:`
  } else if (license === licenseArr[2]) {
    return `Read more about ${licenseArr[2]} here:`
  } else if (license === licenseArr[3]) {
    return `Read more about ${licenseArr[3]} here:`
  } else {
    return ''
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [title](#title)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [License](#license)
  
  ## Title
  ${data.title}
  
  ## Description
  ${data.description}
  
  ## Instalation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.testing}
  
  ## Questions
  ${data.github}
  ${data.repo}
  ${data.email}

`;
}

module.exports = generateMarkdown;
