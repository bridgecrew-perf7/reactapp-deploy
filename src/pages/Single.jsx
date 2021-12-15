import React from 'react'
import SideBar from '../components/SideBar'
import SinglePost from './SinglePost'


export default function Single() {
    return (
        <div className='single'>
            <SinglePost /> 
            <SideBar />
        </div>
    )
}
