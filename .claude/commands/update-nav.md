# Update Navigation for New Project

Update VitePress navigation (sidebar and top page) when a new project is added to ./docs/en/tools/.

This command will:

1. **Scan ./docs/en/tools/** for all available English projects
2. **Update docs/index.md** - Add new project to the tools list with link to its documentation
3. **Update docs/.vitepress/config.ts** - Add new project to both English and Japanese sidebar navigation

For each new project found:
- Add entry to the tools list in docs/index.md
- Add sidebar entry in docs/.vitepress/config.ts under both English (`/en/`) and Japanese (root) sections
- Use lowercase project names for consistency
- Generate proper navigation structure for both languages
- Support for Japanese translations (check for `docs/tools/project-name/` directory)

The command will automatically detect which projects are missing from the current navigation and add them by scanning ./docs/en/tools/ directory.

Format for index.md entries:
```markdown
- **[project-name](./en/tools/project-name/)** - Brief description
```

Format for English sidebar entries:
```javascript
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
```

Format for Japanese sidebar entries (if Japanese translation exists in docs/tools/project-name/):
```javascript
{
  text: 'Project Name (プロジェクト名)',
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

$ARGUMENTS