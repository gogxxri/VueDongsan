const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pwa: {
    name: 'vuestagram',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html'] // 하드 저장에서 제외하고싶은 파일 명
    }
  }
}
