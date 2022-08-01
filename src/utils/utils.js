
/**test */
export function test() {
    console.log(typeof 1);               // number
    console.log(typeof true);            // boolean
    console.log(typeof 'mc');            // string
    console.log(typeof Symbol)           // function
    console.log(typeof function () { });    // function
    console.log(typeof console.log());   // undefined
    console.log(typeof []);              // object 
    console.log(typeof {});              // object
    console.log(typeof null);            // object
    console.log(typeof undefined);       // undefined
    console.log(1 instanceof Number);                    // false
    console.log(true instanceof Boolean);                // false 
    console.log('str' instanceof String);                // false  
    console.log([] instanceof Array);                    // true
    console.log(function () { } instanceof Function);       // true
    console.log({} instanceof Object);                   // true
    var toString = Object.prototype.toString;
    console.log(toString.call(1));                      //[object Number]
    console.log(toString.call(true));                   //[object Boolean]
    console.log(toString.call('mc'));                   //[object String]
    console.log(toString.call([]));                     //[object Array]
    console.log(toString.call({}));                     //[object Object]
    console.log(toString.call(function () { }));           //[object Function]
    console.log(toString.call(undefined));              //[object Undefined]
    console.log(toString.call(null));                   //[object Null]
}

/**节流
 * 功能描述：让一个函数在指定周期内，只能加载一次
 */
export function throttle(fn, delay) {
    //记录上次函数触发的时间
    var lasttime = 0;
    return function () {
        let nowtime = Date.now();
        if (nowtime - lasttime > delay) {
            console.log(this);
            fn.call(this);
            lasttime = nowtime;
        }
    }
}

/**防抖
 * 功能描述：让一个函数在规定时间内，只让最后一次生效，原理：如触发时间间隔少于设定重置定时器
 */
export function debounce(fn, delay) {
    var timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => { fn.call(this) }, delay)
    }
}