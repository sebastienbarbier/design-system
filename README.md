# sebastienbarbier design system package

Welcome to the **sebastienbarbier Design System**! This repository contains a set of shared CSS styles that can be used across multiple projects to ensure consistency and reusability.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with **My Design System**, you will need to install it into your project. Follow the instructions below to include it in your setup.

## Installation

```
npm i
```

## Usage

### Run as dev

```
npm run storybook
```

### Build

```
npm run build-storybook
```

Build generate then a static web application within the `storybook-static` folder. You can display its content using any http server like `python3 -m http.server`

### Release

Manually release to npmjs. This should be automated using github actions.

```
npm run build
npm login
npm publish
```

## Contributing

We welcome contributions to My Design System! If you have ideas for improvements or have found a bug, please open an issue or submit a pull request. Follow the guidelines below to get started:

- Fork the repository.
- Create a new branch: git checkout -b feature/my-feature.
- Make your changes and commit them: git commit -m 'Add my feature'.
- Push to the branch: git push origin feature/my-feature.
- Open a pull request.

For more details, see our CONTRIBUTING.md.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

https://jaketrent.com/post/package-json-style-attribute/