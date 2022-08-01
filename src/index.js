import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.css';
import Home from "./pages/home/index.jsx";
import testJson from './utils/test.json'
function App() {

    //基本类型:number、string、boolean、null、undefined、symbol、bigint
    //引用类型:Object、Function
    //Object:普通对象、正则对象（regexp）、数组对象(array)、日期对象（date）、Math数学函数对象
    let num = Number(1);
    let str = String(1);
    let bln = Boolean(1);
    let nu = null;
    let ubd = undefined;
    let syl1 = Symbol(1);
    let syl2 = Symbol(1);
    console.log('Symbol(1)与Symbol(1)', syl1 == syl2);
    //对象
    let object1 = {
        name: 'xixi',
        age: 12,
        gender: '男'
    }
    let object2 = {
        name: 'yiyi',
        weight: 18,
    }
    Object.assign(object1, object2);
    console.log('对象', object1);
    //函数
    const testfunc = () => {
        console.log('hahahhaha!');
    }
    console.log('函数', testfunc);

    //构造函数
    //构造函数是通过new关键字来生成对象实例，生成对象实例的过程也是通过构造函数给实例绑定this的过程，而箭头函数没有自己的this
    function Person(name, age, gender, other) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.prototype = other;
    }

    function Person2(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    const person1 = new Person('阿呆', 12, '男', {
        prototype: 'hahah'
    })
    const person2 = new Person2('阿呆2', 12, '男')
    console.log('构造函数', person1, Person.prototype.constructor);
    console.log('构造函数2', person2, Person2.prototype.constructor);


    //TypedArray
    let arr = new Uint8Array([10, 20, 30, 40, 255, 256, 500]);
    // 你的浏览器必须支持 for..of 循环
    // 以及 for 循环中的 let 区域变量
    for (let n of arr) {
        console.log(n);
    }
    console.log('TypedArray', typeof arr, arr);

    let a0 = {
        "name": "xixi",
        "age": 12,
        "gender": "男"
    }
    // let a1 = JSON.parse(a0);
    let a2 = JSON.stringify(testJson);
    let a3 = JSON.stringify(a2);
    //
    console.log('jsonStr', a2, a3);

    //MAP
    let map1 = new Map()
    console.log(map1);
    //arguments
    function argfun(params) {
        console.log(arguments);
    }

    argfun('hah');



    return (
        // <div style={{ width: '100%', height: 30, background: 'rbg(6,0,0)' }}>
        //     <h1>JS基础</h1>
        //     <span>Symbol(1)==Symbol(1)：{String(syl1 == syl2)}</span>
        //     <div>
        //         <span>Object.assign(object1,object2)：{JSON.stringify(object1)}</span>
        //     </div>
        // </div>
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <App />
);
