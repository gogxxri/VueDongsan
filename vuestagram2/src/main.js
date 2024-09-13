import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import router from './router'

let emitter = mitt();
let app = createApp(App);
// 글로벌한 변수 보관함에 {emitter : emitter} 추가
// 자주 사용하는 라이브러리를 등록할 수 있음
// ex. app.config.globalProperties.axios=axios 하면 임포트 필요없이 this.axios로 사용 가능
app.config.globalProperties.emitter = emitter;

import store from './store.js'

// createApp(App).mount('#app')
// createApp을 상단에 app 변수에 저장했기 때문에
app.use(store);
app.use(router);
app.mount('#app')
// 모든 컴포넌트가 store에 있는 데이터를 직접 사용 가능