# 新しいツールの追加方法

このドキュメントでは、VitePressドキュメンテーションサイトに新しいツールのドキュメントを追加する方法について説明します。

## 概要

新しいツールを追加するには、以下の2つの方法があります：

### 🚀 方法1: カスタムスラッシュコマンド（推奨）

`.claude/commands` にあるドキュメント作成コマンドを使用して自動生成：

```bash
# Claude Codeで以下のコマンドを実行
/docs:create-tool [tool-name] --description "ツールの説明" --features "主要機能1,機能2,機能3"
```

**メリット**:
- 自動的に最新の標準に準拠
- 手動作業の大幅削減
- 一貫した品質保証

### 📝 方法2: テンプレートシステム（フォールバック）

カスタムコマンドが利用できない場合や、手動でのカスタマイズが必要な場合：

1. ツールディレクトリとファイルの作成
2. VitePress設定の更新
3. コンテンツの作成
4. 多言語対応（必要に応じて）

## ステップ1: ディレクトリ構造の作成

### 1.1 ツールディレクトリの作成

```bash
# 日本語版
mkdir -p docs/tools/[TOOL_NAME]

# 英語版
mkdir -p docs/en/tools/[TOOL_NAME]
```

`[TOOL_NAME]` は、ツール名をケバブケース（小文字でハイフン区切り）に変換したものです。

**例**: `My Awesome Tool` → `my-awesome-tool`

### 1.2 必要なファイルの作成

各ツールには以下の5つのファイルが必要です：

```bash
# 日本語版
touch docs/tools/[TOOL_NAME]/index.md
touch docs/tools/[TOOL_NAME]/installation.md
touch docs/tools/[TOOL_NAME]/usage.md
touch docs/tools/[TOOL_NAME]/api.md
touch docs/tools/[TOOL_NAME]/troubleshooting.md

# 英語版
touch docs/en/tools/[TOOL_NAME]/index.md
touch docs/en/tools/[TOOL_NAME]/installation.md
touch docs/en/tools/[TOOL_NAME]/usage.md
touch docs/en/tools/[TOOL_NAME]/api.md
touch docs/en/tools/[TOOL_NAME]/troubleshooting.md
```

## ステップ2: テンプレートの使用

### 2.1 テンプレートのコピー

提供されているテンプレートを使用して、新しいツールのドキュメントを作成します：

```bash
# 日本語版テンプレートのコピー
cp templates/tool-template/ja/* docs/tools/[TOOL_NAME]/

# 英語版テンプレートのコピー
cp templates/tool-template/en/* docs/en/tools/[TOOL_NAME]/
```

### 2.2 プレースホルダーの置換

テンプレートファイル内の以下のプレースホルダーを実際の値に置換してください：

#### 基本情報
- `[TOOL_NAME]`: ツールの正式名称
- `[TOOL_DESCRIPTION_JA]`: ツールの日本語説明
- `[TOOL_DESCRIPTION_EN]`: ツールの英語説明
- `[TOOL_OVERVIEW_JA]`: ツールの日本語概要
- `[TOOL_OVERVIEW_EN]`: ツールの英語概要

#### 機能説明
- `[FEATURE_1_TITLE]`: 機能1のタイトル
- `[FEATURE_1_DESCRIPTION]`: 機能1の説明
- `[FEATURE_2_TITLE]`: 機能2のタイトル
- `[FEATURE_2_DESCRIPTION]`: 機能2の説明
- （以下同様）

#### コマンドとインストール
- `[TOOL_COMMAND]`: ツールのメインコマンド
- `[INSTALLATION_COMMAND_1]`: インストールコマンド1
- `[INSTALLATION_COMMAND_2]`: インストールコマンド2
- `[VERIFICATION_COMMAND]`: インストール確認コマンド

#### その他
- 各セクションの具体的な内容に応じてプレースホルダーを置換

## ステップ3: VitePress設定の更新

`docs/.vitepress/config.ts` ファイルを編集して、新しいツールをナビゲーションに追加します。

### 3.1 日本語版の設定

```typescript
// 日本語版のsidebarセクションに以下を追加
{
  text: '[TOOL_DISPLAY_NAME]',
  link: '/tools/[TOOL_NAME]/',
  collapsed: true,
  items: [
    { text: '概要', link: '/tools/[TOOL_NAME]/' },
    { text: 'インストール', link: '/tools/[TOOL_NAME]/installation' },
    { text: '使い方', link: '/tools/[TOOL_NAME]/usage' },
    { text: 'API リファレンス', link: '/tools/[TOOL_NAME]/api' },
    { text: 'トラブルシューティング', link: '/tools/[TOOL_NAME]/troubleshooting' }
  ]
}
```

