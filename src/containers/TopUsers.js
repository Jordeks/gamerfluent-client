import React, { Component } from 'react'
import UserCard from '../components/UserCard'

export default class TopUsers extends Component {
    render() {
        return (
            <div className='top-users'>
                I hold top User Cards
                <UserCard />
            </div>
        )
    }
}
