import {debounce,throttle} from './utils/utils';
import jsonTest from './utils/test.json';
import './app.css'

let a = document.getElementById('button1');
console.log('jsonTest',jsonTest);
if (a) {
    a.onclick = debounce(function (e) {
        console.log('按钮被点击了' + Date.now(),e);
    }, 1000);
}
// 滚动节流测试
document.onscroll = throttle(function () {
    console.log('scllor事件被触发了' + Date.now());
}, 3000);

// document.getElementById('root').appendChild()
// test();
// let a = test();
// console.log('函数',a)