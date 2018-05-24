import React, { Component } from 'react';
import './calculator.less';
import { Button, Input } from 'antd'
const { TextArea } = Input;
class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            model: 1, // 0手动 1点击
            input: '',// 手动输入框
            result: '' // 结果
        }
        this.select = this.select.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.calculate = this.calculate.bind(this);
        this.keycodeClick = this.keycodeClick.bind(this);

    }
    componentDidMount() {
        var board = window.document.getElementsByClassName('board')[0]
        board.onselectstart = () => {
            return false
        }
        board.oncontextmenu = () => {
            return false;
        }
        function keyDown(event) {
            if (this.state.model === 0) return
            var needReturn = false
            switch (event.key) {
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '+':
                case '-':
                case '*':
                case '/':
                case '0':
                case '.':
                    break;
                case 'Enter':
                    this.calculate();
                    needReturn = true
                    break;
                case 'BackSpace':
                    this.setState({
                        input: this.state.input.substring(0, this.state.input.length - 1)
                    })
                    needReturn = true
                    break
                default:
                    needReturn = true
            }
            if (needReturn) return
            this.setState({
                input: this.state.input + event.key
            })
        }
        window.document.addEventListener('keydown', keyDown.bind(this), false)
    }
    render() {
        const onHands = <div className="onHands">
            <h3>在下面输入框内输入计算公式会在后面得到对应的结构</h3>
            <TextArea value={this.state.input} placeholder="输入算式" onPressEnter={this.calculate} onChange={this.handleChange}></TextArea>
            <Button onClick={this.calculate}>计算</Button>
            <div className="result">
                结果集为： {this.state.result}
            </div>
        </div>
        const onClicks = <div className="onClicks">
            <h3>点击/键盘输入算式后计算</h3>
            <div className="board">
                <span data-keycode={"1"} onClick={this.keycodeClick}>1</span>
                <span data-keycode={"2"} onClick={this.keycodeClick}>2</span>
                <span data-keycode={"3"} onClick={this.keycodeClick}>3</span>
                <span data-keycode={"CE"} onClick={this.keycodeClick}>CE</span>
                <span data-keycode={"4"} onClick={this.keycodeClick}>4</span>
                <span data-keycode={"5"} onClick={this.keycodeClick}>5</span>
                <span data-keycode={"6"} onClick={this.keycodeClick}>6</span>
                <span data-keycode={"C"} onClick={this.keycodeClick}>C</span>
                <span data-keycode={"7"} onClick={this.keycodeClick}>7</span>
                <span data-keycode={"8"} onClick={this.keycodeClick}>8</span>
                <span data-keycode={"9"} onClick={this.keycodeClick}>9</span>
                <span data-keycode={"*"} onClick={this.keycodeClick}>*</span>
                <span data-keycode={"0"} onClick={this.keycodeClick}>0</span>
                <span data-keycode={"-"} onClick={this.keycodeClick}>-</span>
                <span data-keycode={"+"} onClick={this.keycodeClick}>+</span>
                <span data-keycode={"/"} onClick={this.keycodeClick}>/</span>
            </div>
            <h4>您输入的算式集为:</h4>
            <div className="showBoard">
                {this.state.input}
            </div>
            <Button onClick={this.calculate}>计算</Button>
            <div className="result">
                结果集为： {this.state.result}
            </div>
        </div>
        return (
            <div className="calculator-wrapper">
                <h2>计算器网页版</h2>
                <div className="tab">
                    <span onClick={this.select} data-index={0} className={this.state.model === 0 ? 'hover' : ''}>手动公式输入法</span>
                    <span onClick={this.select} data-index={1} className={this.state.model === 1 ? 'hover' : ''}>点击输入法</span>
                </div>
                {
                    this.state.model === 0
                        ? onHands
                        : onClicks
                }

            </div>
        );
    }
    select(e) {
        console.log(typeof e.target.dataset.index)
        this.setState({
            model: +e.target.dataset.index,
            input: '',// 手动输入框
            result: '' // 结果
        })
    }
    handleChange(event) {
        this.setState({ input: event.target.value });
    }
    // 计算
    calculate() {
        console.log('```算式', this.state.input)
        var isUsable = true
        try {
            eval(this.state.input)
        } catch (e) {
            console.log('1111')
            if (e) {
                this.setState({
                    result: '算式有误'
                })
                isUsable = false
            }
        } finally {
            if (isUsable) {
                this.setState({
                    result: eval(this.state.input)
                })
            }

        }

    }
    // 点击
    keycodeClick(e) {
        console.log()
        var input = e.target.dataset.keycode
        if (input === 'CE') { // 全删
            this.setState({
                input: ''
            })
            return
        }
        if (input === 'C') { // 删除一个
            this.setState({
                input: this.state.input.substring(0, this.state.input.length - 1)
            })
            return
        }
        this.setState({
            input: this.state.input + e.target.dataset.keycode
        })
    }
}

export default Calculator;
