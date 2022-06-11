import { Button } from '@mui/material'
import React from 'react'
import './style.css'
import test_room from '../../../../assets/hotels/hotel_room.png'
import { UseGetHotelNotBookRoom } from '../../../../DataQuery/Queri.queries'
import { UsePutRoom } from '../../../../DataQuery/Queri.queries'
import { UseDeleteRoom } from '../../../../DataQuery/Queri.queries'

const EditRoomSeg = () => {
	const my_room = UseGetHotelNotBookRoom(window.name)
	const edit_btn = UsePutRoom()
	const delete_btn = UseDeleteRoom()
	console.log(my_room)
	function onSelect(
		id,
		name,
		cat,
		description,
		area,
		imageURL,
		numberOfGuest,
		price,
		view,
		wifi,
		floor
	) {
		document.getElementById('edit_room_id').defaultValue = id
		document.getElementById('edit_room_name').defaultValue = name
		document.getElementById('edit_room_cate').defaultValue = cat
		document.getElementById('edit_room_price').defaultValue = price
		document.getElementById('edit_room_guests').defaultValue = numberOfGuest
		document.getElementById('edit_room_area').defaultValue = area
		document.getElementById('edit_room_wifi').defaultValue = wifi
		document.getElementById('edit_room_des').defaultValue = description
		document.getElementById('edit_room_image').defaultValue = imageURL
		document.getElementById('edit_room_view').defaultValue = view
		document.getElementById('edit_room_floor').defaultValue = floor
		document.getElementById('overlay').style.display = 'block'
	}

	function offSelect() {
		document.getElementById('overlay').style.display = 'none'
	}
	return (
		<div>
			<section id='Edit_room_seg'>
				<section id='Edit_room_title'>Edit your rooms</section>
				<section id='Edit_room_list'>
					<section id='Room_edit_select'></section>
					<section id='Room_list'>
						<div id='overlay'>
							<div id='edit_form_area'>
								<form id='edit_form'>
									<div class='label'>Room ID</div>
									<input id='edit_room_id' type='text' name='room id' disabled='true'></input>
									<div class='label'>Room Name</div>
									<input id='edit_room_name' type='text' name='room id'></input>
									<div class='label'>Room Category</div>
									<input id='edit_room_cate' type='text' name='room id'></input>
									<div class='label'>Room Price</div>
									<input id='edit_room_price' type='text' name='room id'></input>
									<div class='label'>Number of guests</div>
									<input id='edit_room_guests' type='text' name='room id'></input>
									<div class='label'>Room Area</div>
									<input id='edit_room_area' type='text' name='room id'></input>
									<div class='label'>Wifi</div>
									<input id='edit_room_wifi' type='text' name='room id'></input>
									<div class='label'>Room Description</div>
									<input id='edit_room_des' type='text' name='room id'></input>
									<div class='label'>Room Picture</div>
									<input id='edit_room_image' type='text' name='room id'></input>
									<div class='label'>View</div>
									<input id='edit_room_view' type='text' name='room id'></input>
									<div class='label'>Floor</div>
									<input id='edit_room_floor' type='text' name='room id'></input>
								</form>
								<div id='button_area'>
									{edit_btn}
									{delete_btn}
									<button onClick={offSelect}>Cancel</button>
								</div>
							</div>
						</div>
						<div>
							<section id='room_list_edit'>
								{my_room.length > 0
									? my_room.map((item) => (
											<div
												className='room_choose'
												onClick={() =>
													onSelect(
														item.id,
														item.name,
														item.cat,
														item.description,
														item.area,
														item.imageURL,
														item.numberOfGuest,
														item.price,
														item.view,
														item.wifi,
														item.floor
													)
												}
											>
												<img className='choose_room_img' src={item.imageURL} />
												<div className='choose_room_name'>Room {item.name} </div>
											</div>
									  ))
									: ''}
							</section>
						</div>
					</section>
				</section>
			</section>
		</div>
	)
}

export default EditRoomSeg
