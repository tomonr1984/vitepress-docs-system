# Template System

This guide explains the template system for manual documentation creation and special customization cases.

> **Note**: For regular documentation generation, please use the custom commands introduced in [Getting Started](./getting-started.md). The template system should only be used for learning purposes or special requirements.

## 📚 What is the Template System?

The template system provides scaffolding for manual documentation creation. It's useful in the following cases:

- **Learning purposes**: Understanding the documentation structure
- **Special customization**: Unique requirements not covered by standard commands
- **Incremental creation**: Building documentation step by step

## 🗂️ Template Structure

```
templates/
└── tool-template/
    ├── ja/          # Japanese templates
    │   ├── index.md
    │   ├── installation.md
    │   ├── usage.md
    │   ├── api.md
    │   └── troubleshooting.md
    └── en/          # English templates
        ├── index.md
        ├── installation.md
        ├── usage.md
        ├── api.md
        └── troubleshooting.md
```

## 🛠️ Manual Template Usage

### Step 1: Create Directories

```bash
# Create directories for the tool
mkdir -p docs/tools/[tool-name] docs/en/tools/[tool-name]
```

### Step 2: Copy Templates

```bash
# Copy Japanese templates
cp templates/tool-template/ja/* docs/tools/[tool-name]/

# Copy English templates
cp templates/tool-template/en/* docs/en/tools/[tool-name]/
```

### Step 3: Edit Content

Edit each file to replace with tool-specific information:

- **index.md**: Tool overview and key features
- **installation.md**: Setup instructions
- **usage.md**: Basic usage and workflows
- **api.md**: Detailed command/function specifications
- **troubleshooting.md**: Common issues and solutions

### Step 4: Update Configuration

1. **Navigation setup**: Add the tool to `docs/.vitepress/config.ts`
2. **Index update**: Add tool links to main pages

## 📖 Documentation Standards

All tools follow a unified **5-section structure**:

1. **Overview** - Tool purpose and key features
2. **Installation** - Setup procedures
3. **Usage Guide** - Basic usage and workflows
4. **API Reference** - Complete command specifications
5. **Troubleshooting** - Common issues and solutions

For detailed standards, see [Documentation Standards](../documentation-standards).

## 🎯 Recommendations

- **Try commands first**: Automated generation is sufficient in most cases
- **Gradual learning**: Understand structure with templates, then move to automation
- **Maintain consistency**: Don't deviate significantly from standard structure
- **Ensure quality**: Maintain the same quality level as other documentation

## 🔗 Related Links

- [Getting Started](./getting-started.md) - Basic usage
- [Documentation Standards](../documentation-standards) - Detailed specifications
- [VitePress Official Documentation](https://vitepress.dev/) - Platform documentation