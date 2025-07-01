# Update VitePress Documentation

Update the VitePress documentation based on the current codebase changes.

## How to Specify the Target Project

This command determines the target project directory based on the arguments ($ARGUMENTS).

1.  **Specify by Project Name**:
    If you pass a project name (e.g., `my-tool`) as an argument, the command will target `~/src/claude-code/tools/<project_name>`.

2.  **Specify by Path**:
    If you pass an absolute or relative path (e.g., `~/my-projects/another-tool` or `./local-tool`) as an argument, the command will target that path directly.

3.  **No Arguments**:
    If no arguments are provided, the command will target the current working directory.

## Output Format

The updated documentation will be created in the VitePress English directory: `./docs/en/tools/<project-name>/`.

## Update Process

1. Analyze the changes in the codebase
2. Identify which documentation sections need updates
3. Generate updated markdown files maintaining the existing structure
4. Ensure all code examples are current and working
5. Update API documentation if interfaces have changed
6. Add any new features or configuration options

## Output Format Requirements

- Provide the updated content for each changed file
- Use the path format: `docs/en/tools/[project-name]/[filename].md`
- Highlight what has changed with a brief summary
- Start each file section with: `### File: docs/en/tools/[project-name]/[filename].md`

Note: Use lowercase for both `[project-name]` and `[filename]` in the output paths.

$ARGUMENTS
