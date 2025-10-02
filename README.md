# スピログラフ (TypeScript + React + Storybook)

React 18とTypeScript、Atomic Designパターンで構築されたスピログラフアニメーションアプリケーションです。

## デモプレイ
https://yunbow.github.io/react-app-spirograph/demo/

## 主要機能

### スピログラフ描画
- スピログラフ（幾何学的図形）のリアルタイム描画
- パラメータ調整による図形の変更
- アニメーション機能とステップ実行
- 色や線の太さのカスタマイズ

### 操作方法
- **パラメータスライダー**: 外側円半径、内側円半径、ペンオフセット、速度を調整
- **アニメーション実行ボタン**: 自動描画の開始/一時停止
- **ステップ実行ボタン**: 1ステップずつ手動描画
- **クリアボタン**: キャンバスをクリア
- **色選択**: 線の色と背景色を変更
- **線の太さ**: 描画線の太さを調整

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 基本コンポーネント
│   ├── molecules/      # 機能単位コンポーネント
│   └── organisms/      # 画面領域コンポーネント
├── stories/            # Storybook用ストーリー
├── types/              # TypeScript型定義
├── hooks/              # カスタムフック
├── utils/              # 共通処理
├── Config.ts           # 設定値
├── App.tsx             # メインアプリ
└── main.tsx            # エントリーポイント
```

## Atomic Design構成

### Atoms（基本コンポーネント）
- `Button` - 操作ボタン
- `RangeInput` - スライダー入力
- `ColorInput` - 色選択
- `Canvas` - 描画キャンバス

### Molecules（機能単位）
- `ParameterControls` - パラメータ調整コントロール
- `StyleControls` - スタイル調整コントロール
- `ControlButtons` - 操作ボタン群

### Organisms（画面領域）
- `SpirographApp` - アプリケーション全体

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License