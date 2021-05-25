module.exports = {
  apps: [
    {
      name: 'app_api',
      script: 'src/app.js',
      instances: 1, // 实例个数
      autorestart: true, // 是否自动重启
      watch: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      max_memory_restart: '500M'
    },
  ],

};
