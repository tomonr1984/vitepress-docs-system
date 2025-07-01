# VitePress Documentation System

Claude Code用のドキュメンテーション管理システムです。カスタムコマンドによる自動化とVitePressベースの多言語対応サイトで、統一された品質の高いツールドキュメンテーションを提供します。

## 🌟 特徴

- 🤖 **Claude Code統合**: 5つのカスタムコマンドによる自動ドキュメント生成
- 📚 **統一された構造**: すべてのツールで一貫した5セクション構造（概要、インストール、使い方、API、トラブルシューティング）
- 🌐 **多言語対応**: 日本語・英語での完全サポート
- ⚡ **自動化ワークフロー**: `doc-full` → `translate-docs` → `update-nav` の簡単3ステップ
- 🚀 **高速サイト**: VitePressによる最適化されたパフォーマンス
- 📊 **品質管理**: 標準化されたドキュメンテーションガイドライン

## 📋 前提条件

- Node.js 20.11.0 以上
- npm 10.2.4 以上
- [Volta](https://volta.sh/) (推奨、バージョン管理用)

## 🚀 クイックスタート

### 1. リポジトリのクローン

```bash
git clone https://github.com/tomonr1984/vitepress-docs-system.git
cd vitepress-docs-system
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run docs:dev
```

サイトは `http://localhost:5173` で利用可能になります。

## 📁 プロジェクト構造

```
├── docs/
│   ├── .vitepress/
│   │   └── config.ts              # VitePress設定
│   ├── index.md                   # 日本語ホームページ
│   ├── en/
│   │   ├── index.md              # 英語ホームページ
│   │   └── tools/                # 英語版ツールドキュメント
│   ├── guide/
│   │   └── getting-started.md    # 始め方ガイド
│   └── tools/                    # 日本語版ツールドキュメント
├── templates/
│   ├── tool-template/            # 新しいツール用テンプレート
│   │   ├── ja/                   # 日本語版テンプレート
│   │   └── en/                   # 英語版テンプレート
│   └── HOW_TO_ADD_NEW_TOOL.md   # ツール追加ガイド
├── DOCUMENTATION_STANDARDS.md   # ドキュメンテーション標準
├── package.json                 # 依存関係とVolta設定
└── README.md                    # このファイル
```

## 🔧 使用方法

### 新しいツールの追加（推奨方法：Claude Codeカスタムコマンド）

このリポジトリには、Claude Codeでの効率的なドキュメント生成のための5つのカスタムコマンドが用意されています：

#### 自動化されたワークフロー
```bash
# 1. 完全なドキュメント生成（英語版）
doc-full [project-path|project-name]

# 2. 日本語翻訳
translate-docs [project-name]

# 3. ナビゲーション更新
update-nav
```

#### 利用可能なコマンド
- **`doc-full`** - 5セクション完全ドキュメント生成（概要、インストール、使用方法、API、トラブルシューティング）
- **`doc-api`** - APIリファレンス生成
- **`doc-update`** - 既存ドキュメント更新
- **`translate-docs`** - 日本語翻訳（プロジェクト名のみ指定可能）
- **`update-nav`** - サイトナビゲーション更新

### 手動での追加（特別なカスタマイズが必要な場合）

詳細な手順は [ガイドドキュメント](docs/guide/getting-started.md) および [テンプレートガイド](docs/guide/templates.md) を参照してください。

### 開発コマンド

```bash
# 開発サーバー起動
npm run docs:dev

# 本番ビルド
npm run docs:build

# 本番プレビュー
npm run docs:preview
```

## 📖 ドキュメンテーション標準

このリポジトリでは、一貫した品質を保つために厳格な[ドキュメンテーション標準](DOCUMENTATION_STANDARDS.md)を定めています。

### 必須セクション

すべてのツールドキュメントには以下のセクションが必要です：

1. **概要** (`index.md`) - ツールの紹介と主要機能
2. **インストール** (`installation.md`) - インストール手順と初期設定
3. **使用ガイド** (`usage.md`) - 基本的な使い方とワークフロー
4. **APIリファレンス** (`api.md`) - 完全なコマンドリファレンス
5. **トラブルシューティング** (`troubleshooting.md`) - よくある問題と解決方法

### 品質チェックリスト

- [ ] すべての必須セクションが含まれている
- [ ] 日本語・英語両方で同等の内容を提供
- [ ] 実用的なコードサンプルが含まれている
- [ ] リンクが正しく動作する
- [ ] 一貫したスタイルガイドに準拠

## 🤝 貢献方法

### 新しいツールの追加

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/add-new-tool`)
3. [テンプレートガイド](templates/HOW_TO_ADD_NEW_TOOL.md)に従ってツールを追加
4. コミットしてプッシュ (`git commit -am 'Add new tool: [tool-name]'`)
5. プルリクエストを作成

### 既存ドキュメントの改善

1. 問題や改善点を特定
2. 変更を実装
3. [ドキュメンテーション標準](DOCUMENTATION_STANDARDS.md)に準拠していることを確認
4. プルリクエストを作成

### 問題の報告

問題を発見した場合は、以下の情報を含めてIssueを作成してください：

- 問題の詳細な説明
- 再現手順
- 期待される動作
- 実際の動作
- 環境情報（OS、ブラウザ、Node.jsバージョン等）

## 🔧 技術仕様

### 使用技術

- **フレームワーク**: VitePress 1.0.0
- **言語**: TypeScript, Markdown
- **スタイリング**: VitePress デフォルトテーマ
- **ビルドツール**: Vite
- **バージョン管理**: Volta (Node.js 20.11.0, npm 10.2.4)

### ブラウザサポート

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

### アクセシビリティ

- WCAG 2.1 AA準拠
- キーボードナビゲーション対応
- スクリーンリーダー対応

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

## 🆘 サポート

- **ドキュメント**: [Getting Started Guide](docs/guide/getting-started.md)
- **Issue**: GitHub Issues で問題を報告
- **Discussion**: GitHub Discussions でコミュニティと議論

## 🙏 謝辞

このプロジェクトは以下の優れたオープンソースプロジェクトに支えられています：

- [VitePress](https://vitepress.dev/) - 高速な静的サイトジェネレーター
- [Vue.js](https://vuejs.org/) - プログレッシブなJavaScriptフレームワーク
- [Vite](https://vitejs.dev/) - 次世代のフロントエンドビルドツール

---

**🚀 高品質なドキュメンテーションで、優れたツールをより多くの人に届けましょう！**