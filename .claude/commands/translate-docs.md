# Create Japanese Documentation

Translate English documentation to Japanese for specified projects in the tools directory.

## How to Specify the Target Project

This command determines the target project(s) based on the arguments ($ARGUMENTS).

1. **Specify by Project Name**:
   If you pass a project name (e.g., `cc-slash-command`) as an argument, the command will translate only that project's documentation.

2. **No Arguments**:
   If no arguments are provided, the command will translate documentation for all projects that in `docs/en/` directory.

## Translation Process

For each target project:

1. **Source Directory**: `docs/en/tools/<project-name>/`
2. **Target Directory**: `docs/tools/<project-name>/`
3. **File Preservation**: All filenames will be maintained (e.g., `index.md`, `api.md`, `installation.md`)

## Files to Translate

The command will translate all `.md` files found in the English (`docs/en/tools/<project-name>/`) directory:
- `index.md` - Overview and Introduction
- `installation.md` - Installation Guide  
- `usage.md` - Usage Guide
- `api.md` - API Reference
- `troubleshooting.md` - Troubleshooting
- Any other `.md` files present

## Translation Guidelines

- Translate all content to natural Japanese
- Preserve markdown formatting and structure
- Keep code examples and technical terms accurate
- Maintain links and cross-references
- Preserve any frontmatter or metadata

## Output

The command will create the Japanese documentation in the `docs/tools/<project-name>/` directory for each project, maintaining the same file structure as the English version.

$ARGUMENTS