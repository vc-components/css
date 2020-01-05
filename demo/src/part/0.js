import React from 'react';
import img_a from '../a.jpeg';

class Part0 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="part">
                <h2>block</h2>
                <div style={{ border: '1px solid' }}>
                    <div style={{ height: '50px', margin: '50px 0', background: 'red' }}>1</div>
                    <div style={{ height: '50px', margin: '50px 0', background: 'yellow' }}>2</div>
                    <div style={{ height: '50px', margin: '50px 0', background: 'blue' }}>3</div>
                </div>

                <h2>inline</h2>
                <div style={{ textAlign: 'initial', border: '1px solid' }}>
                    猜猜我是谁啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊<span style={{ fontSize: '50px' }}>呀呀</span>啊啊啊啊才啊啊哎哎哎啊才哎哎哎哎哎哎啊<img src={img_a}></img></div>
            </div>
        );
    }
}

export default Part0;

/**
 * ifc规则呢，说起来很简单，吧啦啦啦啦啦
 * 我们在最开始说了，就是为了 位置和大小
 * 
 * 1、我们 取第一行全是文字的 来看一下高度是怎么计算的（由此可以引出 line-height 行距 半行距 为啥line-height可以让单行文字垂直居中）
 * 
 * 2、拿第二行 小文字 和 大文字高度 引出 vertical-align base-line
 * 
 * 3、拿只有一张图片来看高度是怎么计算的，（由此可以引出 空白节点 vertical-align base-line 可替换元素 inline-block默认是怎么垂直对齐的）
 */