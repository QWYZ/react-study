import React, { useEffect } from 'react'
import './index.css'

const Home = () => {

    const Html1 = `
    <nav class="nav">
            <button type="menu"  id="button1" class="nav-item" >菜单一</button>
            <button type="menu" class="nav-item" >菜单二</button>
            <button type="menu" class="nav-item" >菜单三</button>
        </nav>
        <nav class="nav2"></nav>
        <main style="padding: 5px;">
            <article>
                <h1>box-sizing(css)</h1>
                <section>
                    <div style="display:inline-block;border: 5px blue solid; width: 100px; height:100px;">
                        <div style="border: 5px solid red; box-sizing:content-box;width: 100%; height: 100px;">
                            box-sizing:content-box;
                        </div>
                    </div>
                    <div style="display:inline-block;border: 5px blue solid; width: 100px; height: 100px;">
                        <div style="border: 5px solid red; box-sizing:border-box;width: 100%; height: 100px;">
                            box-sizing:border-box;
                        </div>
                    </div>
                </section>
                <h1>BFC范例-外边距塌陷</h1>
                <section class="clearfix">
                    <div class="box" style="display:inline-block;">display:inline-block</div>
                    <div class="box">外边距塌陷下margin</div>
                    <div class="box">外边距塌陷上margin</div>
                    <div class="box" style="height: 200px; float: left;">父元素添加浮动清除</div>
                </section>
                <h1>居中对齐(css)</h1>
                <section>
                    <div style="line-height: 100px; text-align:center; background: blue;">
                        文本内容垂直居中居中
                    </div>
                    <br />
                    <h3>translate + 绝对定位</h3>
                    <div style="border: 5px solid blue; height: 100px; position: relative;">
                        <div class="h-center" style="background: rgb(255, 166, 0);">
                            盒子水平居中
                        </div>
                        <div class="v-center" style="background: rgb(255, 242, 0);">
                            盒子垂直居中
                        </div>
                        <div class="hv-center" style="background: blue;">
                            水平垂直居中
                        </div>
                    </div>
                    <h3>flex + justify-content</h3>
                    <div
                        style="height:50px;display: flex;border: 5px solid blue;justify-content: center; align-items:center">
                        <div style="background: blue;">水平垂直居中</div>
                    </div>
                </section>
            </article>
            <article>
                <h1>透明度颜色叠加测试（red、green、blue）</h1>
                <section>
                    <h3>opacity: 0.5</h3>
                    <div style="display:flex;justify-content:center">
                        <div style="opacity: 0.5; width:100px; height:100px; border-radius: 50%;background:red;"></div>
                        <div style="margin-left: -40px;">
                            <div style="opacity: 0.5; width:100px; height:100px; border-radius: 50%;background:green; margin-top: -40px;"></div>
                            <div style="opacity: 0.5; width:100px; height:100px; border-radius: 50%;background:blue; margin-top: -40px;"></div>  
                        </div>
                    </div>
                    <h3>opacity: 1</h3>
                    <div style="display:flex;justify-content:center">
                        <div style="opacity: 1; width:100px; height:100px; border-radius: 50%;background:red;"></div>
                        <div style="margin-left: -40px;">
                            <div style="opacity: 1; width:100px; height:100px; border-radius: 50%;background:green; margin-top: -40px;"></div>
                            <div style="opacity: 1; width:100px; height:100px; border-radius: 50%;background:blue; margin-top: -40px;"></div>  
                        </div>
                    </div>
                </section>
            </article>
            
        </main>`
    Notification.requestPermission(
        (status) => {
            // 这将使我们能在 Chrome/Safari 中使用 Notification.permission
            if (Notification.permission !== status) {
                Notification.permission = status;
            }
        }
    )

    useEffect(() => {
        if (window.Notification && Notification.permission === "granted") {
            var n = new Notification("Hi!");
        }
    })
    let a = [1, [2, [3]]].flat(2);
    console.log('[1, [2, [3]]].flat(2);',a);
    
    return (
        <div dangerouslySetInnerHTML={{ __html: Html1 }}>

        </div>
    )
}

export default Home