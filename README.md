This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Portofolio


## Demand Forecasting

See `../demand_forecasting/` for a Gradient Boosting demand forecasting pipeline.

Train a model:
```bash
python ../demand_forecasting/train.py \
  --csv path/to/demand.csv \
  --date-col date \
  --target-col demand \
  --outdir demand_artifacts
```

Generate forecasts:
```bash
python ../demand_forecasting/forecast.py \
  --artifacts demand_artifacts \
  --history path/to/latest_history.csv \
  --date-col date \
  --target-col demand \
  --horizon 14
```

Install dependencies via `pip install -r ../demand_forecasting/requirements.txt`.

## Support Copilot Demo

The Support Copilot API lives in `../support_copilot/` and can be deployed to Railway following the
instructions in that folder. To enable the embedded demo inside this Next.js app, add the deployed
URL to `.env.local`:

```bash
NEXT_PUBLIC_SUPPORT_COPILOT_URL=https://your-service.up.railway.app
```

Restart `npm run dev` after setting the variable. The Support Copilot project page will then issue
requests to `/triage` on that endpoint.
