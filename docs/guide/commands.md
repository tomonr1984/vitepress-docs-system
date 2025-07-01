# カスタムコマンドリファレンス

このページでは、VitePressドキュメント生成システムで利用可能なカスタムコマンドの詳細について説明します。

## 🎯 コマンド概要

現在利用可能なカスタムコマンドは以下の5つです：

| コマンド | 用途 | 対象 |
|----------|------|------|
| `doc-full` | 完全なドキュメント生成 | プロジェクト全体 |
| `doc-api` | APIドキュメント生成 | API・関数・型定義 |
| `doc-update` | ドキュメント更新 | 既存ドキュメント |
| `translate-docs` | 日本語翻訳 | 英語ドキュメント |
| `update-nav` | ナビゲーション更新 | サイト設定 |

## 📋 詳細仕様

### 1. `doc-full` - 完全なドキュメント生成

**用途**: 新しいツールの完全なドキュメント一式を生成

**構文**:
```bash
doc-full [project-path|project-name]
doc-full  # 現在のディレクトリを対象
```

**プロジェクト指定方法**:
- **プロジェクト名**: `my-tool` → `~/src/claude-code/tools/my-tool`を対象
- **絶対パス**: `/full/path/to/project` → 指定パスを対象
- **相対パス**: `./local-tool` → 相対パスを対象
- **引数なし**: 現在の作業ディレクトリを対象

**生成されるファイル**:
- `docs/en/tools/[project-name]/index.md` - 概要と紹介
- `docs/en/tools/[project-name]/installation.md` - インストールガイド
- `docs/en/tools/[project-name]/usage.md` - 使用方法
- `docs/en/tools/[project-name]/api.md` - APIリファレンス
- `docs/en/tools/[project-name]/troubleshooting.md` - トラブルシューティング

**分析対象ファイル**:
- コードファイル: `.py`, `.js`, `.ts`, `.jsx`, `.tsx`, `.java`, `.cpp`, etc.
- 設定ファイル: `.json`, `.yaml`, `.yml`, `.toml`, etc.
- ドキュメント: `.md`, `.rst`, `.txt`
- ビルドファイル: `package.json`, `Cargo.toml`, `setup.py`, etc.

**除外されるディレクトリ**:
- `node_modules/`, `__pycache__/`, `.git/`
- `venv/`, `.venv/`, `env/`, `.env/`
- `dist/`, `build/`, `target/`
- `.idea/`, `.vscode/`

---

### 2. `doc-api` - APIドキュメント生成

**用途**: プロジェクトのAPI仕様書を生成

**構文**:
```bash
doc-api [project-path|project-name]
doc-api  # 現在のディレクトリを対象
```

**生成内容**:
- 公開関数・メソッドの詳細
- インターフェース・型定義
- パラメータと戻り値の説明
- 実用的な使用例
- TypeScript型定義（該当する場合）

**出力ファイル**:
- `docs/en/tools/[project-name]/api.md`

---

### 3. `doc-update` - ドキュメント更新

**用途**: 既存ドキュメントをコードベースの変更に合わせて更新

**構文**:
```bash
doc-update [project-path|project-name]
doc-update  # 現在のディレクトリを対象
```

**更新プロセス**:
1. コードベースの変更を分析
2. 更新が必要なドキュメントセクションを特定
3. 既存構造を維持しながら内容を更新
4. コード例の動作確認と更新
5. 新機能・設定オプションの追加

**対象ファイル**:
- `docs/en/tools/[project-name]/` 内の全ての `.md` ファイル

---

### 4. `translate-docs` - 日本語翻訳

**用途**: 英語ドキュメントを日本語に翻訳

**構文**:
```bash
translate-docs [project-name]  # 指定プロジェクトのみ翻訳
translate-docs                 # 全プロジェクトを翻訳
```

**翻訳プロセス**:
- **ソース**: `docs/en/tools/[project-name]/`
- **出力先**: `docs/tools/[project-name]/`
- **ファイル名**: 元のファイル名を維持

**翻訳されるファイル**:
- `index.md` → 概要と紹介
- `installation.md` → インストールガイド
- `usage.md` → 使用方法
- `api.md` → APIリファレンス
- `troubleshooting.md` → トラブルシューティング
- その他の `.md` ファイル

**翻訳ガイドライン**:
- 自然な日本語への翻訳
- Markdown形式・構造の保持
- コード例・技術用語の正確性維持
- リンク・相互参照の保持
- フロントマターの保持

---

### 5. `update-nav` - ナビゲーション更新

**用途**: 新しいプロジェクトをサイトナビゲーションに追加

**構文**:
```bash
update-nav
```

**更新対象**:
1. **`docs/index.md`** - メインページのツール一覧
2. **`docs/.vitepress/config.ts`** - サイドバーナビゲーション

**自動検出**:
- `docs/en/tools/` ディレクトリをスキャン
- 既存のナビゲーションと比較
- 不足しているプロジェクトを自動追加

**追加される要素**:
```javascript
// 英語サイドバー
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

// 日本語サイドバー（翻訳が存在する場合）
{
  text: 'Project Name',
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

## 🚀 推奨ワークフロー

### 新しいツールのドキュメント作成

```bash
# 1. 完全なドキュメント生成
doc-full [project-path|project-name]

# 2. 日本語翻訳
translate-docs [project-name]

# 3. ナビゲーション更新
update-nav

# 4. 確認
npm run docs:dev
```

### 既存ツールの更新

```bash
# 1. ドキュメント更新
doc-update [project-path|project-name]

# 2. 日本語版も更新
translate-docs [project-name]

# 3. 確認
npm run docs:dev
```

## 🔧 技術詳細

### ファイル分析ルール

- **ファイルサイズ制限**: 1MB以上のファイルはスキップ
- **バイナリファイル**: 自動検出してスキップ
- **.gitignore**: 設定に従ってファイルを除外

### 出力形式

- **プロジェクト名**: 小文字で統一
- **ファイル名**: 小文字で統一
- **構造**: 5セクション標準に準拠

### パフォーマンス最適化

- 関連ファイルのみを対象
- メモリ効率を考慮したファイル分析
- 段階的なドキュメント生成

## 🔗 関連リンク

- [はじめに](./getting-started.md) - 基本的な使い方
- [テンプレート](./templates.md) - 手動でのドキュメント作成
- [ドキュメンテーション標準](../documentation-standards) - 品質基準