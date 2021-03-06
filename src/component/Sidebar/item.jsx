import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class Item extends Component {
    render() {
        const IconStyle = { display: "inline-block", fontSize: "12px" }
        const itemStyle = { textAlign: "start", fontWeight: "100", color: "#aaa" }
        const selectStyle = { textAlign: "start", fontWeight: "100", color: "#aaa", borderLeft: "6px solid #00a5ff", borderRadius: "4px" }
        const index = this.props.index
        const selectedIndex = this.props.selectedIndex
        const item = this.props.item
        return (
            <Menu.Item style={(selectedIndex === index) ? selectStyle : itemStyle} name={item.name} key={index} onClick={this.props.clickFn2.bind(this, index)}>
                <Icon name="home" style={IconStyle} />
                {item.name}
            </Menu.Item>
        )
    }
}
