# Luxury Hotel System - Heroku Deployment

This project is configured for Heroku deployment.

## Prerequisites

- Git repository initialized
- Heroku CLI installed
- Heroku account

## Deployment Steps

### 1. Commit your changes
```bash
git add .
git commit -m "Configure for Heroku deployment"
```

### 2. Create a Heroku app (if not already created)
```bash
heroku create your-app-name
```

Or link to existing app:
```bash
heroku git:remote -a your-existing-app-name
```

### 3. Push to Heroku
```bash
git push heroku main
```

If you're on a different branch:
```bash
git push heroku your-branch:main
```

### 4. Open your app
```bash
heroku open
```

## How it works

- **Root `package.json`**: Tells Heroku this is a Node.js app
- **`Procfile`**: Defines the web process that runs on Heroku
- **Build process** (`heroku-postbuild`):
  1. Installs frontend dependencies
  2. Builds the Vite production bundle to `frontend/dist`
  3. Serves static files using `serve` package on Heroku's assigned port

## Files Created

- `/package.json` - Root package file with Heroku build scripts
- `/Procfile` - Heroku process configuration
- `/.gitignore` - Git ignore rules

## Troubleshooting

### Check logs
```bash
heroku logs --tail
```

### Verify buildpack
```bash
heroku buildpacks
```

Should show: `heroku/nodejs`

### Set Node.js version
The `engines` field in `package.json` specifies Node 18.x

### Environment Variables
If you need to set environment variables:
```bash
heroku config:set VARIABLE_NAME=value
```

## Local Testing

Test the production build locally:
```bash
cd frontend
npm run build
npx serve -s dist
```

