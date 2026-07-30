# QingshuiGeothermal.com

清水地熱公園單頁旅遊指南。採用 Astro、Tailwind CSS、TypeScript 與 Cloudflare Workers；無資料庫、無登入、無 CMS。

## 已完成

- 臺灣繁體中文單語網站
- 清水地熱公園實景照片全部下載至 `public/images/`
- 2026 年暑期延長開放提醒
- 地熱煮食步驟、食材時間與多工倒數計時器
- 交通、停車、親子安全、一日遊與 FAQ
- Google Analytics 4：`G-HXM22WWPKP`
- `TouristAttraction`、`WebSite`、`FAQPage` JSON-LD
- robots.txt、sitemap.xml、Open Graph 圖、PWA manifest
- Cloudflare Workers 部署設定
- 照片授權與隱私權內頁

## 本機啟動

需要 Node.js 22 以上版本。

```bash
corepack enable
pnpm install
pnpm dev
```

開啟 `http://localhost:4321`。

## 建置

```bash
pnpm build
pnpm preview
```

## 部署到 Cloudflare Workers

1. 登入 Cloudflare：

```bash
pnpm exec wrangler login
```

2. 建置並部署：

```bash
pnpm deploy
```

3. 在 Cloudflare Workers 專案的 **Settings → Domains & Routes** 綁定：

- `qingshuigeothermal.com`
- `www.qingshuigeothermal.com`（建議 301 轉向無 www 主域名）

## 維護入口

主要景點資料集中於：

```text
src/data/site.ts
```

更新開放時間、食材計時、FAQ 或核對日期時，優先修改此檔案。

## 照片授權

授權內容集中在 `/credits`。若替換圖片，請同時更新該頁並確認圖片可合法再利用。
