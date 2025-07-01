# Documentation Standards

This document defines the standards and guidelines for creating documentation in the tool documentation management repository.

## Purpose

- Ensure consistent documentation quality
- Provide readable and user-friendly documentation
- Maintain an easily maintainable structure
- Preserve multilingual support quality

## Documentation Structure Standards

### Required Sections

All tool documentation must include the following 5 sections:

1. **Overview** - `index.md`
2. **Installation** - `installation.md`
3. **Usage Guide** - `usage.md`
4. **API Reference** - `api.md`
5. **Troubleshooting** - `troubleshooting.md`

### Directory Structure

```
docs/
├── tools/
│   └── [tool-name]/
│       ├── index.md
│       ├── installation.md
│       ├── usage.md
│       ├── api.md
│       └── troubleshooting.md
└── en/
    └── tools/
        └── [tool-name]/
            ├── index.md
            ├── installation.md
            ├── usage.md
            ├── api.md
            └── troubleshooting.md
```

## Content Standards

### 1. Overview Page (index.md)

**Required Elements:**
- Tool name and brief description
- Bulleted list of main features (3-6 items)
- Quick links section
- Usage examples (3-5 items)
- Call to action (CTA)

**Structure Template:**
```markdown
# [Tool Name]
[Brief description]

## Overview
[Detailed overview]

## Key Features
- 🚀 **Feature 1**: Description
- 🔧 **Feature 2**: Description

## Quick Links
- [Installation](installation.md)
- [Usage](usage.md)
- [API Reference](api.md)
- [Troubleshooting](troubleshooting.md)
```

### 2. Installation Page (installation.md)

**Required Elements:**
- Prerequisites
- Multiple installation methods
- Installation verification steps
- Initial setup procedures
- Common issues and solutions

### 3. Usage Guide Page (usage.md)

**Required Elements:**
- Quick start example
- Basic usage methods (2-3 items)
- Commonly used workflows (2-3 items)
- Practical examples (2-3 items)
- Best practices (3-5 items)

### 4. API Reference Page (api.md)

**Required Elements:**
- Command overview
- Global options table
- Detailed specifications for each command
- Configuration file information
- Environment variables list
- Exit codes list

### 5. Troubleshooting Page (troubleshooting.md)

**Required Elements:**
- Common issues (3-5 items)
- Platform-specific issues
- Error messages and solutions
- Debugging methods
- Support information

## Writing Style Guide

### Basic Principles

1. **Clarity**: Avoid ambiguous expressions, use specific and clear language
2. **Conciseness**: Avoid redundant expressions, communicate necessary information efficiently
3. **Consistency**: Unify terminology, expressions, and structure
4. **Practicality**: Content based on actual usage scenarios

### Japanese Style

- **Honorifics**: Use "desu/masu" form
- **Punctuation**: Proper use of "、" and "。"
- **Katakana words**: Use common ones, explain technical terms on first use
- **English words**: Include alongside when necessary (e.g., "設定（configuration）")

### English Style

- **Tense**: Use present tense as standard
- **Person**: Use second person (you)
- **Tone**: Friendly but professional
- **Abbreviations**: Define on first use (e.g., CLI (Command Line Interface))

## Code and Command Notation

### Code Blocks

```markdown
# Always specify the language
```bash
command --option value
```

```javascript
const example = 'code';
```
```

### Inline Code

- Commands: `command`
- File names: `filename.ext`
- Configuration items: `config_option`
- Variables: `$VARIABLE`

### Placeholders

- Use square brackets: `[PLACEHOLDER]`
- Use descriptive names: `[YOUR_USERNAME]`

## Visual Elements

### Heading Structure

```markdown
# H1: Page title (only one per page)
## H2: Main sections
### H3: Subsections
#### H4: Detail items (as needed)
```

### Bullet Points and Numbered Lists

**Bullet points (unordered):**
```markdown
- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
```

**Numbered lists (procedures):**
```markdown
1. Step 1
2. Step 2
3. Step 3
```

### Tables

```markdown
| Item | Description | Default |
|------|-------------|---------|
| option1 | Description of function 1 | `default1` |
| option2 | Description of function 2 | `default2` |
```

### Emphasis and Highlighting

- **Important information**: `**bold**`
- *Light emphasis*: `*italic*`
- `Code elements`: backticks
- > Quotes or notes: quote notation

### Icons and Emojis

Use consistent emojis:
- 🚀 Features/Performance
- 🔧 Configuration/Customization
- 📊 Data/Analytics
- 🎯 Targeting/Accuracy
- 📚 Documentation/Learning
- 🌐 Network/Multilingual
- ⚠️ Warning/Caution
- ✅ Success/Confirmation
- ❌ Error/Failure

## Links and Navigation

### Internal Links

```markdown
- Relative path: [Usage Guide](usage.md)
- Absolute path: [Overview](/tools/my-tool/)
- Anchor links: [Section](#section-title)
```

### External Links

```markdown
- [External Site](https://example.com)
- Specify when opening in new tab
```

### Navigation Structure

Add links to related pages at the end of each page:

```markdown
## Related Information

- [Previous Page](previous.md) - Description of previous page
- [Next Page](next.md) - Description of next page
- [API Reference](api.md) - Detailed command reference
```

## Multilingual Support Standards

### Content Equivalence

- Provide equivalent information in Japanese and English versions
- Adjust content considering cultural context
- Prioritize natural expressions in each language

### File Structure Consistency

```
docs/tools/my-tool/index.md ←→ docs/en/tools/my-tool/index.md
```

### Link Consistency Between Languages

- Unified path structure
- Corresponding navigation elements
- Matching anchor links

## Quality Checklist

### Content Quality

- [ ] All required sections are included
- [ ] Information is accurate and up-to-date
- [ ] Practical examples are included
- [ ] Structure is readable
- [ ] Consistent style is used

### Technical Quality

- [ ] All links work correctly
- [ ] Code samples function properly
- [ ] Markdown notation is correct
- [ ] Multilingual versions are synchronized
- [ ] Responsive design compatible

### Accessibility

- [ ] Heading structure is logical
- [ ] Alternative text is properly set
- [ ] Information transmission not dependent on color
- [ ] Appropriate contrast ratio

## Review Process

### Creation Stage

1. Use templates
2. Replace placeholders
3. Create content
4. Self-review

### Review Stage

1. Verify technical accuracy
2. Confirm style guide compliance
3. Check links and navigation
4. Confirm multilingual version synchronization

### Pre-publication Check

1. Local build test
2. Verify all page functionality
3. Check mobile display
4. Performance test

## Maintenance Guidelines

### Regular Updates

- Verify information accuracy (quarterly)
- Check link validity (monthly)
- Synchronize with tool versions

### Quality Improvement

- Reflect user feedback
- Utilize analytics data
- Update best practices

### Consistency Maintenance

- Overall adjustment when adding new features
- Confirm style guide compliance
- Maintain multilingual version synchronization

By following these standards, we can maintain high-quality, consistent documentation and provide valuable resources for users.