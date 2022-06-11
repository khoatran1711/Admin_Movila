import React from 'react'

import './style.css'
import { UsePostRoom } from '../../../../DataQuery/Queri.queries'

const AddRoomSeg = () => {
	console.log(window.name)
	const btn = UsePostRoom(window.name)
	return (
		<div>
			<section id='Add_room_seg'>
				<section id='Add_room_title'>Add new Room</section>
				<section id='Add_room_form'>
					<form id='add_room_form'>
						<div className='label'>Room Name</div>
						<input id='add_room_name' className='add_room_text' type='text' name='room id'></input>
						<div className='label'>Room Category</div>
						<input id='add_room_cate' className='add_room_text' type='text' name='room id'></input>
						<div className='label'>Room Price</div>
						<input id='add_room_price' className='add_room_text' type='text' name='room id'></input>
						<div className='label'>Floor</div>
						<input id='add_room_floor' className='add_room_text' type='text' name='room id'></input>
						<div className='label'>Number of guests</div>
						<input
							id='add_room_guests'
							className='add_room_text'
							type='text'
							name='room id'
						></input>
						<div className='label'>Room Area</div>
						<input id='add_room_area' className='add_room_text' type='text' name='room id'></input>
						<div className='label'>Wifi</div>
						<input id='add_room_wifi' className='add_room_text' type='text' name='room id'></input>
						<div className='label'>View</div>
						<input id='add_room_view' className='add_room_text' type='text' name='room id'></input>
						<div className='label'>Room Description</div>
						<input
							id='add_room_description'
							className='add_room_text'
							type='text'
							name='room id'
						></input>
						<div className='label'>Room Picture</div>
						<input id='add_room_image' type='text' className='add_room_text' name='room id'></input>
					</form>
					{btn}
				</section>
			</section>
		</div>
	)
}

export default AddRoomSeg
