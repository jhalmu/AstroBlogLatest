module.exports = {
  apps: [
    {
      name: 'astro-build',
      script: 'npm',
      args: 'run build',
      watch: ['src/content/blog'],
      ignore_watch: ['node_modules', '.astro', 'dist'],
      autorestart: false,
      env: {
        NODE_ENV: 'production'
      },
      exec_mode: 'fork',
      pre_action: {
        watch_restart: 'pm2 flush'
      }
    }
  ]
};
