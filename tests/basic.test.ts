import { describe, it, expect } from 'vitest'
import { existsSync } from 'fs'
import { join } from 'path'

describe('Basic project structure', () => {
  it('should have required files', () => {
    const projectRoot = join(__dirname, '..')
    
    expect(existsSync(join(projectRoot, 'package.json'))).toBe(true)
    expect(existsSync(join(projectRoot, 'README.md'))).toBe(true)
    expect(existsSync(join(projectRoot, 'docs'))).toBe(true)
    expect(existsSync(join(projectRoot, 'docs/.vitepress/config.ts'))).toBe(true)
  })

  it('should have documentation standards file', () => {
    const projectRoot = join(__dirname, '..')
    expect(existsSync(join(projectRoot, 'docs/documentation-standards.md'))).toBe(true)
  })

  it('should have template files', () => {
    const projectRoot = join(__dirname, '..')
    expect(existsSync(join(projectRoot, 'templates'))).toBe(true)
    expect(existsSync(join(projectRoot, 'templates/tool-template'))).toBe(true)
  })
})