import React from 'react'

import './style.css'

const AddRoomSeg = () => {
	return (
		<div>
			<section id='Add_room_seg'>
				<section id='Add_room_title'>Add new Room</section>
				<section id='Add_room_form'>
					<form id='add_room_form'>
						<div class='label'>Room ID</div>
						<input class='add_room_text' type='text' name='room id'></input>
						<div class='label'>Room Name</div>
						<input class='add_room_text' type='text' name='room id'></input>
						<div class='label'>Room Category</div>
						<input class='add_room_text' type='text' name='room id'></input>
						<div class='label'>Room Price</div>
						<input class='add_room_text' type='text' name='room id'></input>
						<div class='label'>Number of guests</div>
						<input class='add_room_text' type='text' name='room id'></input>
						<div class='label'>Room Area</div>
						<input class='add_room_text' type='text' name='room id'></input>
						<div class='label'>Wifi</div>
						<input class='add_room_text' type='text' name='room id'></input>
						<div class='label'>Room Description</div>
						<input class='add_room_text' type='text' name='room id'></input>
						<div class='label'>Room Picture</div>
						<input type='text' class='add_room_text' name='room id'></input>
					</form>
					<input id='add_room_submit' type='submit' value='Add a new room'></input>
				</section>
			</section>
		</div>
	)
}

export default AddRoomSeg
