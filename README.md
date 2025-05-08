<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>nestjs-module-generator</title>
</head>
<body>

  <h1>nestjs-module-generator</h1>

  <p>A command-line tool for generating NestJS modules with the necessary folder structure and boilerplate files. It automates the creation of common files like controllers, services, DTOs, entities, and interfaces, making it easy to quickly scaffold new modules in your NestJS application.</p>

  <hr>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <hr>

  <h2 id="installation">Installation</h2>

  <p>To install the package globally and use the CLI tool, run the following command:</p>

  <pre><code>npm install -g nestjs-module-generator</code></pre>

  <p>If you want to use it locally within your project:</p>

  <pre><code>npm install nestjs-module-generator --save-dev</code></pre>

  <hr>

  <h2 id="usage">Usage</h2>

  <p>Once the package is installed, you can use the <code>generate-module</code> command to create a new NestJS module with all the necessary boilerplate files.</p>

  <h3>Command Syntax:</h3>
  <pre><code>generate-module &lt;module-name&gt;</code></pre>
  <p>Where <code>&lt;module-name&gt;</code> is the name of the module you want to create (e.g., <code>products</code>, <code>users</code>, etc.).</p>

  <h3>Example:</h3>

  <p>To create a module for <code>products</code>:</p>
  
  <pre><code>generate-module products</code></pre>

  <p>This will generate the following folder structure:</p>

  <pre>
  products/
  ├── products.controller.ts
  ├── products.service.ts
  ├── products.module.ts
  ├── dto/
  │   ├── create-products.dto.ts
  │   └── update-products.dto.ts
  ├── entities/
  │   └── products.entity.ts
  └── interfaces/
      └── products.interface.ts
  </pre>

  <p>Each file is pre-configured with the necessary boilerplate for a typical NestJS module, ready for you to start implementing business logic.</p>

  <hr>

  <h2 id="features">Features</h2>
  <ul>
    <li><strong>Controller</strong>: Generates a basic controller with a route setup.</li>
    <li><strong>Service</strong>: Generates a basic service class.</li>
    <li><strong>Module</strong>: Generates the module file with necessary imports and providers.</li>
    <li><strong>DTOs</strong>: Generates DTOs for creating and updating entities.</li>
    <li><strong>Entities</strong>: Generates the entity file (using TypeORM).</li>
    <li><strong>Interfaces</strong>: Generates an interface for the module.</li>
  </ul>

  <hr>

  <h2 id="license">License</h2>

  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

  <hr>

  <h2>Contributing</h2>

  <p>Feel free to open issues and submit pull requests for enhancements or bug fixes. All contributions are welcome!</p>

  <hr>

  <h2>Support</h2>

  <p>For support, please open an issue in the GitHub repository or contact the author directly.</p>

</body>
</html>
