# Custom Commands Reference

This page provides detailed documentation for the custom commands available in the VitePress documentation generation system.

## 🎯 Command Overview

Currently available custom commands:

| Command | Purpose | Target |
|---------|---------|---------|
| `doc-full` | Generate complete documentation | Entire project |
| `doc-api` | Generate API documentation | APIs, functions, types |
| `doc-update` | Update existing documentation | Existing docs |
| `translate-docs` | Create Japanese translation | English docs |
| `update-nav` | Update site navigation | Site configuration |

## 📋 Detailed Specifications

### 1. `doc-full` - Generate Complete Documentation Set

**Purpose**: Generate a complete documentation set for a new tool

**Syntax**:
```bash
doc-full [project-path|project-name]
doc-full  # Target current directory
```

**Project Specification**:
- **Project name**: `my-tool` → targets `~/src/claude-code/tools/my-tool`
- **Absolute path**: `/full/path/to/project` → targets specified path
- **Relative path**: `./local-tool` → targets relative path
- **No arguments**: targets current working directory

**Generated Files**:
- `docs/en/tools/[project-name]/index.md` - Overview and introduction
- `docs/en/tools/[project-name]/installation.md` - Installation guide
- `docs/en/tools/[project-name]/usage.md` - Usage guide
- `docs/en/tools/[project-name]/api.md` - API reference
- `docs/en/tools/[project-name]/troubleshooting.md` - Troubleshooting

**Analyzed File Types**:
- Code files: `.py`, `.js`, `.ts`, `.jsx`, `.tsx`, `.java`, `.cpp`, etc.
- Config files: `.json`, `.yaml`, `.yml`, `.toml`, etc.
- Documentation: `.md`, `.rst`, `.txt`
- Build files: `package.json`, `Cargo.toml`, `setup.py`, etc.

**Excluded Directories**:
- `node_modules/`, `__pycache__/`, `.git/`
- `venv/`, `.venv/`, `env/`, `.env/`
- `dist/`, `build/`, `target/`
- `.idea/`, `.vscode/`

---

### 2. `doc-api` - Generate API Documentation

**Purpose**: Generate API specification documentation for the project

**Syntax**:
```bash
doc-api [project-path|project-name]
doc-api  # Target current directory
```

**Generated Content**:
- Public functions and methods details
- Interface and type definitions
- Parameter and return value descriptions
- Practical usage examples
- TypeScript type definitions (when applicable)

**Output File**:
- `docs/en/tools/[project-name]/api.md`

---

### 3. `doc-update` - Update Existing Documentation

**Purpose**: Update existing documentation based on codebase changes

**Syntax**:
```bash
doc-update [project-path|project-name]
doc-update  # Target current directory
```

**Update Process**:
1. Analyze codebase changes
2. Identify documentation sections requiring updates
3. Update content while maintaining existing structure
4. Verify and update code examples
5. Add new features and configuration options

**Target Files**:
- All `.md` files in `docs/en/tools/[project-name]/`

---

### 4. `translate-docs` - Create Japanese Translation

**Purpose**: Translate English documentation to Japanese

**Syntax**:
```bash
translate-docs [project-name]  # Translate specific project only
translate-docs                 # Translate all projects
```

**Translation Process**:
- **Source**: `docs/en/tools/[project-name]/`
- **Output**: `docs/tools/[project-name]/`
- **Filenames**: Maintained from original

**Translated Files**:
- `index.md` → Overview and introduction
- `installation.md` → Installation guide
- `usage.md` → Usage guide
- `api.md` → API reference
- `troubleshooting.md` → Troubleshooting
- Other `.md` files

**Translation Guidelines**:
- Natural Japanese translation
- Preserve markdown formatting and structure
- Maintain accuracy of code examples and technical terms
- Preserve links and cross-references
- Preserve frontmatter and metadata

---

### 5. `update-nav` - Update Site Navigation

**Purpose**: Add new projects to site navigation

**Syntax**:
```bash
update-nav
```

**Update Targets**:
1. **`docs/index.md`** - Main page tool list
2. **`docs/.vitepress/config.ts`** - Sidebar navigation

**Auto-detection**:
- Scans `docs/en/tools/` directory
- Compares with existing navigation
- Automatically adds missing projects

**Added Elements**:
```javascript
// English sidebar
{
  text: 'Project Name',
  link: '/en/tools/project-name/',
  collapsed: false,
  items: [
    { text: 'Overview', link: '/en/tools/project-name/' },
    { text: 'Installation', link: '/en/tools/project-name/installation' },
    { text: 'Usage Guide', link: '/en/tools/project-name/usage' },
    { text: 'API Reference', link: '/en/tools/project-name/api' },
    { text: 'Troubleshooting', link: '/en/tools/project-name/troubleshooting' }
  ]
}

// Japanese sidebar (if translation exists)
{
  text: 'Project Name',
  link: '/tools/project-name/',
  collapsed: true,
  items: [
    { text: '概要', link: '/tools/project-name/' },
    { text: 'インストール', link: '/tools/project-name/installation' },
    { text: '使い方', link: '/tools/project-name/usage' },
    { text: 'API リファレンス', link: '/tools/project-name/api' },
    { text: 'トラブルシューティング', link: '/tools/project-name/troubleshooting' }
  ]
}
```

## 🚀 Recommended Workflows

### Creating Documentation for New Tools

```bash
# 1. Generate complete documentation
doc-full [project-path|project-name]

# 2. Create Japanese translation
translate-docs [project-name]

# 3. Update navigation
update-nav

# 4. Verify
npm run docs:dev
```

### Updating Existing Tools

```bash
# 1. Update documentation
doc-update [project-path|project-name]

# 2. Update Japanese version
translate-docs [project-name]

# 3. Verify
npm run docs:dev
```

## 🔧 Technical Details

### File Analysis Rules

- **File size limit**: Files over 1MB are skipped
- **Binary files**: Automatically detected and skipped
- **.gitignore**: Files excluded according to settings

### Output Format

- **Project names**: Unified in lowercase
- **Filenames**: Unified in lowercase
- **Structure**: Compliant with 5-section standard

### Performance Optimization

- Targets only relevant files
- Memory-efficient file analysis
- Incremental documentation generation

## 🔗 Related Links

- [Getting Started](./getting-started.md) - Basic usage
- [Templates](./templates.md) - Manual documentation creation
- [Documentation Standards](../documentation-standards) - Quality standards