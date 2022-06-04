import React from 'react'

import './style.css'
import test_room from '../../../../assets/hotels/hotel_room.png'
const AllRoomSeg = () => {
	return (
		<div>
			<section id='All_room_title'>Your rooms</section>
			<section id='room_list'>
				<div className='room'>
					<img className='room_img' src={test_room} />
					<div className='room_name'>Room 10228 </div>
					<div className='room_status'>Available </div>
				</div>
				<div className='room'>
					<img className='room_img' src={test_room} />
					<div className='room_name'>Room 10228 </div>
					<div className='room_status'>Available </div>
				</div>
				<div className='room'>
					<img className='room_img' src={test_room} />
					<div className='room_name'>Room 10228 </div>
					<div className='room_status'>Booked </div>
				</div>
				<div className='room'>
					<img className='room_img' src={test_room} />
					<div className='room_name'>Room 10228 </div>
					<div className='room_status'>Available </div>
				</div>
				<div className='room'>
					<img className='room_img' src={test_room} />
					<div className='room_name'>Room 10228 </div>
					<div className='room_status'>Booked </div>
				</div>
			</section>
		</div>
	)
}

export default AllRoomSeg
