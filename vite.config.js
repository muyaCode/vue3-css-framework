import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
function _resolve(dir) {
  return path.resolve(__dirname, dir)
}

import px2rem from 'postcss-plugin-px2rem';
const px2remOptions = {
  rootValue: 37.5,  // 换算基数， 默认100 ,也就是1440px ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多少px了
  unitPrecision: 5, // 允许REM单位增长到的十进制数字，其实就是精度控制
  // propWhiteList: [], // 默认值是一个空数组，这意味着禁用白名单并启用所有属性。
  // propBlackList: [], // 黑名单
  exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
  // selectorBlackList: [], // 要忽略并保留为px的选择器
  // ignoreIdentifier: false, //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
  // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
  mediaQuery: false, //（布尔值）允许在媒体查询中转换px
  minPixelValue: 3  // 设置要替换的最小像素值(3px会被转rem)。 默认 0
}
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // base: import.meta.env.BASE_URL,
  // 自动打开浏览器
  server: {
    host: '0.0.0.0', // 通过ip的形式访问
    port: 5173, // 端口号
    open: true, // 自动打开浏览器
    // 配置代理，但是我步推荐前端去代理，
    // 因为打包后便不会在有代理，上线后是个坑
    proxy: {
      // '/api': {
      //     target: 'http://API网关所在域名',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      // },
    }
  },
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 使用@use或者@import都是一样的效果
        additionalData: 
        `
        @import "./src/style/global.scss";
        `,
      },
    },
    postcss: {
      plugins: [px2rem(px2remOptions)]
    }
  },
});
