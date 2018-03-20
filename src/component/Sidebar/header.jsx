import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class SidebarHeader extends Component {
    render() {
        const titleStyle = { color: "#fff", textAlign: "center", height: "50px", lineHeight: "50px", position: "relative", paddingRight: "250px" }
        const btnStyle = { float: "left", marginLeft: "-172px", fontSize: "22px", cursor: "pointer" }
        const backStyle = { fontSize: "12px", float: "left", display: "inline-block", background: "#373737", color: "#fff", width: "200px", height: "50px", textAlign: "center", lineHeight: "50px" }
        const BackBtn = () => {
            return (
                <a href="javascript:" className="btnBack" style={backStyle}><Icon name="chevron left" />返回课程介绍</a>
            )
        }
        return (
            <div>
                <BackBtn />
                <div className={this.props.animated ? "heador" : "heador active"} style={titleStyle}>
                    <Icon onClick={this.props.toggleVisibility} style={btnStyle} name="list layout" />
                    服务蓝图
                </div>
            </div>
        )
    }
}
