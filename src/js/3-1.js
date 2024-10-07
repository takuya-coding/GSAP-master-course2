// ■ScrollToプラグイン
// スムーススクロールに秒数やイージングを付けたい時、各ブラウザ間でアニメーション動作に差異が出ないようにしたい時に使う（動きが滑らか）
// scrollTo:{x:目的地,y:目的地}
// 目的地には数値もオブジェクト（要素）も指定できる→素のJSより楽！！
// autoKillも重要
// ヘッダー高さを考慮

// ■注意点
// scroll-behavior（CSSでスムーススクロールを実装する方法）と併用しない！！！！

// ■要点
// aタグの範囲
// 通常のJSでも同じようなことが実はできる
// e.preventDefault();
// →デフォルトのブラウザのスクロール動作をキャンセルして、カスタムされたスムーススクロールアニメーションを実行するためです。
// document?window?


// まずは素のJSでスムーススクロールしてみよう
// document.addEventListener('DOMContentLoaded',function(){
//     const list = document.querySelector('.list');
//     const anchors = document.querySelectorAll('.list li a');
//     anchors.forEach((anchor)=>{
//         anchor.addEventListener('click',(e)=>{ //eはイベントオブジェクト（eventでもOK）
//             e.preventDefault(); //aタグ自体のhref属性による内部リンク移動とJSのスムースクロールの動きの衝突をキャンセルする
//             let element = document.querySelector(anchor.getAttribute('href')); //Attribute = 属性
//             window.scrollTo({
//                 top:element.offsetTop,
//                 behavior:'smooth',
//             })
//         })
//     })
// })


// GSAPのScrollToプラグインを使用
document.addEventListener('DOMContentLoaded',function(){
    const list = document.querySelector('.list');
    const anchors = document.querySelectorAll('.list li a');
    anchors.forEach((anchor)=>{
        anchor.addEventListener('click',(e)=>{
            e.preventDefault();
            gsap.to(window,{duration:1,ease:'power2.out',scrollTo:{ //秒数やイージングを付けられる
                y:anchor.getAttribute('href'),
                offsetY:list.offsetHeight, //ヘッダー高さを考慮
                // autoKill:true, //スムーススクロール中にスクロールすると、強制的にスムーススクロールを終了できる（デフォルトだとfalseになっている）
            }})
        })
    })
})