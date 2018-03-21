import React, { Component } from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'
import Item from "./item"

export default class Siderbar extends Component {
    state = {
        selectedIndex: ""
    }
    clickFn2 = (index) => {
        this.props.clickFn(index)
        this.setState({ selectedIndex: index })
    }
    render() {
        const SidebarStyle = { width: "200px", background: "#373737", textOverflow: "ellipsis", wordBreak: "break-all", whiteSpace: "nowrap", overflow: "hidden", fontSize: "13px" }
        return (
            <Sidebar as={Menu} animation='scale down' width='thin' visible={this.props.visible} icon='labeled' vertical inverted style={SidebarStyle}>
                {this.props.data.map((item, index) => {
                    return <Item selectedIndex={this.state.selectedIndex} index={index} item={item} key={index} clickFn2={this.clickFn2} visible={this.props.visible} animation='scale down' />
                })}
            </Sidebar>
        )
    }
}
