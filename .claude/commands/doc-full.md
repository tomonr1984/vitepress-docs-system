# Generate Complete Documentation Set

Generate a complete documentation set for a specified project in VitePress format.

## How to Specify the Target Project

This command determines the target project directory based on the arguments ($ARGUMENTS).

1.  **Specify by Project Name**:
    If you pass a project name (e.g., `my-tool`) as an argument, the command will target `~/src/claude-code/tools/<project_name>`.

2.  **Specify by Path**:
    If you pass an absolute or relative path (e.g., `~/my-projects/another-tool` or `./local-tool`) as an argument, the command will target that path directly.

3.  **No Arguments**:
    If no arguments are provided, the command will target the current working directory.

## Output Format

The generated documentation will be created in the VitePress English directory: `./docs/en/tools/<project-name>/`.

## Documentation Files to Generate

Analyze the source code and comments of the target project to generate the following files:

1.  **index.md** - Overview and Introduction
    * Project description
    * Key features
    * Quick links to other sections

2.  **installation.md** - Installation Guide
    * Prerequisites
    * Installation methods (npm, yarn, pnpm)
    * Global vs. local installation
    * Verification steps

3.  **usage.md** - Usage Guide
    * Basic usage examples
    * Common workflows
    * Configuration options
    * Tips and best practices

4.  **api.md** - API Reference
    * All commands/functions/modules
    * Parameters and options
    * Return values
    * Code examples

5.  **troubleshooting.md** - Troubleshooting
    * Common issues and solutions

When generating each file, please prefix it with the following header:
`### File: docs/en/tools/[project-name]/[filename].md`

Note: Use lowercase for both `[project-name]` and `[filename]` in the output paths.

## File Analysis Guidelines

Before analyzing files, apply the following filtering rules to avoid memory issues and improve performance:

### 1. Respect .gitignore Files
- Parse .gitignore files in the target directory and its subdirectories
- Skip files and directories matching .gitignore patterns
- Follow standard .gitignore syntax and precedence rules

### 2. File Size Limits
- Skip files larger than 1MB (configurable)
- Log skipped large files for user awareness
- Focus on reasonably-sized source files for documentation

### 3. Binary File Detection
- Automatically detect and skip binary files
- Use file extensions and magic numbers for detection

### 4. Include Only Relevant File Types
Only analyze files with these extensions:
- **Code files**: `.py`, `.js`, `.ts`, `.jsx`, `.tsx`, `.java`, `.cpp`, `.c`, `.h`, `.cs`, `.go`, `.rs`, `.rb`, `.php`, `.swift`, `.kt`, `.scala`
- **Config files**: `.json`, `.yaml`, `.yml`, `.toml`, `.ini`, `.cfg`, `.conf`
- **Documentation**: `.md`, `.rst`, `.txt`, `.adoc`
- **Build files**: `Makefile`, `CMakeLists.txt`, `setup.py`, `pyproject.toml`, `package.json`, `Cargo.toml`

## Exclusion Rules

The following directories and files should be automatically excluded from analysis:

### Directory Exclusions
- `node_modules/` - Node.js dependencies
- `__pycache__/` - Python bytecode cache
- `.git/` - Git repository data
- `venv/`, `.venv/`, `env/`, `.env/` - Python virtual environments
- `dist/`, `build/`, `target/` - Build output directories
- `.idea/`, `.vscode/` - IDE configuration
- `*.egg-info/` - Python package metadata
- `.tox/` - Python testing environments
- `.pytest_cache/` - pytest cache
- `coverage/`, `htmlcov/` - Coverage reports
- `.mypy_cache/` - MyPy cache
- `.cache/` - General cache directories
- `logs/`, `log/` - Log directories
- `tmp/`, `temp/` - Temporary directories

### File Exclusions by Extension
- **Binary executables**: `.exe`, `.dll`, `.so`, `.dylib`, `.bin`
- **Images**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.bmp`, `.tiff`, `.ico`, `.svg`
- **Archives**: `.zip`, `.tar`, `.gz`, `.bz2`, `.xz`, `.7z`, `.rar`
- **Documents**: `.pdf`, `.doc`, `.docx`, `.xls`, `.xlsx`, `.ppt`, `.pptx`
- **Media**: `.mp3`, `.mp4`, `.avi`, `.mov`, `.wav`, `.flv`
- **Fonts**: `.ttf`, `.otf`, `.woff`, `.woff2`
- **Database**: `.db`, `.sqlite`, `.sqlite3`

### Special File Exclusions
- `.DS_Store` - macOS system files
- `Thumbs.db` - Windows thumbnail cache
- `*.pyc`, `*.pyo` - Python compiled files
- `*.class` - Java compiled files
- `*.o`, `*.obj` - Object files
- `*.lock` - Lock files (except for documentation purposes)

$ARGUMENTS