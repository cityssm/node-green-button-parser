# Green Button Parser

[![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/green-button-parser)](https://www.npmjs.com/package/@cityssm/green-button-parser)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-green-button-parser.svg/?label=active+issues&show_trend=true&token=LAEc-5uihnFgNpJWscc1Kj1t)](https://app.deepsource.com/gh/cityssm/node-green-button-parser/?ref=repository-badge)
[![Maintainability](https://api.codeclimate.com/v1/badges/ad98bbdea3b40237515e/maintainability)](https://codeclimate.com/github/cityssm/node-green-button-parser/maintainability)
[![codecov](https://codecov.io/gh/cityssm/node-green-button-parser/branch/main/graph/badge.svg?token=9BJU6NU0WR)](https://codecov.io/gh/cityssm/node-green-button-parser)

Parse Green Button formatted energy consumption feeds into JSON.

## Installation

```sh
npm install @cityssm/green-button-parser
```

## Usage

```javascript
import { atomToGreenButtonJson } from '@cityssm/green-button-parser'

const jsonFromXml = await atomToGreenButtonJson('<feed> ... </feed>')
```

## Helpful Links

- [Green Button Alliance](https://www.greenbuttonalliance.org/)
- [XML XSDs](https://github.com/GreenButtonAlliance/OpenESPI-Common-java/tree/master/src/main/resources/schemas)
- [XML Format Documentation by UtilityAPI](https://utilityapi.com/docs/greenbutton/xml)
