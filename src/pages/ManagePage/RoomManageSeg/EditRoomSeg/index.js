import { Button } from '@mui/material'
import React from 'react'
import './style.css'
import test_room from '../../../../assets/hotels/hotel_room.png'

const EditRoomSeg = () => {
	function onSelect() {
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
									<input type='text' name='room id'></input>
									<div class='label'>Room Name</div>
									<input type='text' name='room id'></input>
									<div class='label'>Room Category</div>
									<input type='text' name='room id'></input>
									<div class='label'>Room Price</div>
									<input type='text' name='room id'></input>
									<div class='label'>Number of guests</div>
									<input type='text' name='room id'></input>
									<div class='label'>Room Area</div>
									<input type='text' name='room id'></input>
									<div class='label'>Wifi</div>
									<input type='text' name='room id'></input>
									<div class='label'>Room Description</div>
									<input type='text' name='room id'></input>
									<div class='label'>Room Picture</div>
									<input type='text' name='room id'></input>
								</form>
								<div id='button_area'>
									<button>Change</button>
									<button>Delete</button>
									<button onClick={offSelect}>Cancel</button>
								</div>
							</div>
						</div>
						<div>
							<section id='room_list_edit'>
								<div className='room_choose' onClick={onSelect}>
									<img className='choose_room_img' src={test_room} />
									<div className='choose_room_name'>Room 10228 </div>
								</div>
								<div className='room_choose' onClick={onSelect}>
									<img className='choose_room_img' src={test_room} />
									<div className='choose_room_name'>Room 10228 </div>
								</div>
								<div className='room_choose' onClick={onSelect}>
									<img className='choose_room_img' src={test_room} />
									<div className='choose_room_name'>Room 10228 </div>
								</div>
								<div className='room_choose' onClick={onSelect}>
									<img className='choose_room_img' src={test_room} />
									<div className='choose_room_name'>Room 10228 </div>
								</div>
								<div className='room_choose' onClick={onSelect}>
									<img className='choose_room_img' src={test_room} />
									<div className='choose_room_name'>Room 10228 </div>
								</div>
							</section>
						</div>
					</section>
				</section>
			</section>
		</div>
	)
}

export default EditRoomSeg