### 3.2 英語版の設定

```typescript
// 英語版のsidebarセクション（'/en/'）に以下を追加
{
  text: '[TOOL_DISPLAY_NAME]',
  link: '/en/tools/[TOOL_NAME]/',
  collapsed: false,
  items: [
    { text: 'Overview', link: '/en/tools/[TOOL_NAME]/' },
    { text: 'Installation', link: '/en/tools/[TOOL_NAME]/installation' },
    { text: 'Usage Guide', link: '/en/tools/[TOOL_NAME]/usage' },
    { text: 'API Reference', link: '/en/tools/[TOOL_NAME]/api' },
    { text: 'Troubleshooting', link: '/en/tools/[TOOL_NAME]/troubleshooting' }
  ]
}
```

## ステップ4: メインページの更新

### 4.1 日本語版メインページ

`docs/index.md` ファイルに新しいツールのセクションを追加：

```markdown
### [TOOL_DISPLAY_NAME]
[TOOL_SHORT_DESCRIPTION]

- **[概要](/tools/[TOOL_NAME]/)** - プロジェクト概要と紹介
- **[インストール](/tools/[TOOL_NAME]/installation)** - インストール方法
- **[使い方](/tools/[TOOL_NAME]/usage)** - 基本的な使い方とワークフロー
- **[API リファレンス](/tools/[TOOL_NAME]/api)** - 完全なAPI仕様
- **[トラブルシューティング](/tools/[TOOL_NAME]/troubleshooting)** - よくある問題と解決法
```

### 4.2 英語版メインページ

`docs/en/index.md` ファイルに新しいツールのセクションを追加：

```markdown
### [TOOL_DISPLAY_NAME]
[TOOL_SHORT_DESCRIPTION]

- **[Overview](/en/tools/[TOOL_NAME]/)** - Project overview and introduction
- **[Installation](/en/tools/[TOOL_NAME]/installation)** - Installation guide
- **[Usage Guide](/en/tools/[TOOL_NAME]/usage)** - Basic usage and workflows
- **[API Reference](/en/tools/[TOOL_NAME]/api)** - Complete API specifications
- **[Troubleshooting](/en/tools/[TOOL_NAME]/troubleshooting)** - Common issues and solutions
```

## ステップ5: 開発とテスト

### 5.1 開発サーバーの起動

```bash
npm run docs:dev
```

### 5.2 確認事項

- [ ] 全てのページが正しく表示される
- [ ] ナビゲーションが正しく動作する
- [ ] 内部リンクが正しく機能する
- [ ] 日本語と英語の両方でアクセス可能
- [ ] レスポンシブデザインが適切に動作する

## ステップ6: ビルドと公開

### 6.1 本番ビルド

```bash
npm run docs:build
```

### 6.2 プレビュー

```bash
npm run docs:preview
```

## ベストプラクティス

### コンテンツ作成のガイドライン

1. **一貫性**: 既存のツールドキュメントと同じ構造とスタイルを維持
2. **完全性**: すべてのセクション（概要、インストール、使い方、API、トラブルシューティング）を適切に記述
3. **実用性**: 実際の使用例とコードサンプルを含める
4. **多言語**: 日本語と英語の両方で同等の品質を維持

### ファイル命名規則

- ディレクトリ名: ケバブケース（例: `my-awesome-tool`）
- ファイル名: 小文字のケバブケース（例: `installation.md`）
- リンク: 絶対パスを使用（例: `/tools/my-tool/usage`）

### マークダウンのスタイル

- 見出し: H1は各ページに1つのみ、以降はH2から開始
- コードブロック: 言語を指定（例: ```bash, ```javascript）
- リンク: 内部リンクは相対パス、外部リンクは絶対パス

## トラブルシューティング

### よくある問題

#### リンクが404になる
- パスが正しいか確認
- ファイルが存在するか確認
- VitePress設定にルートが追加されているか確認

#### ナビゲーションに表示されない
- `config.ts`のsidebarセクションに正しく追加されているか確認
- 構文エラーがないか確認

#### 多言語切り替えが機能しない
- 日本語版と英語版の両方にファイルが存在するか確認
- パス構造が正しいか確認（`/en/tools/` vs `/tools/`）

## 関連情報

- [VitePress公式ドキュメント](https://vitepress.dev/)
- [マークダウン記法ガイド](https://www.markdownguide.org/)
- 既存ツール例: [CC Slash Command](/tools/cc-slash-command/), [KWS XML Viewer](/tools/kws-xml-viewer/)