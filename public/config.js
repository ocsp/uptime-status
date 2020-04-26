// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm784824490-7fb91d057a3e5bd0bcc73f3d',
    'm784824495-a1e8b99065faf9df5ec93e17',
    'm784824503-5f7c4fc14f29ce388b3763d8',
    'm784824505-8c8cba3a8cba4b75b9a12063',
    'm784824508-bbbacf894ce06959d0ae19b8',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://arknights.work/?u=status/'
    }
  ]
};
