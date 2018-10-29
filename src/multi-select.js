import React from 'react';
import './multi-select.css';
class MultiSelect extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.decorate = this.decorate.bind(this)
        this.state = {
            item: null
        }
    }


    render() {
        let data = this.decorate(this.props.data)
        console.log('data', data)
        return (<div className="items">
            {
                this.state.item
                    ? (this.dealAll(data, this.state.item.index))
                    : (<div className="item">{this.dealCase(data)}</div>)

            }
        </div>)
    }

    // 处理多个选项
    dealAll(data, indexs) {
        console.log('indexs', indexs)
        var item = this.beautifyCase(data, indexs)
        var nextData = data
        var list = indexs.map((item, index) => {
            console.log('**', item)
            nextData = nextData[item].children
            return this.beautifyCase(nextData, indexs[index + 1])
        })
        list.unshift(item)
        return list
    }

    // 包装单例
    beautifyCase(data, indexs) {
        return (data && data.length)
            ? (
                <div className="item" key={JSON.stringify(data)}>
                    {this.dealCase(data, indexs)}
                </div>
            )
            : null
    }


    // 处理单个选项
    dealCase(data, indexs) {
        return (
            <select onChange={this.handleChange}>
                {data.map((item, index) => {
                    return <option key={item.key} selected={indexs ? indexs[0] === index : false} value={JSON.stringify(item)}>{item.value}</option>
                })}
            </select>
        )

    }

    // 人为给每项添加index
    decorate(data, indexArr = []) {
        data.forEach((item, index) => {
            indexArr.push(index)
            item.index = indexArr.slice(0)
            if (item.children) {
                this.decorate(item.children, indexArr)
            }
            indexArr.pop()
        })
        return data
    }

    // 每次onChange会重新触发渲染
    handleChange(e) {
        var item = JSON.parse(e.target.value)
        this.setState({
            item: item
        })
        this.props.onChange(item)
    }

}

export default MultiSelect