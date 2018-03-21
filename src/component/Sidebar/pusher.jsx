import React, { Component } from 'react'
import { Sidebar, Segment, Header } from 'semantic-ui-react'

export default class Pusher extends Component {
    render() {
        return (
            <Sidebar.Pusher>
                <Segment basic>
                    <Header as='h3'>{this.props.content}</Header>
                </Segment>
            </Sidebar.Pusher>
        )
    }
}
