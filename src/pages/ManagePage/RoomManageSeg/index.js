import react from 'react'

import './style.css'
import addicon from './pic/button.png'
import editicon from './pic/editing.png'
import allicon from './pic/bullet-list.png'
import { Suspense, lazy } from 'react'
import React, { useState } from 'react'
const AddRoomSeg = lazy(() => import('./AddRoomSeg'))
const EditRoomSeg = lazy(() => import('./EditRoomSeg'))
const AllRoomSeg = lazy(() => import('./AllRoomSeg'))
const RoomManageSeg = () => {
	const [count, setCount] = useState(1)
	function myfuntion() {
		setCount(0)
	}
	function myfuntion1() {
		setCount(1)
	}
	function myfuntion2() {
		setCount(2)
	}
	function myfuntion3() {
		setCount(3)
	}
	return (
		<div>
			<section id='room_manage_area'>
				<section id='room_manage_option'>
					<div className='card_option' onClick={myfuntion1}>
						<img src={addicon}></img>
					</div>
					<div className='card_option' onClick={myfuntion2}>
						<img src={editicon}></img>
					</div>
					<div className='card_option' onClick={myfuntion3}>
						<img src={allicon}></img>
					</div>
				</section>
				<section id='room_manage_info'>
					{' '}
					{(() => {
						if (count === 1) {
							return <AddRoomSeg />
						} else if (count === 2) {
							return <EditRoomSeg />
						} else if (count === 3) {
							return <AllRoomSeg />
						}
					})()}{' '}
				</section>
			</section>
		</div>
	)
}
export default RoomManageSeg
