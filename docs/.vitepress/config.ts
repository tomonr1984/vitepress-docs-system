import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Documentation',
  description: 'VitePress documentation site',
  base: '/vitepress-docs-system/',
  
  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      title: 'ツールドキュメント',
      description: '自作ツールのドキュメントサイト'
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Tools Documentation',
      description: 'Documentation site for custom tools'
    }
  },

  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'ガイド', link: '/guide/getting-started' },
      { text: 'ツール', link: '/tools/' }
    ],

    sidebar: {
      '/': [
        {
          text: 'ガイド',
          items: [
            { text: 'はじめに', link: '/guide/getting-started' },
            { text: 'コマンドリファレンス', link: '/guide/commands' },
            { text: 'テンプレート', link: '/guide/templates' },
            { text: 'ドキュメント標準', link: '/guide/documentation-standards' }
          ]
        },
        {
          text: 'ツール',
          items: [
            // ツールドキュメントのリンクがここに追加されます
            // 例: { text: 'My Tool', link: '/tools/my-tool/' }
          ]
        }
      ],
      '/en/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/en/guide/getting-started' },
            { text: 'Commands Reference', link: '/en/guide/commands' },
            { text: 'Templates', link: '/en/guide/templates' },
            { text: 'Documentation Standards', link: '/en/guide/documentation-standards' }
          ]
        },
        {
          text: 'Tools',
          items: [
            // Tool documentation links will be added here
            // Example: { text: 'My Tool', link: '/en/tools/my-tool/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tomonr1984/vitepress-docs-system' }
    ]
  }
})