# APIリファレンス

[TOOL_NAME]の完全なAPIリファレンスです。

## コマンド概要

```bash
[TOOL_COMMAND] [OPTIONS] [ARGUMENTS]
```

## グローバルオプション

すべてのコマンドで使用できるオプション：

| オプション | 短縮形 | 説明 | デフォルト |
|-----------|--------|------|-----------|
| `[GLOBAL_OPTION_1]` | `[GLOBAL_OPTION_1_SHORT]` | [GLOBAL_OPTION_1_DESCRIPTION] | `[GLOBAL_OPTION_1_DEFAULT]` |
| `[GLOBAL_OPTION_2]` | `[GLOBAL_OPTION_2_SHORT]` | [GLOBAL_OPTION_2_DESCRIPTION] | `[GLOBAL_OPTION_2_DEFAULT]` |
| `[GLOBAL_OPTION_3]` | `[GLOBAL_OPTION_3_SHORT]` | [GLOBAL_OPTION_3_DESCRIPTION] | `[GLOBAL_OPTION_3_DEFAULT]` |

## コマンド

### `[COMMAND_1]`

[COMMAND_1_DESCRIPTION]

**構文:**
```bash
[TOOL_COMMAND] [COMMAND_1] [COMMAND_1_OPTIONS] [COMMAND_1_ARGUMENTS]
```

**オプション:**

| オプション | 短縮形 | 説明 | デフォルト |
|-----------|--------|------|-----------|
| `[COMMAND_1_OPTION_1]` | `[COMMAND_1_OPTION_1_SHORT]` | [COMMAND_1_OPTION_1_DESCRIPTION] | `[COMMAND_1_OPTION_1_DEFAULT]` |
| `[COMMAND_1_OPTION_2]` | `[COMMAND_1_OPTION_2_SHORT]` | [COMMAND_1_OPTION_2_DESCRIPTION] | `[COMMAND_1_OPTION_2_DEFAULT]` |

**例:**
```bash
# [COMMAND_1_EXAMPLE_1_DESCRIPTION]
[COMMAND_1_EXAMPLE_1]

# [COMMAND_1_EXAMPLE_2_DESCRIPTION]
[COMMAND_1_EXAMPLE_2]
```

### `[COMMAND_2]`

[COMMAND_2_DESCRIPTION]

**構文:**
```bash
[TOOL_COMMAND] [COMMAND_2] [COMMAND_2_OPTIONS] [COMMAND_2_ARGUMENTS]
```

**オプション:**

| オプション | 短縮形 | 説明 | デフォルト |
|-----------|--------|------|-----------|
| `[COMMAND_2_OPTION_1]` | `[COMMAND_2_OPTION_1_SHORT]` | [COMMAND_2_OPTION_1_DESCRIPTION] | `[COMMAND_2_OPTION_1_DEFAULT]` |
| `[COMMAND_2_OPTION_2]` | `[COMMAND_2_OPTION_2_SHORT]` | [COMMAND_2_OPTION_2_DESCRIPTION] | `[COMMAND_2_OPTION_2_DEFAULT]` |

**例:**
```bash
# [COMMAND_2_EXAMPLE_1_DESCRIPTION]
[COMMAND_2_EXAMPLE_1]

# [COMMAND_2_EXAMPLE_2_DESCRIPTION]
[COMMAND_2_EXAMPLE_2]
```

### `[COMMAND_3]`

[COMMAND_3_DESCRIPTION]

**構文:**
```bash
[TOOL_COMMAND] [COMMAND_3] [COMMAND_3_OPTIONS] [COMMAND_3_ARGUMENTS]
```

**オプション:**

| オプション | 短縮形 | 説明 | デフォルト |
|-----------|--------|------|-----------|
| `[COMMAND_3_OPTION_1]` | `[COMMAND_3_OPTION_1_SHORT]` | [COMMAND_3_OPTION_1_DESCRIPTION] | `[COMMAND_3_OPTION_1_DEFAULT]` |

**例:**
```bash
# [COMMAND_3_EXAMPLE_1_DESCRIPTION]
[COMMAND_3_EXAMPLE_1]
```

## 設定ファイル

### 設定ファイルの場所

- **ローカル設定**: `[LOCAL_CONFIG_PATH]`
- **グローバル設定**: `[GLOBAL_CONFIG_PATH]`

### 設定ファイルの形式

```[CONFIG_FORMAT]
[CONFIG_EXAMPLE]
```

### 設定項目

| 項目 | 型 | 説明 | デフォルト |
|------|-----|------|-----------|
| `[CONFIG_ITEM_1]` | `[CONFIG_ITEM_1_TYPE]` | [CONFIG_ITEM_1_DESCRIPTION] | `[CONFIG_ITEM_1_DEFAULT]` |
| `[CONFIG_ITEM_2]` | `[CONFIG_ITEM_2_TYPE]` | [CONFIG_ITEM_2_DESCRIPTION] | `[CONFIG_ITEM_2_DEFAULT]` |
| `[CONFIG_ITEM_3]` | `[CONFIG_ITEM_3_TYPE]` | [CONFIG_ITEM_3_DESCRIPTION] | `[CONFIG_ITEM_3_DEFAULT]` |

## 環境変数

| 環境変数 | 説明 | デフォルト |
|---------|------|-----------|
| `[ENV_VAR_1]` | [ENV_VAR_1_DESCRIPTION] | `[ENV_VAR_1_DEFAULT]` |
| `[ENV_VAR_2]` | [ENV_VAR_2_DESCRIPTION] | `[ENV_VAR_2_DEFAULT]` |
| `[ENV_VAR_3]` | [ENV_VAR_3_DESCRIPTION] | `[ENV_VAR_3_DEFAULT]` |

## 終了コード

| コード | 説明 |
|-------|------|
| `0` | 正常終了 |
| `1` | 一般的なエラー |
| `[EXIT_CODE_1]` | [EXIT_CODE_1_DESCRIPTION] |
| `[EXIT_CODE_2]` | [EXIT_CODE_2_DESCRIPTION] |

## 関連情報

- [使用ガイド](usage.md) - 基本的な使い方
- [トラブルシューティング](troubleshooting.md) - よくある問題と解決方法