import React from 'react'

import './style.css'
import test_room from '../../../assets/hotels/hotel_room_3.png'
import { UseGetBookingByID } from '../../../DataQuery/Queri.queries'
import { UseValidateRoom } from '../../../DataQuery/Queri.queries'
const BookRoomSeg = () => {
	const my_bookings = UseGetBookingByID(window.name)
	function onSelect(id, room_name, cate, user_name, user_phone, booking_time, img) {
		document.getElementById('booking_id').value = id
		document.getElementById('booked_room_name').innerHTML = 'Room ' + room_name
		document.getElementById('booked_room_type').innerHTML = cate + ' room'
		document.getElementById('booked_room_guest_book_name').innerHTML = user_name
		document.getElementById('booked_room_guest_book_phone').innerHTML = user_phone
		document.getElementById('booked_room_guest_book_time').innerHTML =
			'Booking time: ' + booking_time
		document.getElementById('booked_room_img').src = img
		document.getElementById('booked_room_img').style.width = '40vw'
		document.getElementById('booked_room_img').style.height = '35vw'
		document.getElementById('booked_room_img').style.backgroundSize = '100% 100%'

		document.getElementById('overlay').style.display = 'block'
	}

	function offSelect() {
		document.getElementById('overlay').style.display = 'none'
	}
	return (
		<div id='all_book_area'>
			<div id='overlay'>
				<div id='book_form'>
					<img id='booked_room_img'></img>
					<section id='information_room'>
						<input id='booking_id' type='hidden'></input>
						<div id='booked_room_name'>Room 10228</div>
						<div id='booked_room_type'>Single Room</div>
						<div id='booked_room_guest_book_name'>Khoa Tran</div>
						<div id='booked_room_guest_book_phone'>0908851760</div>
						<div id='booked_room_guest_book_time'>Booking time: 19:30 am</div>
						<div id='booked_button'>
							{UseValidateRoom()}
							<button id='cancel' onClick={offSelect}>
								Cancel
							</button>
						</div>
					</section>
				</div>
			</div>
			<section id='All_book_room_title'>Booked rooms</section>
			<section id='booked_room_list'>
				{my_bookings.length > 0 ? (
					my_bookings.map((item) => (
						<div
							className='booked_room'
							onClick={() =>
								onSelect(
									item.id,
									item.booked_room.name,
									item.booked_room.cat,
									item.user_booking.firstName + ' ' + item.user_booking.lastName,
									item.user_booking.phone,
									item.checkinDate,
									item.booked_room.imageURL
								)
							}
						>
							<img className='booked_room_img' src={item.booked_room.imageURL} />
							<div className='booked_room_name'>Room {item.booked_room.name} </div>
						</div>
					))
				) : (
					<div id='No_book'>No booked room</div>
				)}
			</section>
		</div>
	)
}

export default BookRoomSeg
