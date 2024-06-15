# Shared Libraries

This repository contains shared libraries that can be used across multiple microservices projects. These libraries are designed to provide common functionality and utilities to enhance development efficiency.

## Installation

To use these shared libraries in your microservices project, you can install them via npm. Simply add the following line to your project's `package.json` file:

```json
"dependencies": {
    "shared-libraries": "git+https://github.com/your-repo/shared-libraries.git"
}
```

Then, run `npm install` to fetch and install the shared libraries.

## Usage

Once the shared libraries are installed, you can import and use them in your microservices code. Here's an example of how to import a shared library module:

```javascript
const { SomeUtility } = require("shared-libraries");

// Use the utility function
SomeUtility.doSomething();
```

Please refer to the documentation of each shared library module for more details on their usage and available functionalities.
