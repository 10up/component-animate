# 10up Animate

10up Animate is a small utility animation library. It (currently) consists of a
series of CSS classes that can be combined or used in isolation to bring small
elements of motion into a UI.

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

#### Duration
| Name |  Description |
|--|--|
| .duration-500 | Set duration to 500ms |
| .duration-750 | Set duration to 750ms |
| .duration-1000 | Set duration to 1000ms |
| .duration-1500 | Set duration to 1500ms |
| .duration-2000 | Set duration to 2000ms |
| .duration-2500 | Set duration to 2500ms |
| .duration-3000 | Set duration to 3000ms |
| .duration-3500 | Set duration to 3500ms |

### CSS

 The styles can be imported into your existing codebase by using PostCSS imports, or by including the standalone CSS file in your project.

## Demo

Example implementations can be found in the `demo` directory.
