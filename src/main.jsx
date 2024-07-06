import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContextProvider from './components/web/context/User.jsx'
import {CartContextProvider} from './components/web/context/CartFeatures.jsx'
import store from './components/Redux/store.js'
import { Provider } from 'react-redux'
import { WishlistProvider } from './components/web/context/WishlistFeatures.jsx'


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render (

<Provider store={store}>
	<UserContextProvider>
		<CartContextProvider>
			<WishlistProvider>
			<QueryClientProvider client={queryClient}>
				<ToastContainer/>
				<App/>
			</QueryClientProvider>

			</WishlistProvider>
		</CartContextProvider>

	</UserContextProvider>
</Provider>


)
