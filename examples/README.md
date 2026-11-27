# examples

`@okayuya/greeting` を GitHub Packages からインストールして使うサンプルです。

## セットアップ

`read:packages` スコープを持つ GitHub トークンを `GITHUB_TOKEN` に設定してからインストールします。

```bash
export GITHUB_TOKEN=<your token>   # gh CLI を使う場合: export GITHUB_TOKEN=$(gh auth token)
npm install
```

## 実行

Node.js 24 以降(TypeScript の型ストリップに対応)が必要です。

```bash
npm start
```

出力:

```
Hello, World
Hello, okayuya
```
