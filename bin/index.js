#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

// Convert to PascalCase
function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/g, s => s.replace('-', '').toUpperCase());
}

// Convert to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

const rawName = process.argv[2];

if (!rawName || !/^[a-zA-Z][a-zA-Z0-9-]*$/.test(rawName)) {
  console.error('❌ Please provide a valid module name: generate-module <module-name>');
  process.exit(1);
}

const className = toPascalCase(rawName);
const fileName = toKebabCase(className);

const basePath = join(process.cwd(), 'src', fileName);
const dtoPath = join(basePath, 'dto');
const entityPath = join(basePath, 'entities');
const interfacePath = join(basePath, 'interfaces');

[basePath, dtoPath, entityPath, interfacePath].forEach(dir => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
});

const templates = {
  controller: `import { Controller } from '@nestjs/common';
import { ${className}Service } from './${fileName}.service';

@Controller('api/v1/${fileName}')
export class ${className}Controller {
  constructor(private readonly ${fileName}Service: ${className}Service) {}
}
`,

  service: `import { Injectable } from '@nestjs/common';

@Injectable()
export class ${className}Service {}
`,

  module: `import { Module } from '@nestjs/common';
import { ${className}Controller } from './${fileName}.controller';
import { ${className}Service } from './${fileName}.service';

@Module({
  controllers: [${className}Controller],
  providers: [${className}Service],
  exports: [${className}Service],
})
export class ${className}Module {}
`,

  dto: {
    create: `export class Create${className}Dto {}`,
    update: `export class Update${className}Dto {}`,
  },

  entity: `import { Entity } from 'typeorm';

@Entity()
export class ${className}Entity {}
`,

  interface: `export interface I${className} {}`,
};

function writeFile(filePath, content) {
  writeFileSync(filePath, content);
  console.log(`✅ Created: ${filePath}`);
}

writeFile(join(basePath, `${fileName}.controller.ts`), templates.controller);
writeFile(join(basePath, `${fileName}.service.ts`), templates.service);
writeFile(join(basePath, `${fileName}.module.ts`), templates.module);
writeFile(join(dtoPath, `create-${fileName}.dto.ts`), templates.dto.create);
writeFile(join(dtoPath, `update-${fileName}.dto.ts`), templates.dto.update);
writeFile(join(entityPath, `${fileName}.entity.ts`), templates.entity);
writeFile(join(interfacePath, `${fileName}.interface.ts`), templates.interface);
