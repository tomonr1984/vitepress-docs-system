# Getting Started

Welcome to the Tool Documentation Management Repository! This guide will help you understand how to generate and manage documentation for tools created with Claude Code.

## Overview

This repository provides an efficient documentation generation system for tools created with Claude Code, built with VitePress and featuring multi-language support. It's designed to help you automatically generate, maintain, and publish high-quality documentation for your tools.

## Installation

First, make sure you have the required dependencies:

```bash
npm install
```

## Development

To start the development server:

```bash
npm run docs:dev
```

Your documentation site will be available at `http://localhost:5173`.

## Building

To build the documentation for production:

```bash
npm run docs:build
```

## Preview

To preview the built documentation:

```bash
npm run docs:preview
```

## Generating Tool Documentation

After creating your tool with Claude Code, you can use the following custom commands to generate documentation:

### Available Commands

1. **`doc-full [project-path|project-name]`** - Generate Complete Documentation Set
   - Creates overview, installation, usage, API reference, and troubleshooting sections
   - Most comprehensive documentation generation

2. **`doc-api [project-path|project-name]`** - Generate API Documentation
   - Analyzes functions, interfaces, and type definitions to create API reference

3. **`doc-update [project-path|project-name]`** - Update Existing Documentation
   - Updates existing documentation based on codebase changes

4. **`translate-docs [project-name]`** - Create Japanese Translation
   - Translates English documentation to Japanese

5. **`update-nav`** - Update Site Navigation
   - Adds new projects to the site navigation

### Recommended Workflow

```bash
# 1. Generate complete documentation (English)
doc-full [project-path|project-name]

# 2. Translate to Japanese
translate-docs [project-name]

# 3. Update navigation
update-nav
```

For detailed template system information, see the [Templates Guide](./templates.md).

## Documentation Standards

This repository follows strict documentation standards (see DOCUMENTATION_STANDARDS.md in the repository root) to ensure consistent quality across all tool documentation.

## Next Steps

- Explore the [Tools section](/en/) to see available utilities
- Learn more about [VitePress](https://vitepress.dev/) features
- Read our documentation standards (DOCUMENTATION_STANDARDS.md in repository root)