import React from 'react'

import './style.css'
import test_room from '../../../../assets/hotels/hotel_room.png'
import { UseGetHotelNotBookRoom } from '../../../../DataQuery/Queri.queries'
import { UseGetHotelBookRoom } from '../../../../DataQuery/Queri.queries'
const AllRoomSeg = () => {
	const not_book_room = UseGetHotelNotBookRoom(window.name)
	const book_room = UseGetHotelBookRoom(window.name)
	return (
		<div>
			<section id='All_room_title'>Your rooms</section>
			<section id='room_list'>
				{not_book_room.length > 0
					? not_book_room.map((item) => (
							<div className='room'>
								<img className='room_img' src={item.imageURL} />
								<div className='room_name'>Room {item.name} </div>
								<div className='room_status'>Available </div>
							</div>
					  ))
					: ''}
				{book_room.length > 0
					? book_room.map((item) => (
							<div className='room'>
								<img className='room_img' src={item.imageURL} />
								<div className='room_name'>Room {item.name} </div>
								<div className='room_status'>Booked</div>
							</div>
					  ))
					: ''}
			</section>
		</div>
	)
}

export default AllRoomSeg
