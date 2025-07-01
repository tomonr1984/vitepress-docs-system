# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based documentation management system for tools created with Claude Code, featuring automated documentation generation through custom commands and multi-language support (Japanese/English).

## Development Commands

```bash
# Development server (localhost:5173)
npm run docs:dev

# Production build
npm run docs:build

# Preview production build
npm run docs:preview

# Clean build cache and output
npm run clean

# Linting (placeholder - not configured yet)
npm run lint

# Testing (placeholder - not configured yet)
npm run test
```

## CI/CD Pipeline

This repository uses GitHub Actions for continuous integration and deployment:

### CI Workflow (`.github/workflows/ci.yml`)
- Runs on pull requests and pushes to main
- Node.js 20.11.0 environment setup
- Automated build verification
- Link checking and homepage accessibility validation

### Deployment Workflow (`.github/workflows/deploy.yml`)
- Automatic deployment to GitHub Pages on main branch pushes
- Build artifacts uploaded to GitHub Pages
- Can be manually triggered via workflow_dispatch

## Custom Documentation Commands

This repository includes 5 custom commands in `.claude/commands/` for automated documentation generation.

### Command Structure
All custom commands are stored as markdown files in `.claude/commands/` and contain specific instructions for Claude Code. Each command file defines:
- Target project specification logic
- Output format and location
- File generation templates
- Processing rules and constraints

### Core Documentation Generation
- **`doc-full [project-path|project-name]`** - Generate complete 5-section documentation set (overview, installation, usage, api, troubleshooting)
- **`doc-api [project-path|project-name]`** - Generate API reference only
- **`doc-update [project-path|project-name]`** - Update existing documentation based on codebase changes

### Localization and Navigation  
- **`translate-docs [project-name]`** - Translate English docs to Japanese (works only with project names, not paths, as it operates on `docs/en/tools/` → `docs/tools/`)
- **`update-nav`** - Add new projects to VitePress navigation and main index pages

### Project Specification Patterns
- **Project name**: `my-tool` → targets `~/src/claude-code/tools/my-tool`
- **Absolute path**: `/full/path/to/project` → targets specified path  
- **Relative path**: `./local-tool` → targets relative path
- **No arguments**: targets current working directory (except `translate-docs` and `update-nav`)

## Architecture and File Structure

### Key Architectural Decisions
- **Dual Language Design**: Japanese as root locale, English with `/en/` prefix
- **Standardized Documentation**: Mandatory 5-section structure for all tools
- **Automated Generation**: Custom Claude Code commands handle most documentation creation
- **Template-based Fallback**: Manual templates available when automation is insufficient
- **CI/CD Integration**: Automated builds and deployments via GitHub Actions

### Multi-language Structure
```
docs/
├── .vitepress/config.ts     # VitePress configuration with i18n
├── index.md                 # Japanese homepage  
├── en/                      # English content root
│   ├── index.md            # English homepage
│   ├── guide/              # English guides
│   └── tools/              # English tool docs
├── guide/                   # Japanese guides  
└── tools/                   # Japanese tool docs
```

### Documentation Standards
All tools follow a mandatory 5-section structure:
1. `index.md` - Overview and key features
2. `installation.md` - Setup and prerequisites  
3. `usage.md` - Basic usage and workflows
4. `api.md` - Complete command/function reference
5. `troubleshooting.md` - Common issues and solutions

### Template System
- Templates located in `templates/tool-template/ja/` and `templates/tool-template/en/`
- Used for manual tool addition when custom commands are insufficient
- Includes placeholder system for automated replacement with patterns like `[TOOL_NAME]`, `[TOOL_DESCRIPTION_JA]`, etc.
- Custom commands generate content directly without templates, but templates serve as fallback and reference

## VitePress Configuration

The site uses a dual-language setup with:
- **Root locale**: Japanese (default)
- **Secondary locale**: English (`/en/` prefix)
- **Navigation**: Sidebar configured for both languages in `docs/.vitepress/config.ts`
- **Theme**: VitePress default theme with custom navigation structure

## File Analysis Rules

When generating documentation with `doc-full`, the system:
- Respects `.gitignore` files and patterns
- Skips files larger than 1MB
- Excludes binary files automatically
- Targets specific file types: code files (`.py`, `.js`, `.ts`, etc.), config files (`.json`, `.yaml`, etc.), and documentation files
- Excludes common build/cache directories (`node_modules/`, `dist/`, `__pycache__/`, etc.)

## Tool Addition Workflow

### Automated (Recommended)
```bash
doc-full [new-tool-name]    # Generate English docs
translate-docs [new-tool-name]  # Create Japanese version  
update-nav                   # Add to navigation
```

### Manual (For Special Cases)
1. Create directories: `docs/tools/[tool-name]/` and `docs/en/tools/[tool-name]/`
2. Copy templates from `templates/tool-template/`
3. Edit content and customize
4. Update `docs/.vitepress/config.ts` sidebar
5. Update main index pages

## Quality Standards

Refer to `DOCUMENTATION_STANDARDS.md` (336 lines) for detailed guidelines covering:
- Content structure and formatting
- Code example requirements  
- Multi-language consistency
- Link validation
- Accessibility requirements

## Version Management

- **Node.js**: 20.11.0 (managed by Volta)
- **npm**: 10.2.4 (managed by Volta)
- **VitePress**: ^1.6.3

## Permissions

The `.claude/settings.local.json` allows:
- `mkdir` operations for directory creation
- `find` operations for file discovery
- `npm run docs:build` for production builds

## Development Workflow

### Typical Development Process
1. Start development server: `npm run docs:dev`
2. Make changes to documentation or templates
3. Changes automatically hot-reload in browser
4. Before committing: `npm run docs:build` to verify build
5. Use custom commands for automated documentation generation

### Quality Assurance
- All builds are verified via GitHub Actions CI
- Documentation structure follows standardized 5-section format
- Both Japanese and English versions must be maintained
- Links and accessibility are automatically checked

## Common Development Tasks

### Adding a New Tool Documentation
```bash
# Using Claude Code custom commands (recommended)
doc-full my-new-tool          # Generate English docs
translate-docs my-new-tool    # Create Japanese version
update-nav                    # Update site navigation
```

### Manual Documentation Updates
```bash
# Edit existing documentation files directly
# Then run build to verify
npm run docs:build
```

### Troubleshooting Development Issues

#### Build Failures
- Ensure all markdown files have valid frontmatter
- Check that all internal links are valid
- Verify VitePress config syntax in `docs/.vitepress/config.ts`

#### Custom Command Issues  
- Commands expect specific directory structures
- `translate-docs` only works with project names, not paths
- Commands target `~/src/claude-code/tools/` by default for project names

#### Hot Reload Not Working
- Restart dev server: `npm run docs:dev`
- Clear cache: `npm run clean` then restart
- Check for syntax errors in modified files