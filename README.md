# With Sense 公式サイト

Next.js + Reactで構築したWith Senseのホームページです。団体提供資料と公式情報を基準に、活動内容や写真を掲載しています。

## 開発

```bash
npm install
npm run dev
```

## Netlify仮デプロイ

Netlifyではこのリポジトリを接続し、`netlify.toml` の設定を使用します。

- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`

## Cloudflare Pages本番想定

Next.jsのAPIルートも使う想定のため、Cloudflare Pagesでは `@cloudflare/next-on-pages` を使う構成にしています。

```bash
npm run cloudflare:build
npm run cloudflare:preview
```

Cloudflare Pages側のBuild commandは `npm run cloudflare:build`、Build output directoryは `.vercel/output/static` を想定しています。

## バックエンド予定

現在は以下のAPIルートを用意しています。

- `GET /api/health`
- `POST /api/contact`

`/api/contact` は将来的にメール送信、DB保存、CRM連携などへ接続するための受け口です。
