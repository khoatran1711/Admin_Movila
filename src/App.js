import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Suspense, lazy } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

//const Homepage = lazy(() => import('./pages/Managepage'))
const Login = lazy(() => import('./pages/LoginPage'))
const Manage = lazy(() => import('./pages/ManagePage'))

const queryClient = new QueryClient()
function App() {
	console.log(window.name)
	return (
		<div className='App'>
			<QueryClientProvider client={queryClient}>
				<Router>
					<Suspense fallback={<h1>Loading...</h1>}>
						<Switch>
							<Route component={Login} path='/login' exact />
							<Route component={Manage} path='/manage' exact />
							<Route component={Login} path='/' exact />
						</Switch>
					</Suspense>
				</Router>
			</QueryClientProvider>
		</div>
	)
}

export default App
