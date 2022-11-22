import React, { Component } from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import { BrowserRuntimeExtension } from '../../utils/extension'
export class Success extends Component {
    render() {
        return (
            <div className='flex flex-row justify-center h-full'>
               
               <div className='flex flex-col justify-start items-center'>
                    <h1 className='text-2xl font-bold p-6'>Success</h1>
                    <AiFillCheckCircle className='text-green-500 text-6xl mb-10' />
                    <p className='text-xl'>Account created successfully.</p>
                    <button onClick={
                        () => {
                            BrowserRuntimeExtension.closeActiveTab()
                        }

                    } className="w-full bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-4 rounded mt-20" >Finish</button>
                </div>
            </div>
        )
    }
}

export default Success