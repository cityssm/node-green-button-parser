# Green Button Parser

![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/green-button-parser)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-green-button-parser.svg/?label=active+issues&show_trend=true&token=LAEc-5uihnFgNpJWscc1Kj1t)](https://app.deepsource.com/gh/cityssm/node-green-button-parser/?ref=repository-badge)
[![Maintainability](https://api.codeclimate.com/v1/badges/ad98bbdea3b40237515e/maintainability)](https://codeclimate.com/github/cityssm/node-green-button-parser/maintainability)
[![codecov](https://codecov.io/gh/cityssm/node-green-button-parser/branch/main/graph/badge.svg?token=9BJU6NU0WR)](https://codecov.io/gh/cityssm/node-green-button-parser)

Parse Green Button formatted electric usage feeds into JSON.

## Installation

```sh
npm install @cityssm/green-button-parser
```

## Usage

```javascript
import {
  atomToGreenButtonJson,
  atomFileToGreenButtonJson
} from '@cityssm/green-button-parser'

// Use a URL
const jsonFromURL = await atomToGreenButtonJson(
  'https://example.com/greenButton.xml'
)

// Use text
const jsonFromText = await atomToGreenButtonJson('<feed> ... </feed>')

// Use a file
const jsonFromFile = await atomFileToGreenButtonJson(
  'C:\\path\\greenButton.xml'
)
```

## Links

[Green Button Alliance](https://www.greenbuttonalliance.org/)