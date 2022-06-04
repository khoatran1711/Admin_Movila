import React from 'react'

import './style.css'
import test_room from '../../../assets/hotels/hotel_room_3.png'
const BookRoomSeg = () => {
	function onSelect() {
		document.getElementById('overlay').style.display = 'block'
	}

	function offSelect() {
		document.getElementById('overlay').style.display = 'none'
	}
	return (
		<div id='all_book_area'>
			<div id='overlay'>
				<div id='book_form'>
					<img id='booked_room_img' src={test_room}></img>
					<section id='information_room'>
						<div id='booked_room_name'>Room 10228</div>
						<div id='booked_room_type'>Single Room</div>
						<div id='booked_room_guest_book_name'>Khoa Tran</div>
						<div id='booked_room_guest_book_phone'>0908851760</div>
						<div id='booked_room_guest_book_time'>Booking time: 19:30 am</div>
						<div id='booked_button'>
							<button id='validate'>Validate</button>
							<button id='cancel' onClick={offSelect}>
								Cancel
							</button>
						</div>
					</section>
				</div>
			</div>
			<section id='All_book_room_title'>Booked rooms</section>
			<section id='booked_room_list'>
				<div className='booked_room' onClick={onSelect}>
					<img className='booked_room_img' src={test_room} />
					<div className='booked_room_name'>Room 10228 </div>
				</div>
				<div className='booked_room' onClick={onSelect}>
					<img className='booked_room_img' src={test_room} />
					<div className='booked_room_name'>Room 10228 </div>
				</div>
				<div className='booked_room' onClick={onSelect}>
					<img className='booked_room_img' src={test_room} />
					<div className='booked_room_name'>Room 10228 </div>
				</div>
				<div className='booked_room' onClick={onSelect}>
					<img className='booked_room_img' src={test_room} />
					<div className='booked_room_name'>Room 10228 </div>
				</div>
				<div className='booked_room' onClick={onSelect}>
					<img className='booked_room_img' src={test_room} />
					<div className='booked_room_name'>Room 10228 </div>
				</div>
			</section>
		</div>
	)
}

export default BookRoomSeg
