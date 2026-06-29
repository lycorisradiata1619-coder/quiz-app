# quiz-app

HTML/CSS/JavaScript で構築された一般常識クイズアプリ。

## 技術スタック

- **HTML5** — マークアップ・構造
- **CSS3** — スタイリング・アニメーション
- **JavaScript (ES6+)** — クイズロジック・UI インタラクション

## プロジェクト構成

```
quiz-app/
├── index.html          # エントリーポイント（クイズ画面）
├── css/
│   └── style.css       # スタイルシート
├── js/
│   ├── main.js         # エントリースクリプト・初期化
│   ├── quiz.js         # クイズロジック（出題・採点）
│   └── questions.js    # 問題データ
└── CLAUDE.md
```

## アプリ概要

- 一般常識（歴史・地理・科学・文化など）のクイズを出題する
- 選択肢形式（4択）で回答する
- 正誤判定・スコア集計・結果表示を行う

## 開発ガイドライン

- モジュールは ES6 モジュール構文 (`import`/`export`) を使用する
- CSS はクラスベースのスタイリングを優先し、セレクターの詳細度を低く保つ
- JavaScript はバニラ JS を使用し、外部ライブラリの追加を避ける
- ファイル名はケバブケース (`my-component.js`) で統一する
- 問題データは `questions.js` に集約し、ロジックと分離する

## ブラウザ対応

モダンブラウザ（Chrome・Firefox・Edge・Safari 最新版）を対象とする。

## GitHubリポジトリ

https://github.com/lycorisradiata1619-coder/quiz-app.git
