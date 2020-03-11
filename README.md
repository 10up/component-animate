# 10up Animate

10up Animate is a small utility animation library. It (currently) consists of a
series of CSS classes that can be combined or used in isolation to bring small
elements of motion into a UI.

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

`npm install --save @10up/animate`

## Usage

#### CSS Imports

`@import '@10up/animate';`

The standard import from the NPM package will bring in all the animations. If
you want to choose the animations to bring in you can do so manually by
referencing the CSS files directly.

### Available Classes

This is a full list of classes currently available.

#### Fade

| Name |  Description |
|--|--|
| .fade-in | Update opacity from 0 to 1 |
| .fade-out | Update opacity from 1 to 0 |

#### Rotate

| Name |  Description |
|--|--|
| .rotate-90 | Rotate to 90 degrees |
| .rotate-180 | Rotate to 180 degrees |
| .rotate-270 | Rotate to 270 degrees |
| .rotate-360 | Rotate to 360 degrees |

#### Scale
| Name |  Description |
|--|--|
| .scale-down | Scale from 1 to 0.75 |
| .scale-down-large | Scale from 1 to 0.5 |
| .scale-down-small | Scale from 1 to 0.9 |
| .scale-up | Scale from 1 to 1.25 |
| .scale-up-large | Scale from 1 to 1.5 |
| .scale-up-small | Scale from 1 to 1.1 |

#### Shake
| Name |  Description |
|--|--|
| .shake-horizontal | Right-to-left movement, 10px |
| .shake-horizontal-large | Right-to-left movement, 15px |
| .shake-horizontal-small | Right-to-left movement, 5px |
| .shake-vertical | Up-to-down movement, 10px |
| .shake-vertical-large | Up-to-down movement, 15px |
| .shake-vertical-small | Up-to-down movement, 5px |

#### Slide
| Name |  Description |
|--|--|
| .slide-in-down | Move object from 100% down to 0% |
| .slide-in-left | Move object from 100% left to 0%  |
| .slide-in-right | Move object from 1000% right 0%  |
| .slide-in-up | Move object from 100% up 0% |
| .slide-out-down | Move object from 0% to down 100% |
| .slide-out-left | Move object from 0% to left 100% |
| .slide-out-right | Move object from 0% to right 100% |
| .slide-out-up | Move object from 0% to up 100% |

#### Delay
| Name |  Description |
|--|--|
| .delay-500 | Set animation delay to 500ms |
| .delay-750 | Set animation delay to 750ms |
| .delay-1000 | Set animation delay to 1000ms |
| .delay-1500 | Set animation delay to 1500ms |
| .delay-2000 | Set animation delay to 2000ms |
| .delay-2500 | Set animation delay to 2500ms |
| .delay-3000 | Set animation delay to 3000ms |
| .delay-3500 | Set animation delay to 3500ms |

#### Duration
| Name |  Description |
|--|--|
| .duration-150 | Set duration to 150ms |
| .duration-200 | Set duration to 200ms |
| .duration-250 | Set duration to 250ms |
| .duration-300 | Set duration to 300ms |
| .duration-350 | Set duration to 350ms |
| .duration-400 | Set duration to 400ms |
| .duration-450 | Set duration to 400ms |
| .duration-500 | Set duration to 500ms |
| .duration-550 | Set duration to 550ms |
| .duration-600 | Set duration to 600ms |
| .duration-650 | Set duration to 650ms |
| .duration-700 | Set duration to 700ms |
| .duration-750 | Set duration to 750ms |
| .duration-800 | Set duration to 800ms |
| .duration-850 | Set duration to 850ms |
| .duration-900 | Set duration to 900ms |
| .duration-950 | Set duration to 950ms |
| .duration-1000 | Set duration to 1000ms |

#### Timing
| Name |  Description |
|--|--|
| .timing-ease-in-out | Set animation cycle progress to ease-in-out |
| .timing-ease-in-out | Set animation cycle progress to ease-in |
| .timing-ease-in-out | Set animation cycle progress to ease-out |
| .timing-ease-in-out | Set animation cycle progress to ease |
| .timing-linear | Set animation cycle progress to linear (default) |

### CSS

 The styles can be imported into your existing codebase by using PostCSS imports, or by including the standalone CSS file in your project.

## Demo

Example implementations can be found in the `demo` directory.
