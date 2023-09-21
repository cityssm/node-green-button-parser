# Green Button® Parser for Node

[![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/green-button-parser)](https://www.npmjs.com/package/@cityssm/green-button-parser)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-green-button-parser.svg/?label=active+issues&show_trend=true&token=LAEc-5uihnFgNpJWscc1Kj1t)](https://app.deepsource.com/gh/cityssm/node-green-button-parser/?ref=repository-badge)
[![Maintainability](https://api.codeclimate.com/v1/badges/ad98bbdea3b40237515e/maintainability)](https://codeclimate.com/github/cityssm/node-green-button-parser/maintainability)
[![codecov](https://codecov.io/gh/cityssm/node-green-button-parser/branch/main/graph/badge.svg?token=9BJU6NU0WR)](https://codecov.io/gh/cityssm/node-green-button-parser)

Parse Green Button® formatted energy consumption feeds into JSON.

## Features

- Fully typed output.
- Support for Green Button® XML containing full feeds and single entries.
- Enumerated values translated to meaningful text.
- Helpful functions to link things together.

## Important Note

This code is for use with the
[Green Button Download My Data® (DMD) standard](https://www.greenbuttonalliance.org/green-button-download-my-data-dmd),
or with Green Button® formatted XML.

💡 If you are looking to subscribe to Green Button® data using the
[Green Button Connect My Data® (CMD) standard](https://www.greenbuttonalliance.org/green-button-connect-my-data-cmd),
see the
[City of Sault Ste. Marie's Green Button® Subscriber](https://github.com/cityssm/node-green-button-subscriber).

💡 If you are looking for a full application to report on energy usage,
see [EMILE (Energy Monitoring in Less Effort)](https://github.com/cityssm/EMILE).

## Installation

```sh
npm install @cityssm/green-button-parser
```

## Usage

```javascript
import { atomToGreenButtonJson } from '@cityssm/green-button-parser'

const greenButtonJson = await atomToGreenButtonJson('<feed> ... </feed>')
```

## Helpful Links

- [Green Button Alliance](https://www.greenbuttonalliance.org/)
- [XML XSDs](https://github.com/GreenButtonAlliance/OpenESPI-Common-java/tree/master/src/main/resources/schemas)
- [XML Format Documentation by UtilityAPI](https://utilityapi.com/docs/greenbutton/xml)

## Trademarks

® GREEN BUTTON is a registered trademark owned by Departments of the U.S. Government.

The City of Sault Ste. Marie is a [Liaison member of the Green Button Alliance](https://www.greenbuttonalliance.org/members/sault-ste-marie).
