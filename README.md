# Liquid Glass Portfolio

Apple Liquid Glass 风格个人作品集网站，基于 Astro 静态生成。

## 本地运行

```bash
npm install
npm run dev
```

打开 Astro 输出的本地地址，通常是 http://localhost:4321

## 构建

```bash
npm run build
```

构建产物在 `dist/`，可直接部署到 Cloudflare Pages、Vercel、Netlify 或 GitHub Pages。

## Cloudflare Pages 推荐配置

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: 22

## 需要替换的内容

主要编辑文件：

```text
src/pages/index.astro
```

替换：
- `profile.name`
- `profile.role`
- `profile.intro`
- `profile.email`
- `projects` 数组
- `skills` 数组
