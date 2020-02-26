<a href="https://10up.com/contact/"><img src="https://10updotcom-wpengine.s3.amazonaws.com/uploads/2016/10/10up-Github-Banner.png" width="850"></a>

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the __10up Component Scaffold__, which is hosted in the [10up Organization on GitHub](https://github.com/10up). These are mostly guidelines, not rules.

#### Table Of Contents

[Getting Started](#getting-started)
* [Existing Components](#existing-components)

[Creating a __new__ component](#creating-a-new-component)
* [New component guidelines](#new-component-guidelines)

## Getting Started

The 10up Component Scaffold is a boilerplate for creating and contributing new components to the [10up Component Library](https://10up.github.io/wp-component-library/). 10up components are eventually packaged in to NPM packages. If you have never published an NPM package then we recommend checking out: [How to create and publish your npm package Node module in just 10 minutes](https://www.signet.hr/how-to-create-and-publish-your-npm-package-node-module-in-just-10-minutes/). This will give you familiarity of how your package should be organized to expedite the package publishing process.

### Existing components

Here are some examples of existing 10up components that have been published using this scaffold:

* [10up/component-tabs](https://github.com/10up/component-tabs)
* [10up/component-accordion](https://github.com/10up/component-accordion)
* [10up/component-tooltip](https://github.com/10up/component-tooltip)
* [10up/component-navigation](https://github.com/10up/component-navigation)

## Creating a __new__ component

Please take a moment to review [the existing components](#existing-components) _before_ suggesting a _new_ component.

If you have an idea for a new component. Here are the general steps to getting your new component scaffolded and ready for review. For the sake of this example we're going to pretend we're creating a new Accordion component.

1. Clone a copy of the scaffold

    ```
    mkdir component-accordion
    cd component-accordion
    git clone https://github.com/10up/component-scaffold.git .
    ```

2. Initialize your own Git repo

    ```
    rm -rf .git
    git init
    ```

3. Search and replace the `tenup-scaffold` string with your new component string, e.g. `component-accordion`.
4. Begin engineering your new component. Please see the next section: [New component guidelines](#new-component-guidelines).

### New component guidelines

Please keep in mind the following when creating a new component:

* 10up generally aims for [WCAG 2.1](https://www.w3.org/TR/WCAG21/) AA-level accessibility.
* Be sure to update your component's README.
* Make liberal use of callbacks when writing a highly dynamic JavaScript-based component. See [`10up/component-accordion`](https://github.com/10up/component-accordion#callbacks) as an example.
