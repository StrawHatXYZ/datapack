import React, { Component } from 'react'

export class Success extends Component {
    render() {
        return (
            <div className='flex h-full'>
                <div className='m-auto'>
                    <h1 className="text-gray-800 text-xl">Account Created Successfully!</h1>
                </div>
            </div>
        )
    }
}

export default Success