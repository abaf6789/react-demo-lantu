//cSpell:word Pushable Siderbar

import React, { Component } from 'react'
import { Sidebar, Segment, Header } from 'semantic-ui-react'
import SidebarHeader from "./header"
import Siderbar from "./siderbar"
import Pusher from "./pusher"

class SidebarLeftScaleDown extends Component {
    state = {
        visible: false,
        animated: true,
        content: "",
        data: [{
            name: "服务蓝图",
        }, {
            name: "服务蓝图文字介绍",
        }, {
            name: "分析顾客行为",
        }, {
            name: "分析前台行为",
        }, {
            name: "分析后台行为",
        }, {
            name: "分析支持行为",
        }, {
            name: "总结服务蓝图体验",
        }, {
            name: "小测验",
        }, {
            name: "下载报告",
        }]
    }


    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible, animated: !this.state.animated })
    }
    clickFn = (index) => {
        this.setState({ content: index + 1 })
    }

    componentDidMount() {
        this.toggleVisibility()
    }
    render() {
        const sideStyle = { height: "837px", margin: "0" }
        return (
            <div>
                <SidebarHeader animated={this.state.animated} toggleVisibility={this.toggleVisibility} />
                <Sidebar.Pushable as={Segment} style={sideStyle}>
                    <Siderbar visible={this.state.visible} data={this.state.data} clickFn={this.clickFn} />
                    <Pusher content={this.state.content} />
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default SidebarLeftScaleDown
