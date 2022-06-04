import react from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import BedroomChildIcon from '@mui/icons-material/BedroomChild'
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove'
import { grey } from '@mui/material/colors'
import { Suspense, lazy } from 'react'
import React, { useState } from 'react'
import './style.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const InfoSeg = lazy(() => import('./InfoSeg'))
const RoomManageSeg = lazy(() => import('./RoomManageSeg'))
const BookRoomSeg = lazy(() => import('./BookRoomSeg'))

const ManagePage = () => {
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
			<Tabs>
				<section id='manage_area'>
					<section id='manage_option'>
						<section id='menu_option'>
							<div className='icon'>
								<LogoutIcon fontSize='large' sx={{ color: grey[100] }} />
							</div>

							<div className='icon' onClick={myfuntion1}>
								<BookmarkRemoveIcon fontSize='large' sx={{ color: grey[100] }} />
							</div>

							<div className='icon' onClick={myfuntion2}>
								<BedroomChildIcon fontSize='large' sx={{ color: grey[100] }} />
							</div>

							<div className='icon' onClick={myfuntion3}>
								<SettingsIcon fontSize='large' sx={{ color: grey[100] }} />
							</div>
						</section>
					</section>
					<section id='info_option'>
						<section id='info_area'>
							{' '}
							{(() => {
								if (count === 1) {
									return <BookRoomSeg />
								} else if (count === 2) {
									return <RoomManageSeg />
								} else if (count === 3) {
									return <InfoSeg />
								}
							})()}{' '}
						</section>
					</section>
				</section>
			</Tabs>
		</div>
	)
}

export default ManagePage
