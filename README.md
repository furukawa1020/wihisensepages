# With Sense 公式サイト

金沢大学の学生を中心に活動するWith Senseの公式サイトです。Next.jsとReactで構築し、団体の活動、感覚の多様性、Sensory Book Loungeの情報を掲載しています。

## 開発

```bash
npm install
npm run dev
```

## Netlifyデプロイ

今回の公開先はNetlifyです。Netlifyでこのリポジトリを接続し、`main`ブランチへの更新を自動デプロイします。

- Build command: `npm run build`
- Publish directory: `.next`
- Next.js adapter: Netlifyが提供する最新版のOpenNextアダプターを自動適用

Netlify側で本番URLが決まったら、環境変数`NEXT_PUBLIC_SITE_URL`にそのURLを設定してください。canonical URL、OGP、サイトマップに反映されます。

## Cloudflare Workersへの将来移行

将来Cloudflare Workersへ移行できるよう、`@opennextjs/cloudflare`の設定も保持しています。今回のデプロイには使用しません。

```bash
npm run cloudflare:preview
npm run cloudflare:deploy
```

## バックエンド予定

現在は次のAPIルートを用意しています。

- `GET /api/health`
- `POST /api/contact`

`/api/contact`は、将来的にメール送信、DB保存、CRM連携などへ接続するための受け口です。
