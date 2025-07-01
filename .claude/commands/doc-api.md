# Generate API Documentation

Analyze the codebase and generate comprehensive API documentation in VitePress format.

## How to Specify the Target Project

This command determines the target project directory based on the arguments ($ARGUMENTS).

1.  **Specify by Project Name**:
    If you pass a project name (e.g., `my-tool`) as an argument, the command will target `~/src/claude-code/tools/<project_name>`.

2.  **Specify by Path**:
    If you pass an absolute or relative path (e.g., `~/my-projects/another-tool` or `./local-tool`) as an argument, the command will target that path directly.

3.  **No Arguments**:
    If no arguments are provided, the command will target the current working directory.

## Output Format

The generated API documentation will be created in the VitePress English directory: `./docs/en/tools/<project-name>/api.md`.

## Documentation Content

1. Extract all public functions, interfaces, and types
2. Document parameters, return values, and examples
3. Group by module or functionality
4. Include TypeScript type definitions
5. Add practical usage examples

When generating the file, please prefix it with the following header:
`### File: docs/en/tools/[project-name]/api.md`

Note: Use lowercase for `[project-name]` in the output path.

$ARGUMENTS
